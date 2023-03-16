const path = require('path');
const crypto = require('crypto');
const { readFile, writeFile } = require('fs/promises');

const STORAGE_DIR_PATH = process.env.STORAGE_PATH || path.join(__dirname, '../../storage');
const JSON_FILE_PATH = path.resolve(STORAGE_DIR_PATH, 'recipes.json');


async function addRecipe(recipe) {
    recipe._id = crypto.randomBytes(8).toString('hex');
    let recipes = await getAllRecipes();
    recipes.push(recipe);
    await _write(recipes);
    return recipe;
}

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

async function getFilteredRecipes(query) {
    let recipes = await getAllRecipes();
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query.toLowerCase());
    });
}

async function _write(data) {
    let json = JSON.stringify(data, null, 2);
    await writeFile(JSON_FILE_PATH, json);
}


module.exports = {
    addRecipe,
    getAllRecipes,
    getFilteredRecipes
}