import emailjs from 'emailjs-com';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const response = await emailjs.send(
        'service_qh4ie9w',
        'template_2wgw9vr',
        { name, email, message },
        'bpX8sf_uwvfAMXBXK'
      );
      res.status(200).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};