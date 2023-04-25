const ingredientDao = require('../../dao/file_storage/ingredient-dao');
const ingredientSchema = require('../../schema/ingredient-schema');
const helpers = require('../../helper/common-helper');

async function UpdateAbl(req, res) {
    try {
        const id = req.params.id;
        let updatedIngredient = req.body;
        // we don't care about _id on the recipe object, we only care about the id in req.params
        // this will prevent a validation error
        delete updatedIngredient._id;

        // input validation
        let { valid, errors } = ingredientSchema.validate(updatedIngredient);
        if (!valid) {
            res.status(400).send({
                errors: helpers.getValidationErrorMessages(errors)
            });
            return;
        }

        // TODO validate that all referenced ingredients actually exist

        let ingredient = await ingredientDao.updateIngredient(id, updatedIngredient);
        if (ingredient) {
            res.send(ingredient);
        } else {
            res.status(404).send({
                errors: [`an ingredient with the id ${id} was not found`]
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