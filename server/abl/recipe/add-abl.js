const recipeDao = require('../../dao/file_storage/recipe-dao');
const ingredientDao = require('../../dao/file_storage/ingredient-dao');
const recipeSchema = require('../../schema/recipe-schema');
const helpers = require('../../helper/common-helper');

async function AddAbl(req, res) {
    try {
        const recipeIn = req.body;

        // input validation
        let { valid, errors } = recipeSchema.validate(recipeIn);
        if (!valid) {
            res.status(400).send({
                errors: helpers.getValidationErrorMessages(errors)
            });
            return;
        }

        const allIngredients = await ingredientDao.getAllIngredients();

        // validate that all ingredients exist
        for (let recipeIngredient of recipeIn.ingredients) {
            let matchedIngredient = allIngredients.find((ingredient) => ingredient._id === recipeIngredient.id);

            // if it was not found
            if (matchedIngredient === undefined) {
                res.status(400).send({
                    errors: [ `ingredient with id ${recipeIngredient.id} does not exist in a database` ]
                });
                return;
            }
        }


        let recipe = await recipeDao.addRecipe(recipeIn);
        res.status(201).send(recipe);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = AddAbl;