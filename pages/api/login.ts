import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection('users');
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ name: user.name, email: user.email });
  } 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
