require('dotenv').config(); // načtení .env souboru
const express = require('express');
const mongoose = require('mongoose');

const recipeRouter = require('./controller/recipe-controller');

const app = express();
const PORT = process.env.PORT || 8080;

// Připojení k MongoDB Atlas databázi
/*mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to database');
});*/


// Middleware pro zpracování požadavků ve formátu JSON
app.use(express.json());

app.use('/api/recipes', recipeRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
