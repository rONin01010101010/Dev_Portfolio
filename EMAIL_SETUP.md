# Email Setup Guide

The contact form is configured to send emails to `jkenan72@gmail.com`. To enable full email functionality, follow one of these options:

## Option 1: Using Nodemailer with Gmail (Simple)

1. Install nodemailer:
   ```bash
   npm install nodemailer
   ```

2. Set up Gmail App Password:
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the generated password

3. Create a `.env.local` file in the project root:
   ```env
   EMAIL_USER=jkenan72@gmail.com
   EMAIL_PASSWORD=your_app_password_here
   ```

4. Update `app/api/send-email/route.js` to uncomment the nodemailer code.

## Option 2: Using Resend (Recommended for Production)

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Sign up at https://resend.com and get your API key

3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. Update `app/api/send-email/route.js`:
   ```javascript
   import { Resend } from 'resend';

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request) {
     const { name, email, message } = await request.json();

     await resend.emails.send({
       from: 'onboarding@resend.dev',
       to: 'jkenan72@gmail.com',
       subject: `Portfolio Contact from ${name}`,
       html: `
         <h3>New Contact Form Submission</h3>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
       `
     });

     return NextResponse.json({ success: true });
   }
   ```

## Current Functionality

Currently, the form uses a mailto link as a fallback, which opens the user's default email client. This works but requires the user to have an email client configured.

After implementing one of the options above, emails will be sent directly from the website without requiring the user's email client.

## Security Note

Never commit your `.env.local` file to git. It's already in `.gitignore`.
