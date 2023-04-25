const ingredientDao = require('../../dao/file_storage/ingredient-dao');
const ingredientSchema = require('../../schema/ingredient-schema');
const helpers = require('../../helper/common-helper');

async function AddAbl(req, res) {
    try {
        // input validation
        let { valid, errors } = ingredientSchema.validate(req.body);
        if (!valid) {
            res.status(400).send({
                errors: helpers.getValidationErrorMessages(errors)
            });
            return;
        }
        
        // TODO validate that all referenced ingredients actually exist

        let ingredient = await ingredientDao.addIngredient(req.body);
        res.status(201).send(ingredient);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = AddAbl;