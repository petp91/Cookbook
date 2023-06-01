const recipeDao = require('../../dao/file_storage/recipe-dao');
const recipeSchema = require('../../schema/recipe-schema');
const helpers = require('../../helper/common-helper');

async function AddAbl(req, res) {
    try {
        // input validation
        let { valid, errors } = recipeSchema.validate(req.body);
        if (!valid) {
            res.status(400).send({
                errors: helpers.getValidationErrorMessages(errors)
            });
            return;
        }
        
        // TODO validate that all referenced ingredients actually exist
        // don't forget to document it in Application Model book

        let recipe = await recipeDao.addRecipe(req.body);
        res.status(201).send(recipe);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = AddAbl;