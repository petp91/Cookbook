import Card from 'react-bootstrap/Card';
import RecipeModal from '../RecipeModal'

import CardPicture from '../../assets/CardPicture.jpg'
import '../../layout/MenuCard-style.css';

const RecipeCard = ({ recipe, ingredients, reload }) => {
    return (

        <Card className="recipeCard text-center m-4">
            <Card.Img variant="top" src={CardPicture} alt={recipe.name} />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                <Card.Text>
                    {recipe.description}
                </Card.Text>
                <RecipeModal reload={reload} recipe={recipe} ingredients={ingredients}/>
            </Card.Body>
        </Card>

    );
};

export default RecipeCard;
