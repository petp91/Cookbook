import RecipeModal from "../components/RecipeModal";
import AddRecipe from "../components/AddRecipe";

const RecipePage = () => {
    return (
        <div>
            <h1>Recipe Page</h1>
            <AddRecipe />
            <RecipeModal />
            <AddRecipe/>
        </div>
        
    );
};

export default RecipePage;