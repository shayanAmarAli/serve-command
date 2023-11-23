// pages/api/upload.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Process the uploaded file here
      // For simplicity, this example just responds with a success message
      res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
      console.error('Error processing file upload', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
