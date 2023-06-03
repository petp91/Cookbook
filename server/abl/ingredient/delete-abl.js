const ingredientDao = require('../../dao/file_storage/ingredient-dao');
const recipeDao = require('../../dao/file_storage/recipe-dao');

async function DeleteAbl(req, res) {
    try {

        const id = req.params.id;
        let allRecipe = await recipeDao.getAllRecipes();
        let matchedIngredient;


        allRecipe.forEach(recipe => {

            if (matchedIngredient === undefined) {
                matchedIngredient = recipe.ingredients.find(e => e.id === id);
            } else {
                return;
            }

            


        })

        
        console.log(matchedIngredient);



        if (matchedIngredient === undefined) {

            let deletedIngredient = await ingredientDao.deleteIngredient(id);

            if (deletedIngredient) {
                res.send(deletedIngredient);
            } else {
                res.status(404).send({
                    errors: [`an ingredient with the id ${id} was not found`]
                });
            }
        } else {
            console.error("Ingredient is currently used in a recipe, deletion failed");
            res.status(400).send({
                errors: ["Ingredient is currently used in a recipe, deletion failed"]
            });
            return;
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [e.message]
        });
    }
}

module.exports = DeleteAbl;