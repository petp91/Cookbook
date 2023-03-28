import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import AdvancedSearch from "../components/AdvancedSearch";
import MenuCardsOutput from "../components/MenuCardsGrid";
import RecipeEditor from "../components/RecipeEditor";
import AddRecipe from "../components/AddRecipe";


    const ingredients = [
        {
            _id: "1",
            name: "Ingredience 1"
        },
        {
            _id: "2",
            name: "Test ingredience"
        }
    ];

const RecipePage = () => {

    const [openAddRecipeModal, setOpenModal] = useState(false);

    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        if (query) {
            // TODO: request search results
        } else {
            // TODO: request all recipes
        }
    }, [query]);

    return (
        <div>
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>

            <Button onClick={() => {setShowSearch(!showSearch)}} className='pt-1 float-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </Button>
            <AdvancedSearch show={showSearch} defaultQuery={query} />
            {query && <h2>Results for "{query}"</h2>}
            <AddRecipe/>
            <div>
                <Button
                    variant="btn btn-success"
                    size="lg"
                    className="openModalButton"
                    onClick={()=> {
                        setOpenModal(true);
                    }}
                >Add recipe
                </Button>
                <RecipeEditor show={openAddRecipeModal} ingredients={ingredients} onHide={()=> {
                    setOpenModal(false);}}/>
                <MenuCardsOutput />
            </div>

        </div>
        
    );
};

export default RecipePage;
