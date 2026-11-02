import { NextApiRequest, NextApiResponse } from 'next';

import { sendEmail } from '../../utils/sendEmail';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    const Name = body.Name || body.name || '';
    const Company = body.Company || body.company || '';
    const Email = body.Email || body.email || '';
    const Phone = body.Phone || body.phone || '';
    const Message = body.Message || body.message || '';

    if (!Name || !Email || !Message) {
      return res.status(400).json({
        status: 'Error',
        message: 'Name, Email, and Message are required.'
      });
    }

    try {
      await sendEmail({ Name, Company, Email, Phone, Message });
      return res.status(200).json({ status: 'Success' });
    } catch (error: any) {
      console.error('Contact form email error:', error?.message || error);
      return res.status(500).json({
        status: 'Error',
        message: error?.message || 'Failed to send email.'
      });
    }
  }

  return res.status(404).json({
    error: {
      code: 'not_found',
      message: "The requested endpoint was not found or doesn't support this method."
    }
  });
};
