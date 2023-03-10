import React, { useState } from "react";
import pizzaRecipes from "../assets/Data";
import Card from "../components/MenuCard";
import Buttons from "./Buttons";

const MenuCardsOutput = () => {
    const [item, setItem] = useState(pizzaRecipes);

    const menuItems = [...new Set(pizzaRecipes.map((Val) => Val.size))];

    const filterItem = (create) => {
        const newItem = pizzaRecipes.filter((newVal) => {
            return newVal.size === create;
        });
        setItem(newItem);
    };
    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>
                <div className>
                    <Buttons
                        filterItem={filterItem}
                        setItem={setItem}
                        menuItems={menuItems}
                    />
                    <Card item={item} />
                </div>
            </div>
        </>
    );
};

export default MenuCardsOutput;