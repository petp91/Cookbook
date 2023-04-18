import React from "react";
import '../layout/MenuCard-style.css';
import Card from 'react-bootstrap/Card';
import CardPicture from '../assets/CardPicture.jpg'
import RecipeModal from './RecipeModal'

const mockIngredients = [
    {_id: "1", name: "ingredient1"},
    {_id: "2", name: "ingredient2"},
    {_id: "3", name: "ingredient3"},
    {_id: "4", name: "ingredient4"},
    {_id: "5", name: "ingredient5"}
];

const RecipeMenuCard = ({ recipe, ingredients }) => {
    return (

        <Card className="recipeCard text-center m-4">
            <Card.Img variant="top" src={CardPicture} alt={recipe.name} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    {recipe.description}
                </Card.Text>
                <RecipeModal recipe={recipe} ingredients={mockIngredients}/> {/* Tady si to pak přepište zpět na ingredients a smažte const mockIngredients */}
            </Card.Body>
        </Card>

    );
};

export default RecipeMenuCard;
