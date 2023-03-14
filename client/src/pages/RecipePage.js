import RecipeModal from "../components/RecipeModal";
import AddRecipe from "../components/AddRecipe";
import MenuCardsOutput from "../components/MenuCardsFilter";


const RecipePage = () => {
    return (
        <div style={{background: '#D3D3D3'}}>
            <div>
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