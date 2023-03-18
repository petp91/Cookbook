import React, {useEffect, useState} from "react";
import Card from "../components/MenuCard";
import Buttons from "./Buttons";
import axios from "axios";

const MenuCardsOutput = () => {
    const [item, setItem] = useState([]);

//    const menuItems = [...new Set(pizzaRecipes.map((Val) => Val.size))]; // todo filter
/*
    const filterItem = (create) => {
        const newItem = pizzaRecipes.filter((newVal) => {
            return newVal.size === create;
        });
        setItem(newItem);
    };

 */
    useEffect(()=> {
        axios.get('http://localhost:8080/api/recipes')
            .then((response)=> {
                console.log(response);
                setItem(response.data);
            })
    }, [])
    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>
                <div>

                    <Card item={item} />
                </div>
            </div>
        </>
    );
};



export default MenuCardsOutput;

/*
<Buttons  // todo filter
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
 */