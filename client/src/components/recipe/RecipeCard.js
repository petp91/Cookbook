import Card from 'react-bootstrap/Card';
import RecipeModal from './RecipeModal'

import CardPicture from '../../assets/CardPicture.png'
import '../../layout/MenuCard-style.css';

const RecipeCard = ({ recipe, ingredients, reload }) => {
    return (
        <Card className="recipeCard text-center m-4">
            <Card.Img variant="top" src={recipe.imageUrl || CardPicture } />
            <Card.Body>
                <Card.Title>{recipe.name}</Card.Title>
                
                <Card.Text>
                    {recipe.description}
                </Card.Text>

                <RecipeModal
                    recipe={recipe}
                    ingredients={ingredients}
                    reload={reload}
                />
            </Card.Body>
        </Card>
    );
};

export default RecipeCard;
