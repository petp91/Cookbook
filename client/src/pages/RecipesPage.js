import { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiFilter} from '@mdi/js';

import AdvancedSearch from "../components/AdvancedSearch";
import RecipeCardsGrid from "../components/recipe/RecipeCardsGrid";
import RecipeEditor from "../components/recipe/RecipeEditor";
import { UserContext } from "../providers/UserProvider";
import { DataContext } from "../providers/DataProvider";

import '../layout/RecipePage.css';

const RecipesPage = () => {
    const { canAddRecipe } = useContext(UserContext);
    let { state, recipes } = useContext(DataContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const minPrepLength = searchParams.get('minPrepLength');
    const maxPrepLength = searchParams.get('maxPrepLength');
    const sort = searchParams.get('sort')
    const [showSearch, setShowSearch] = useState(false);

    const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);

    // filter only when recipes are loaded
    if (state === 'success') {
        if (query) {
            recipes = recipes.filter((recipe) => {
                return recipe.name.toLowerCase().includes(query.toLowerCase());
            });
        }
    
        if (maxPrepLength || minPrepLength) {
            recipes = recipes.filter((recipe) => {
                return (recipe.preparationLength >= (minPrepLength || 0) && recipe.preparationLength <= (maxPrepLength || Infinity));
            });
        }
    
        function sortByNameAsc (a, b) {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
          
            return nameA.localeCompare(nameB, "cs", { sensitivity: "base" });
        }
    
        if (sort === 'nameAsc') {
            recipes.sort(sortByNameAsc);
        }
        if (sort === 'nameDesc') {
            recipes.sort(sortByNameAsc).reverse()
        }
    
        function sortByPrepLengthAsc(a, b) {
            return a.preparationLength - b.preparationLength;
          }
        
        if (sort === 'prepLengthAsc') {
            recipes.sort(sortByPrepLengthAsc);
          }
        if (sort === 'prepLengthDesc') {
            recipes.sort(sortByPrepLengthAsc).reverse();
          }
    }

    return (
        <Container className="pb-4">
            <h1 className='container-fluid d-flex justify-content-center'>Recipe Page</h1>
            <div className="container-top-btn">
                <div className="m-4">

                    {/* show Add recipe button if user has permission */}
                    {canAddRecipe &&
                        <Button
                            variant="btn btn-success"
                            size="lg"
                            onClick={() => {
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
                    <div className="clearfix"></div>

                    <AdvancedSearch show={showSearch} />
                    {query && <h2>Results for "{query}"</h2>}
                </div>
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
