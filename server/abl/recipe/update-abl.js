const recipeDao = require('../../dao/file_storage/recipe-dao');
const recipeSchema = require('../../schema/recipe-schema');
const helpers = require('../../helper/common-helper');

async function UpdateAbl(req, res) {
    try {
        const id = req.params.id;
        let updatedRecipe = req.body;
        // we don't care about _id on the recipe object, we only care about the id in req.params
        // this will prevent a validation error
        delete updatedRecipe._id;

        // input validation
        let { valid, errors } = recipeSchema.validate(updatedRecipe);
        if (!valid) {
            res.status(400).send({
                errors: helpers.getValidationErrorMessages(errors)
            });
            return;
        }

        // TODO validate that all referenced ingredients actually exist

        let recipe = await recipeDao.updateRecipe(id, updatedRecipe);
        if (recipe) {
            res.send(recipe);
        } else {
            res.status(404).send({
                errors: [`a recipe with the id ${id} was not found`]
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = UpdateAbl;