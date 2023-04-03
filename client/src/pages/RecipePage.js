import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';
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
                <Icon path={mdiFilter} size={1} />
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
