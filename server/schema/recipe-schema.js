const Ajv = require('ajv');
const ajv = new Ajv();

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

module.exports = {
    validate: (recipe) => {
        let valid = ajv.validate(schema, recipe);
        return {
            valid,
            errors: ajv.errors
        }
    }
}