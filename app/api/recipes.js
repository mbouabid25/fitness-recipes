import dbConnect from '../../utils/dbConnect';
import Recipe from '../../models/recipe';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const newRecipe = new Recipe(req.body);
      await newRecipe.save();
      res.status(201).json({ success: true, data: newRecipe });
    } catch (error) {
      console.error("Error adding recipe: ", error);
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.status(400).json({ success: false });
  }
}