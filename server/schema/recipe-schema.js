const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const schema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
        description: { type: 'string', minLength: 1 },
        imageUrl: { type: 'string' },
        preparationLength: { type: 'number', minimum: 1 },
        finalAmount: { type: 'number', minimum: 1 },
        ingredients: {
            type: 'array',
            minItems: 1,
            items: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    amount: { type: 'number', minimum: 1 },
                    units: {
                        type: 'string',
                        enum: ['ml', 'ks', 'g']
                    }
                },
                required: [ 'id', 'amount', 'units' ]
            }
        }
    },
    required: [ 'name', 'description', 'imageUrl', 'preparationLength', 'finalAmount', 'ingredients' ],
    additionalProperties: false
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