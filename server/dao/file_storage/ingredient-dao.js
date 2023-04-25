const path = require('path');
const crypto = require('crypto');
const { readFile, writeFile } = require('fs/promises');

const STORAGE_DIR_PATH = process.env.STORAGE_PATH || path.join(__dirname, '../../storage');
const JSON_FILE_PATH = path.resolve(STORAGE_DIR_PATH, 'ingredients.json');


async function getAllIngredients() {
    try {
        let file_contents = await readFile(JSON_FILE_PATH, { encoding: 'utf8' });
        return JSON.parse(file_contents);
    } catch (e) {
        if (e.code === 'ENOENT') {
            // if the file doesn't exist, return an empty array
            return [];
        }
        throw e;
    }
}

// async function getFilteredingredients(query) {
//     let ingredients = await getAllingredients();
//     return ingredients.filter(ingredient => {
//         return ingredient.name.toLowerCase().includes(query.toLowerCase());
//     });
// }

async function getIngredient(id) {
    let ingredients = await getAllIngredients();

    // find a ingredient with the matching id
    let ingredient = ingredients.find((ingredient) => id === ingredient._id);
    return ingredient;
}

async function addIngredient(ingredient) {
    // generate a unique id
    ingredient._id = crypto.randomBytes(8).toString('hex');

    let ingredients = await getAllIngredients();
    ingredients.push(ingredient);

    await _write(ingredients);
    return ingredient;
}

async function updateIngredient(id, updatedIngredient) {
    let ingredients = await getAllIngredients();

    // find a ingredient with the matching id
    let ingredient = ingredients.find((ingredient) => id === ingredient._id);

    // if the ingredient was not found
    if (!ingredient) {
        return;
    }

    // update the ingredient
    Object.assign(ingredient, updatedIngredient);

    await _write(ingredients);
    return ingredient;
}

async function deleteIngredient(id) {
    let ingredients = await getAllIngredients();

    // find index of the ingredient to delete
    let index = ingredients.findIndex((ingredient) => id === ingredient._id);

    // if the ingredient was not found
    if (index === -1) {
        return;
    }

    // delete ingredient at the index
    let deletedIngredients = ingredients.splice(index, 1);

    await _write(ingredients);
    return deletedIngredients[0];
}

async function _write(data) {
    let json = JSON.stringify(data, null, 2);
    await writeFile(JSON_FILE_PATH, json);
}


module.exports = {
    getAllIngredients: getAllIngredients,
    // getFilteredingredients,
    getIngredient: getIngredient,
    addIngredient: addIngredient,
    updateIngredient: updateIngredient,
    deleteIngredient: deleteIngredient
}