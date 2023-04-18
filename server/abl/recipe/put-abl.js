const recipeDao = require('../../dao/file_storage/recipe-dao');
const recipeSchema = require('../../schema/recipe-schema');

async function PutAbl(req,res) {


    try {
    
        let { valid, errors } = recipeSchema.validate(req.body);
        if (!valid) {
            res.status(400).send(errors);
            return;
        }

        let recipe = await recipeDao.editRecipe(req.params.id, req.body);
        console.log(req.body);
        console.log(recipe);
        res.send(recipe);

    }
 
    catch(e){
     console.error(e);
     res.status(500).send(e.message);
    }
 
 }
 
 
 
 module.exports = PutAbl;