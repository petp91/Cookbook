const recipeDao = require('../../dao/file_storage/recipe-dao');

async function DeleteAbl(req,resp) {
   try {
    const id = req.params.id;
    await recipeDao.deleteRecipes(id);
    resp.end();
   }

   catch(e){
    console.error(e);
    res.status(500).send(e.message);
   }

}



module.exports = DeleteAbl;