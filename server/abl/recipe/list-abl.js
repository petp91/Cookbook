const recipeDao = require('../../dao/file_storage/recipe-dao');

async function ListAbl(req, res) {
    try {
        let recipes = await recipeDao.getAllRecipes();
        res.send(recipes);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = ListAbl;