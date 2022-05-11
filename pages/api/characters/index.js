import dbConnect from '../../../lib/dbConnect';
import Character from '../../../models/Character';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const character = await Character.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: character });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newItem = await Character.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: newItem });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      break;
    default:
      res.status(403).json({ message: 'Method is not available' });
      break;
  }
}
