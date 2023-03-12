const Ajv = require('ajv');
const ajv = new Ajv();
const recipeDao = require('../../dao/file_storage/recipe-dao');

const schema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        description: { type: 'string' },
        imageId: { type: 'string' },
        preparationLength: { type: 'number' },
        finalAmount: { type: 'number' },
        ingredients: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    amount: { type: 'number' },
                    units: { type: 'string' }
                },
                required: [ 'id', 'amount', 'units' ]
            }
        }
    },
    required: [ 'name', 'description', 'imageId', 'preparationLength', 'finalAmount', 'ingredients' ]
};

async function AddAbl(req, res) {
    try {
        let valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(400).send(ajv.errors);
            return;
        }
        
        // TODO validate that all referenced ingredients actually exist

        let recipe = await recipeDao.addRecipe(req.body);
        res.send(recipe);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

module.exports = AddAbl;