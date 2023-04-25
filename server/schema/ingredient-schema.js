const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const schema = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 1 },
    },
    required: [ 'name' ],
    additionalProperties: false
};

module.exports = {
    validate: (ingredient) => {
        let valid = ajv.validate(schema, ingredient);
        return {
            valid,
            errors: ajv.errors
        }
    }
}