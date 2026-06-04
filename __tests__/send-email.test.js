const mockSendMail = jest.fn();
const mockCreateTransport = jest.fn(() => ({ sendMail: mockSendMail }));

jest.mock('nodemailer', () => ({
  createTransport: mockCreateTransport,
}));

// Minimal NextResponse mock that mirrors what the route uses
jest.mock('next/server', () => ({
  NextResponse: {
    json: (body, init = {}) => ({
      body,
      status: init.status ?? 200,
    }),
  },
}));

const { POST } = require('../app/api/send-email/route');

function makeRequest(body) {
  return { json: async () => body };
}

describe('POST /api/send-email', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.EMAIL_USER = 'test@example.com';
    process.env.EMAIL_PASSWORD = 'secret';
  });

  test('returns 400 when name is missing', async () => {
    const res = await POST(makeRequest({ email: 'a@b.com', message: 'hi' }));
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required');
    expect(mockSendMail).not.toHaveBeenCalled();
  });

  test('returns 400 when email is missing', async () => {
    const res = await POST(makeRequest({ name: 'Alice', message: 'hi' }));
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required');
  });

  test('returns 400 when message is missing', async () => {
    const res = await POST(makeRequest({ name: 'Alice', email: 'a@b.com' }));
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('All fields are required');
  });

  test('returns 400 when body is empty', async () => {
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
  });

  test('creates transporter with correct Gmail credentials', async () => {
    mockSendMail.mockResolvedValue({});
    await POST(makeRequest({ name: 'Alice', email: 'a@b.com', message: 'hello' }));

    expect(mockCreateTransport).toHaveBeenCalledWith({
      service: 'gmail',
      auth: { user: 'test@example.com', pass: 'secret' },
    });
  });

  test('calls sendMail with correct fields on valid input', async () => {
    mockSendMail.mockResolvedValue({});
    const res = await POST(
      makeRequest({ name: 'Alice', email: 'alice@example.com', message: 'Hello there' })
    );

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ success: true });

    expect(mockSendMail).toHaveBeenCalledTimes(1);
    const mailArgs = mockSendMail.mock.calls[0][0];
    expect(mailArgs.to).toBe('test@example.com');
    expect(mailArgs.replyTo).toBe('alice@example.com');
    expect(mailArgs.subject).toContain('Alice');
    expect(mailArgs.text).toContain('Hello there');
    expect(mailArgs.html).toContain('Hello there');
  });

  test('returns 500 when nodemailer throws', async () => {
    mockSendMail.mockRejectedValue(new Error('SMTP connection refused'));
    const res = await POST(
      makeRequest({ name: 'Bob', email: 'bob@example.com', message: 'test' })
    );
    expect(res.status).toBe(500);
    expect(res.body.error).toBe('Failed to send email');
  });
});
