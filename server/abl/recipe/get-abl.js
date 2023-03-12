const recipeDao = require('../../dao/file_storage/recipe-dao');

async function GetAbl(req, res) {
    // TODO implement this
    let id = req.params.id;

    res.status(501).send('Not Implemented');
}

module.exports = GetAbl;