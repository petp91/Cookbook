import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
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
                onHide={() => {
                    setShowAddRecipeModal(false);
                }}
            />

            <RecipeCardsGrid />
        </Container>
    );
};

export default RecipesPage;
