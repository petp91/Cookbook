import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';
import AdvancedSearch from "../components/AdvancedSearch";
import RecipeCardsGrid from "../components/recipe/RecipeCardsGrid";
import RecipeEditor from "../components/recipe/RecipeEditor";

const mockIngredients = [
    {_id: "1", name: "ingredient1"},
    {_id: "2", name: "ingredient2"},
    {_id: "3", name: "ingredient3"},
    {_id: "4", name: "ingredient4"},
    {_id: "5", name: "ingredient5"}
];

const RecipesPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [showSearch, setShowSearch] = useState(false);

    const [openAddRecipeModal, setOpenModal] = useState(false);

    const [serverCall, setServerCall] = useState({
        state: "pending",data: {}
    });


    function reload() {
        setServerCall({ state: "pending", data: {}})

        axios.get('http://localhost:8080/api/recipes')
            .then((response)=> {
                console.log(response);
                setServerCall({ state: "success", data: response.data});
            })
            .catch(function (error) {
                setServerCall({ state: "error", data: error?.response?.data});
                console.log(error?.response?.data)
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
                        setOpenModal(true);
                    }}
                >
                    Add recipe
                </Button>
                <Button onClick={() => { setShowSearch(!showSearch); }} className='float-end'>
                    <Icon path={mdiFilter} size={1} />
                </Button>

                <AdvancedSearch show={showSearch} defaultQuery={query} />
                {query && <h2>Results for "{query}"</h2>}
            </div>

            <RecipeEditor
                show={openAddRecipeModal}
                ingredients={mockIngredients}
                reload={reload}
                onHide={()=> {
                    setOpenModal(false);
                }}
            />

            <RecipeCardsGrid ingredients={mockIngredients} serverCall={serverCall} reload={reload} />
        </Container>
    );
};

export default RecipesPage;
