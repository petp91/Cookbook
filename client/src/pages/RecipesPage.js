import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';

import AdvancedSearch from "../components/AdvancedSearch";
import RecipeCardsGrid from "../components/recipe/RecipeCardsGrid";
import RecipeEditor from "../components/recipe/RecipeEditor";
import { UserContext } from "../providers/UserProvider";
import { DataContext } from "../providers/DataProvider";

const RecipesPage = () => {
    const { canAddRecipe } = useContext(UserContext);
    let { recipes } = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [showSearch, setShowSearch] = useState(false);

    const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);


    if (query) {
        recipes = recipes.filter((recipe) => {
            if (recipe.name.toLowerCase().includes(query.toLowerCase())) {
                return true;
            } else {
                return false;
            }
        });
    }

    return (
        <Container>
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>

            <div className="m-4">

                {/* show Add recipe button if user has permission */}
                { canAddRecipe && 
                    <Button
                        variant="btn btn-success"
                        size="lg"
                        onClick={()=> {
                            setShowAddRecipeModal(true);
                        }}
                    >
                        Add recipe
                    </Button>
                }

                {/* Toggle filters button */}
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
                onHide={() => {
                    setShowAddRecipeModal(false);
                }}
            />

            <RecipeCardsGrid recipes={recipes} />
        </Container>
    );
};

export default RecipesPage;
