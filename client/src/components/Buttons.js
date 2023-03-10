import React from "react";
import Data from "../assets/Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
    return (
        <>
            <div className>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className="btn btn-outline-success "
                            onClick={() => filterItem(Val)}
                            key={id}
                        >
                            {Val}
                        </button>
                    );
                })}
                <button
                    className="btn btn-success"
                    onClick={() => setItem(Data)}
                >
                    Clear filter
                </button>

            </div>
        </>
    );
};

export default Buttons;