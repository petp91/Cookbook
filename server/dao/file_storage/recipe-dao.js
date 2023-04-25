const path = require('path');
const crypto = require('crypto');
const { readFile, writeFile } = require('fs/promises');

const STORAGE_DIR_PATH = process.env.STORAGE_PATH || path.join(__dirname, '../../storage');
const JSON_FILE_PATH = path.resolve(STORAGE_DIR_PATH, 'recipes.json');


async function getAllRecipes() {
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

// async function getFilteredRecipes(query) {
//     let recipes = await getAllRecipes();
//     return recipes.filter(recipe => {
//         return recipe.name.toLowerCase().includes(query.toLowerCase());
//     });
// }

async function getRecipe(id) {
    let recipes = await getAllRecipes();

    // find a recipe with the matching id
    let recipe = recipes.find((recipe) => id === recipe._id);
    return recipe;
}

async function addRecipe(recipe) {
    // generate a unique id
    recipe._id = crypto.randomBytes(8).toString('hex');

    let recipes = await getAllRecipes();
    recipes.push(recipe);

    await _write(recipes);
    return recipe;
}

async function updateRecipe(id, updatedRecipe) {
    let recipes = await getAllRecipes();

    // find a recipe with the matching id
    let recipe = recipes.find((recipe) => id === recipe._id);

    // if the recipe was not found
    if (!recipe) {
        return;
    }

    // update the recipe
    Object.assign(recipe, updatedRecipe);

    await _write(recipes);
    return recipe;
}

async function deleteRecipes(id) {
    let recipes = await getAllRecipes();

    // find index of the recipe to delete
    let index = recipes.findIndex((recipe) => id === recipe._id);

    // if the recipe was not found
    if (index === -1) {
        return;
    }

    // delete recipe at the index
    let deletedRecipes = recipes.splice(index, 1);

    await _write(recipes);
    return deletedRecipes[0];
}

async function _write(data) {
    let json = JSON.stringify(data, null, 2);
    await writeFile(JSON_FILE_PATH, json);
}


module.exports = {
    getAllRecipes,
    // getFilteredRecipes,
    getRecipe,
    addRecipe,
    updateRecipe,
    deleteRecipes
}