import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const sendEmail = async ({ Name, Company, Email, Phone, Message }) => {
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const CONTACT_FORM_ENDPOINT = process.env.CONTACT_FORM_ENDPOINT;

  const emailToAddress = process.env.CONTACT_EMAIL_TO || 'info@legalservebedford.co.uk';
  const emailFromAddress =
    process.env.SMTP_FROM ||
    process.env.SENDGRID_FROM_EMAIL ||
    SMTP_USER ||
    'noreply@legalservebedford.co.uk';

  const safeName = escapeHtml(Name);
  const safeEmail = escapeHtml(Email);
  const safeOrganisation = Company && Company.trim() !== '' ? escapeHtml(Company) : 'No organisation specified';
  const safePhone = Phone && Phone.trim() !== '' ? escapeHtml(Phone) : 'No phone number specified';
  const safeMessage = escapeHtml(Message).replace(/\r?\n/g, '<br />');

  const htmlMessage = `<html>
    <head>
      <title>Legal Serve Website Contact</title>
    </head>
    <body>
      <table>
        <tr>
          <td>
            <p>Hi, you have been contacted via your website. Please see details:</p>
            <p>Name: ${safeName}</p>
            <p>Email: ${safeEmail}</p>
            <p>Organisation: ${safeOrganisation}</p>
            <p>Phone: ${safePhone}</p>
            <p>Message: ${safeMessage}</p>
          </td>
        </tr>
      </table>
    </body>
  </html>`;

  // 1. Direct SMTP via existing email account (No external third-party service required)
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true' || SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `Legal Serve <${emailFromAddress}>`,
      to: `Legal Serve Admin <${emailToAddress}>`,
      replyTo: `${Name} <${Email}>`,
      subject: 'Legal Serve Website Contact',
      html: htmlMessage
    });

    return { status: 'Success' };
  }

  // 2. Optional external PHP endpoint fallback
  if (CONTACT_FORM_ENDPOINT && !SENDGRID_API_KEY) {
    const response = await fetch(CONTACT_FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Name, Company, Email, Phone, Message })
    });

    if (!response.ok) {
      throw new Error(`External contact endpoint returned status ${response.status}`);
    }

    const result = await response.text();
    if (result.includes('Success')) {
      return { status: 'Success' };
    }
    throw new Error(`External contact endpoint failed: ${result}`);
  }

  // 3. SendGrid API fallback
  if (!SENDGRID_API_KEY) {
    throw new Error(
      'Missing email configuration on server: set SMTP_HOST/SMTP_USER/SMTP_PASS (or SENDGRID_API_KEY) in environment variables.'
    );
  }

  const response = await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: emailToAddress,
              name: 'Legal Serve Admin'
            }
          ],
          subject: 'Legal Serve Website Contact'
        }
      ],
      from: {
        email: emailFromAddress,
        name: 'Legal Serve'
      },
      reply_to: {
        email: Email,
        name: Name
      },
      content: [
        {
          type: 'text/html',
          value: htmlMessage
        }
      ]
    })
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`SendGrid API error (${response.status}): ${errorBody}`);
  }

  return { status: 'Success' };
};

export { sendEmail };
