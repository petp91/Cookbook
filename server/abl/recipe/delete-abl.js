const recipeDao = require('../../dao/file_storage/recipe-dao');

async function DeleteAbl(req, res) {
    try {
        const id = req.params.id;
        
        let deletedRecipe = await recipeDao.deleteRecipe(id);
        if (deletedRecipe) {
            res.send(deletedRecipe);
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

module.exports = DeleteAbl;