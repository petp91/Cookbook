require('dotenv').config(); // načtení .env souboru
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 8080;

const Recipe = require('./Recipes').Recipe;
const pizzaRecipes = require('./Recipes').pizzaRecipes;

// Připojení k MongoDB Atlas databázi
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database...');
//jednorázové nahrání receptů do DB
  /*  Recipe.insertMany(pizzaRecipes)
        .then(() => console.log('Pizza recipes were successfully added to the database.'))
        .catch((err) => console.error(err)); */
});

// Middleware pro zpracování požadavků ve formátu JSON
app.use(express.json());

// API pro získání seznamu všech receptů
app.get('/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// API pro vytvoření nového receptu
app.post('/recipes', async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.json(recipe);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
