const ingredientDao = require('../../dao/file_storage/ingredient-dao');

async function DeleteAbl(req, res) {
    try {
        const id = req.params.id;
        
        let deletedIngredient = await ingredientDao.deleteIngredient(id);
        if (deletedIngredient) {
            res.send(deletedIngredient);
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

module.exports = DeleteAbl;