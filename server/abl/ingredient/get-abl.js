const ingredientDao = require('../../dao/file_storage/ingredient-dao');

async function GetAbl(req, res) {
    try {
        let id = req.params.id;

        let ingredient = await ingredientDao.getIngredient(id);
        
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

module.exports = GetAbl;