// todo
//const crypto = require('crypto');

//const recipesExport = () => {
    const pizzaRecipes = [
        {
            id: "1",
            displayName: "Poha",
            size: "Breakfast",
            price: "45 min",
            displayImage: "https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
            description: " Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples",
        },
        {
            id: "2",
            displayName: "Upma",
            size: "Breakfast",
            price: "30 min",
            displayImage: "https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
            description: " A quintessential South Indian Breakfast! Made with protein-packed urad dal and semolina followed by crunchy veggies and curd, this recipe makes for a hearty morning meal. With some grated coconut on top, it gives a beautiful south-Indian flavour.",
        },
        {
            id: "3",
            displayName: "Cheela",
            size: "Breakfast",
            price: "20 min",
            displayImage: "https://c.ndtvimg.com/2019-05/1afu8vt8_weight-loss-friendly-breakfast-paneer-besan-chilla_625x300_25_May_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
            description: "A staple across Indian households, moong dal is widely used in a number of Indian delicacies. One such delicacy is moong dal cheela. You can also add paneer to this recipe to amp up the nutritional value and make it, even more, protein-dense",
        },
        {
            id: "4",
            displayName: "Channa Kulcha",
            size: "Lunch",
            price: "10 min",
            displayImage: "https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg",
            description: "A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder and some mango powder, which is what gives the chana it's sour and tangy taste.",
        },
        {
            id: "5",
            displayName: "Egg Curry",
            size: "Lunch",
            price: "75 min",
            displayImage: "https://i.ndtvimg.com/i/2017-11/goan-egg-curry_620x350_41511515276.jpg",
            description: "Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander.",
        },
        {
            id: "6",
            displayName: "Paneer Aachari",
            size: "Lunch",
            price: "80 min",
            displayImage: "https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg",
            description: "Don't get intimidated by the list of ingredients because not only are already in your kitchen cabinet, but also because all they'll need is 20 minutes of your time. Chunks of cottage cheese cooked in some exciting spices, yogurt and a pinch of sugar.",
        },
        {
            id: "7",
            displayName: "Fish Fry",
            size: "Dinner",
            price: "12 min",
            displayImage: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg",
            description: "Get your daily dose of perfect protein. Pieces of surmai fish marinated in garlic, cumin, fennel, curry leaves and tomatoes are pan-fried in refined oil and served hot. This fish fry recipe has a host of delectable spices used for marination giving it a unique touch.",
        },
        {
            id: "8",
            displayName: "Dum Alloo",
            size: "Dinner",
            price: "8 min",
            displayImage: "https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_51434362664.jpg",
            description: "Your family will thank you for this absolutely fantastic bowl of dum aloo cooked Lakhnawi style. Take some potatoes, crumbled paneer, kasuri methi, butter, onions and some ghee.",
        },
        {
            id: "9",
            displayName: "Malai Kofta",
            size: "Dinner",
            price: "45 min",
            displayImage: "https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg",
            description: "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.",
        },
        {
            id: "10",
            displayName: "Malai Kofta",
            size: "Dinner",
            price: "25 min",
            displayImage: "https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg",
            description: "A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.",
        },
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
    ];
//}

//module.exports = recipesExport;

export default pizzaRecipes