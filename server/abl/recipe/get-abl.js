const recipeDao = require('../../dao/file_storage/recipe-dao');

async function GetAbl(req, res) {
    let id = req.params.id;
    
    // TODO implement this
    res.status(501).send('Not Implemented');
}

module.exports = GetAbl;