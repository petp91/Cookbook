import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiFilter } from '@mdi/js';
import AdvancedSearch from "../components/AdvancedSearch";
import RecipeCardGrid from "../components/recipe/RecipeCardGrid";
import RecipeEditor from "../components/recipe/RecipeEditor";
import axios from "axios";
import RecipeModal from "../components/RecipeModal";

const mockIngredients = [
    {_id: "1", name: "ingredient1"},
    {_id: "2", name: "ingredient2"},
    {_id: "3", name: "ingredient3"},
    {_id: "4", name: "ingredient4"},
    {_id: "5", name: "ingredient5"}
];

const RecipePage = () => {

    const [serverCall, setServerCall] = useState({
        state: "pending",data: {}
    });

    function reload () {

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

    useEffect(()=> {
        reload()

    }, [])


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
                <RecipeEditor show={openAddRecipeModal} ingredients={mockIngredients} reload={reload} onHide={()=> {
                    setOpenModal(false);}}/>
                <RecipeCardGrid reload={reload} ingredients={mockIngredients} serverCall={serverCall}/>
            </div>

        </div>
        
    );
};

export default RecipePage;
