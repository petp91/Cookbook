module.exports = {
    getValidationErrorMessages: (errors) => {
        return errors.map((error) => {
            switch (error.keyword) {
                case 'additionalProperties':
                    return `${error.message} (${error.params.additionalProperty})`;
                default:
                    return `${error.instancePath.substring(1)} ${error.message}`;
            }
        });
    }
}