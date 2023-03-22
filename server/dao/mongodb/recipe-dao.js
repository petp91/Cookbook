const mongoose = require('mongoose');

// schema se bude měnit
const RecipeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    displayName: { type: String, required: true },
    displayImage: { type: String },
    size: { type: String, required: true },
    description: { type: String },
    ingredients: { type: Object, required: true },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
    getAllRecipes: async () => {
        return await Recipe.find();
    }
}