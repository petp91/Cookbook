import React from "react";
import '../layout/MenuCard-style.css';
import Card from 'react-bootstrap/Card';
import CardPicture from '../assets/CardPicture.jpg'
import RecipeCard from './RecipeCard'

const RecipeMenuCard = ({ recipe }) => {
    return (

        <Card className="recipeCard text-center m-4" key={recipe._id}>
            <Card.Img variant="top" src={CardPicture} alt={recipe.name} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    {recipe.description}
                </Card.Text>
                <RecipeCard />
            </Card.Body>
        </Card>

    );
};

export default RecipeMenuCard;
