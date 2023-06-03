const recipeDao = require('../../dao/file_storage/recipe-dao');

async function GetAbl(req, res) {
    try {
        let id = req.params.id;

        let recipe = await recipeDao.getRecipe(id);
        
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

module.exports = GetAbl;