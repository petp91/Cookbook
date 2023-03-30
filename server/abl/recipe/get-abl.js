const { response } = require('express');
const recipeDao = require('../../dao/file_storage/recipe-dao');

async function GetAbl(req, res) {
    try {
    let id = req.params.id;
    let recipe = await recipeDao.getRecipe(id);
    res.send(recipe);
    }
    
    catch(e){
        console.error(e);
        res.status(500).send(e.message);
    }

    
}

module.exports = GetAbl;