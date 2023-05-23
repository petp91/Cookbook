import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';
import AdvancedSearch from "../components/AdvancedSearch";
import RecipeCardsGrid from "../components/recipe/RecipeCardsGrid";
import RecipeEditor from "../components/recipe/RecipeEditor";

const RecipesPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [showSearch, setShowSearch] = useState(false);

    const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);

    const [serverCall, setServerCall] = useState({
        state: "pending",
        recipes: [],
        ingredients: []
    });


    function reload() {
        setServerCall({
            state: "pending",
            recipes: [],
            ingredients: []
        });

        // send requests
        let promiseRecipes = axios.get('http://localhost:8080/api/recipes');
        let promiseIngredients = axios.get('http://localhost:8080/api/ingredients');

        // wait for both calls to complete
        Promise.all([promiseRecipes, promiseIngredients])
            .then((results) => {
                // get responses
                let recipesResp = results[0];
                let ingredientsResp = results[1];

                // set state to success along with the data
                setServerCall({
                    state: "success",
                    recipes: recipesResp.data,
                    ingredients: ingredientsResp.data
                });
            })
            .catch((error) => {
                setServerCall({
                    state: "error",
                    error: error?.response?.data
                });
            });
    }

    useEffect(() => {
        reload()
    }, [])

    return (
        <Container>
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>

            <div className="m-4">
                <Button
                    variant="btn btn-success"
                    size="lg"
                    onClick={()=> {
                        setShowAddRecipeModal(true);
                    }}
                >
                    Add recipe
                </Button>
                <Button
                    onClick={() => {
                        setShowSearch(!showSearch);
                    }}
                    className='float-end'
                >
                    <Icon path={mdiFilter} size={1} />
                </Button>

                <AdvancedSearch show={showSearch} defaultQuery={query} />
                {query && <h2>Results for "{query}"</h2>}
            </div>

            <RecipeEditor
                show={showAddRecipeModal}
                ingredients={serverCall.ingredients} // FIXME: ingredients are empty in the RecipeEditor on first load
                reload={reload}
                onHide={() => {
                    setShowAddRecipeModal(false);
                }}
            />

            <RecipeCardsGrid serverCall={serverCall} reload={reload} />
        </Container>
    );
};

export default RecipesPage;
