const crypto = require('crypto');

const recipesExport = () => {
    const pizzaRecipes = [
        {
            id: "PIZZARECIPE001",
            displayName: "Cheese Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE001",
                meat: "MEAT001S",
                cheese1: "CHEESE001S",
                cheese2: "CHEESE002S",
            }
        },
        {
            id: "PIZZARECIPE002",
            displayName: "Cheese Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE001",
                meat: "MEAT001M",
                cheese1: "CHEESE001M",
                cheese2: "CHEESE002M",
            }
        },
        {
            id: "PIZZARECIPE003",
            displayName: "Cheese Pizza Large",
            displayImage: "",
            description: "",
            size: "large",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT001L",
                cheese1: "CHEESE001L",
                cheese2: "CHEESE002L",
            }
        },
        {
            id: "PIZZARECIPE004",
            displayName: "Pepperoni Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE001",
                meat: "MEAT001S",
                meat2: "MEAT005S",
                cheese: "CHEESE001S",
            }
        },
        {
            id: "PIZZARECIPE005",
            displayName: "Pepperoni Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE001",
                meat: "MEAT001M",
                meat2: "MEAT005M",
                cheese: "CHEESE001M",
            }
        },
        {
            id: "PIZZARECIPE006",
            displayName: "Pepperoni Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT001L",
                meat2: "MEAT005L",
                cheese: "CHEESE001L",
    
            }
        },
        {
            id: "PIZZARECIPE007",
            displayName: "Pizza Hawaii Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE001",
                meat: "MEAT002S",
                cheese: "CHEESE002S",
                misc: "MISC002S",
            }
        },
        {
            id: "PIZZARECIPE008",
            displayName: "Pizza Hawaii Medium",
            displayImage: "",
            size: "medium", 
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE001",
                meat: "MEAT002M",
                cheese: "CHEESE002M",
                misc: "MISC002M",
            }
        },
        {
            id: "PIZZARECIPE009",
            displayName: "Pizza Hawaii Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT002L",
                cheese: "CHEESE002L",
                misc: "MISC002L",
            }
        },
        {
            id: "PIZZARECIPE010",
            displayName: "Mushroom Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE002",
                cheese: "CHEESE002S",
                misc: "MISC008S",
                misc2: "MISC011S",
            }
        },
        {
            id: "PIZZARECIPE011",
            displayName: "Mushroom Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE002",
                cheese: "CHEESE002M",
                misc: "MISC008M",
                misc2: "MISC011M",
            }
        },
        {
            id: "PIZZARECIPE012",
            displayName: "Mushroom Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE002",
                cheese: "CHEESE002L",
                misc: "MISC008L",
                misc2: "MISC011L",
            }
        },
        {
            id: "PIZZARECIPE013",
            displayName: "Garlic Onion Rings Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE002",
                cheese: "CHEESE001S",
                misc: "MISC009S",
            }
        },
        {
            id: "PIZZARECIPE014",
            displayName: "Garlic Onion Rings Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE002",
                cheese: "CHEESE001M",
                misc: "MISC009M",
            }
        },
        {
            id: "PIZZARECIPE015",
            displayName: "Garlic Onion Rings Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE002",
                cheese: "CHEESE001L",
                misc: "MISC009L",
            }
        },
        {
            id: "PIZZARECIPE016",
            displayName: "Mixed meat pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT003S",
                misc: "MISC003S",
            }
        },
        {
            id: "PIZZARECIPE017",
            displayName: "Mixed meat pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT003S",
                misc: "MISC003S",
            }
        },
        {
            id: "PIZZARECIPE018",
            displayName: "Mixed meat pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                meat: "MEAT003S",
                misc: "MISC003S",
            }
        },
        {
            id: "PIZZARECIPE019",
            displayName: "Margharita Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE001",
                cheese: "CHEESE003S",
                meat: "MEAT003S",
                misc: "MISC005S",
                misc2: "MISC012",
            }
        },
        {
            id: "PIZZARECIPE020",
            displayName: "Margharita Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE001",
                cheese: "CHEESE003M",
                meat: "MEAT003M",
                misc: "MISC005M",
                misc2: "MISC012",
            }
        },
        {
            id: "PIZZARECIPE021",
            displayName: "Margharita Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                cheese: "CHEESE003L",
                meat: "MEAT003L",
                misc: "MISC005L",
                misc2: "MISC012",
            }
        },
        {
            id: "PIZZARECIPE022",
            displayName: "Chicken Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE001",
                cheese: "CHEESE003S",
                meat: "MEAT003S",
            }
        },
        {
            id: "PIZZARECIPE023",
            displayName: "Chicken Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE001",
                cheese: "CHEESE003M",
                meat: "MEAT003M",
            }
        },
        {
            id: "PIZZARECIPE024",
            displayName: "Chicken Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE001",
                cheese: "CHEESE003L",
                meat: "MEAT003L",
            }
        },
        {
            id: "PIZZARECIPE025",
            displayName: "Diabolos Pizza Small",
            displayImage: "",
            size: "small",
            description: "",
            ingredients: {
                dough: "DOUGH001S",
                base: "BASE002",
                meat: "MEAT005S",
                meat2: "MEAT002S",
                misc: "MISC010S",
            }
        },
        {
            id: "PIZZARECIPE026",
            displayName: "Diabolos Pizza Medium",
            displayImage: "",
            size: "medium",
            description: "",
            ingredients: {
                dough: "DOUGH001M",
                base: "BASE002",
                meat: "MEAT005M",
                meat2: "MEAT002M",
                misc: "MISC010M",
            }
        },
        {
            id: "PIZZARECIPE027",
            displayName: "Diabolos Pizza Large",
            displayImage: "",
            size: "large",
            description: "",
            ingredients: {
                dough: "DOUGH001L",
                base: "BASE002",
                meat: "MEAT005L",
                meat2: "MEAT002L",
                misc: "MISC010L",
            }
        },
    ]
  }
  
  module.exports = recipesExport;
