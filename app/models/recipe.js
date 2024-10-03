import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  macros: {
    protein: String,
    fat: String,
    carbs: String,
    calories: String,
  },
  prepTime: String,
  cookTime: String,
});

export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);