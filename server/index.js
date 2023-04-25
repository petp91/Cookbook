require('dotenv').config(); // načtení .env souboru
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');

const recipeRouter = require('./controller/recipe-controller');
const imageRouter = require('./controller/image-controller');
const ingredientsRouter = require('./controller/ingredient-controller');

const app = express();
const PORT = process.env.PORT || 8080;

// Připojení k MongoDB Atlas databázi
/*mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});*/


// Middleware for simulating delay
app.use((req, res, next) => {
    setTimeout(next, 1000);
});

app.use(cors());
app.use(express.json()); // Middleware pro zpracování požadavků ve formátu JSON

app.use('/api/recipes', recipeRouter);
app.use('/api/images', imageRouter);
app.use('/api/ingredients', ingredientsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
