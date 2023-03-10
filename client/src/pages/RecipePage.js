
import RecipeModal from "../components/RecipeCard";
import AddRecipe from "../components/AddRecipe";



const RecipePage = () => {
    return (
        <div>
            <h1>Recipe Page</h1>
            <p>sem přijde btn a formulář. Zkus to přes useState nastavit aby se po kliknutí zobrazil formulář</p>
            <RecipeModal />
            <AddRecipe/>
        </div>
        
    );
};

export default RecipePage;