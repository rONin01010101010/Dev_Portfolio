import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // For now, we'll use a mailto fallback approach
    // To implement actual email sending, you would need to:
    // 1. Install nodemailer: npm install nodemailer
    // 2. Set up email credentials in .env.local
    // 3. Configure nodemailer transport

    // Example with nodemailer (commented out - requires installation):
    /*
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: email,
      to: 'jkenan72@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    */

    // For a production-ready solution, consider using services like:
    // - Resend (npm install resend)
    // - SendGrid
    // - AWS SES
    // - Mailgun

    return NextResponse.json(
      {
        success: true,
        message: 'Email functionality ready. Please install nodemailer or use an email service.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
