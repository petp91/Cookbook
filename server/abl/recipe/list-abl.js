const recipeDao = require('../../dao/file_storage/recipe-dao');

async function ListAbl(req, res) {
    try {
        let query = req.query.q;
        if (typeof query == 'string') {
            let filteredRecipes = await recipeDao.getFilteredRecipes(query);
            res.send(filteredRecipes);
        } else {
            let recipes = await recipeDao.getAllRecipes();
            res.send(recipes);
        }
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = ListAbl;