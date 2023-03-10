import RecipeModal from "../components/RecipeModal";
import AddRecipe from "../components/AddRecipe";
import MenuCardsOutput from "../components/MenuCardsFilter";
import background from '../assets/background.jpg'


const RecipePage = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${background})`}}>
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>
            <p>sem přijde btn a formulář.</p>
            <RecipeModal />
            <AddRecipe/>
            <MenuCardsOutput/>
            </div>
        </div>
        
    );
};

export default RecipePage;