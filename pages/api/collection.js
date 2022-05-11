import { promises } from 'fs';
import Character from '../../models/Character';
import dbConnect from '../../lib/dbConnect';

export default async function handleCollect(req, res) {
  if (req.method === 'POST') {
    try {
      const newItem = await Character.create(
        req.body
      ); /* create a new Character in the database */
      res.status(201).json({ success: true, data: newItem });
    } catch (error) {
      res.status(400).json({ success: false });
    }

    return;
  }
  res.status(403).json({ message: 'Error: request method not allowed.' });
}
