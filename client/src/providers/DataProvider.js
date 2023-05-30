import { createContext, useState, useEffect } from "react"
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [serverCall, setServerCall] = useState({
        state: "pending",
        recipes: [],
        ingredients: []
    });

    // function for manually adding an ingredient without reloading
    const addIngredient = (newIngredient) => {
        if (serverCall.state === 'success') {
            setServerCall((prevServerCall) => {
                prevServerCall = {...prevServerCall};
                prevServerCall.ingredients.push(newIngredient);
                return prevServerCall;
            });
        }
    }

    // function for manually removing an ingredient without reloading
    const removeIngredientById = (deleteId) => {
        if (serverCall.state === 'success') {
            setServerCall((prevServerCall) => {
                prevServerCall = {...prevServerCall};
                // remove ingredient that matched deleteId
                prevServerCall.ingredients = prevServerCall.ingredients.filter(ingredient => ingredient._id !== deleteId);
                return prevServerCall;
            });
        }
    }

    // function that reloads all recipes and ingredients from the server
    const reload = () => {
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
    };

    // reload automatically when DataProvider is first mounted
    useEffect(() => {
        reload()
    }, [])
    

    const value = {
        ...serverCall,
        addIngredient,
        removeIngredientById,
        reload
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataProvider,
    DataContext
};