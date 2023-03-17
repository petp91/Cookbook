const recipeDao = require('../../dao/file_storage/recipe-dao');
const recipeSchema = require('../../schema/recipe-schema');

async function AddAbl(req, res) {
    try {
        let { valid, errors } = recipeSchema.validate(req.body);
        if (!valid) {
            res.status(400).send(errors);
            return;
        }
        
        // TODO validate that all referenced ingredients actually exist

        let recipe = await recipeDao.addRecipe(req.body);
        res.status(201).send(recipe);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = AddAbl;