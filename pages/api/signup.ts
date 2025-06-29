import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  try {
    const client = await clientPromise;
    const db = client.db();
    const users = db.collection('users');
    const existing = await users.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { name, email, password: hashedPassword };
    await users.insertOne(user);
    return res.status(201).json({ name, email });
  } catch {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
