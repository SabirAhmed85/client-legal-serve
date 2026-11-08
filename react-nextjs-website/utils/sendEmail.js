import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const sendEmail = async ({ Name, Company, Email, Phone, Message }) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const CONTACT_FORM_ENDPOINT = process.env.CONTACT_FORM_ENDPOINT;
  const emailToAddress = process.env.CONTACT_EMAIL_TO || 'info@legalservebedford.co.uk';
  const emailFromAddress = process.env.SENDGRID_FROM_EMAIL || 'noreply@legalservebedford.co.uk';

  // If a custom external PHP endpoint is configured in environment variables, forward to it server-to-server
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

  if (!SENDGRID_API_KEY) {
    throw new Error('Missing SENDGRID_API_KEY environment variable on the hosting server.');
  }

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
