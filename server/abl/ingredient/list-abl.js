const ingredientDao = require('../../dao/file_storage/ingredient-dao');

async function ListAbl(req, res) {
    try {
        // let query = req.query.q;
        // if (typeof query === 'string') {
        //     let filteredRecipes = await recipeDao.getFilteredRecipes(query);
        //     res.send(filteredRecipes);
        // } else {
            let ingredients = await ingredientDao.getAllIngredients();
            res.send(ingredients);
        // }
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = ListAbl;