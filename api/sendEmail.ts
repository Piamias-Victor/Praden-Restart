import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { to, templateId, data } = req.body;

      // Remplacez par vos identifiants Mailjet
      const apiKey = process.env.MAILJET_API_KEY;
      const apiSecret = process.env.MAILJET_API_SECRET;

      const response = await axios.post(
        'https://api.mailjet.com/v3/send',
        {
          Messages: [
            {
              From: {
                Email: 'noreply@pharmacieagnespraden.com', // Remplacez par votre adresse e-mail
                Name: 'Votre Nom', // Nom de l'expéditeur
              },
              To: [
                {
                  Email: 'victorpiamiaspro@gmail.com',
                },
              ],
              TemplateID: templateId,
              TemplateLanguage: true,
              Variables: data,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
          },
        },
      );

      return res.status(200).json(response.data);
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sendEmail;
