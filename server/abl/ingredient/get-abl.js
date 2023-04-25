const ingredientDao = require('../../dao/file_storage/ingredient-dao');

async function GetAbl(req, res) {
    try {
        let id = req.params.id;
        let ingredient = await ingredientDao.getIngredient(id);
        res.send(ingredient);
    } catch (e) {
        console.error(e);
        res.status(500).send({
            errors: [ e.message ]
        });
    }
}

module.exports = GetAbl;