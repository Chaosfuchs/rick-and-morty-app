import { promises } from 'fs';
import path from 'path';
import process from 'process';

const cwd = process.cwd();
const databaseFile = path.join(cwd, 'database.json');

export default async function handleCollect(req, res) {
  if (req.method === 'POST') {
    const data = await promises.readFile(databaseFile, 'utf-8');
    const parsedData = JSON.parse(data);
    const newCard = req.body;

    console.log(newCard);

    parsedData.collection.push(newCard);
    promises.writeFile(databaseFile, JSON.stringify(parsedData, null, 4));
    res.status(201).json(newCard);

    return;
  }
  res.status(403).json({ message: 'Error: request method not allowed.' });
}
