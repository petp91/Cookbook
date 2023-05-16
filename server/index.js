const express = require('express');
const cors = require('cors');

const recipeRouter = require('./controller/recipe-controller');
const ingredientsRouter = require('./controller/ingredient-controller');


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware for simulating delay
app.use((req, res, next) => {
    setTimeout(next, 1000);
});

app.use(cors());
app.use(express.json()); // Middleware pro zpracování požadavků ve formátu JSON



app.use('/api/recipes', recipeRouter);
app.use('/api/ingredients', ingredientsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
