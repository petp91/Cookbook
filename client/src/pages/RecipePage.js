import RecipeModal from "../components/RecipeCard";
import AddRecipe from "../components/AddRecipe";
import MenuCardsOutput from "../components/MenuCardsFilter";


const RecipePage = () => {
    return (
        <div>
            <div>
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>
            <RecipeModal/>
            <AddRecipe/>
            <MenuCardsOutput/>
            </div>
        </div>
        
    );
};

export default RecipePage;