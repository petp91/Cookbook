

const ingredientsExport = () => {
    const pizzaDough = [
        {
            id: "DOUGH001S",
            displayName: "Pizza Tonda Small 30cm",
            type: "dough",
            amount: "1",
            unit: "slice(s)",
            diameter: "30",
            description: "Small round Pizza (30cm diameter) suitable for up to 4 people"
        },
        {
            id: "DOUGH001M",
            displayName: "Pizza Tonda Medium 50cm",
            type: "dough",
            amount: "1",
            unit: "slice(s)",
            diameter: "50",
            description: "Medium sized round Pizza (50cm diameter) suitable for up to 6 people"
        },
        {
            id: "DOUGH001L",
            displayName: "Pizza Tonda Large 75cm",
            type: "dough",
            amount: "1",
            unit: "slice(s)",
            diameter: "75",
            description: "Large round Pizza (75cm diameter) suitable for up to 8 people"
        },
    ]
    
    const pizzaBase = [
        {
            id: "BASE001",
            displayName: "Ketchup base",
            type: "base",
            description: "High quality tomato sauce base",
        },
        {
            id: "BASE002",
            displayName: "Garlic base",
            type: "base",
            description: "Minced garlic base",
        },
        {
            id: "BASE003",
            displayName: "Pesto base",
            type: "base",
            description: "Pesto base",
        }
    ];
    
    const pizzaMeat = [
        {
            id: "MEAT001S",
            displayName: "Klobasa 95% masa",
            type: "meat",
            amount: "15",
            unit: "slice(s)",
            description: "Thinly sliced sausage, slightly hot",
        },
        {
            id: "MEAT001M",
            displayName: "Klobasa 95% masa",
            type: "meat",
            amount: "20",
            unit: "slice(s)",
            description: "Thinly sliced sausage, slightly hot",
        },
        {
            id: "MEAT001L",
            displayName: "Klobasa 95% masa",
            type: "meat",
            amount: "30",
            unit: "slice(s)",
            description: "Thinly sliced sausage, slightly hot",
        },
        {
            id: "MEAT002S",
            displayName: "Šunka dušená 90% masa",
            type: "meat",
            amount: "10",
            unit: "slice(s)",
            description: "Thinly sliced smoked ham",
        },
        {
            id: "MEAT002M",
            displayName: "Šunka dušená 90% masa",
            type: "meat",
            amount: "15",
            unit: "slice(s)",
            description: "Thinly sliced smoked ham",
        },
        {
            id: "MEAT002L",
            displayName: "Šunka dušená 90% masa",
            type: "meat",
            amount: "20",
            unit: "slice(s)",
            description: "Thinly sliced smoked ham",
        },
        {
            id: "MEAT003S",
            displayName: "Chicken Breast",
            type: "meat",
            amount: "20",
            unit: "bit(s)",
            description: "Chicken breast cut into bits and marinated in our special sauce",
        },
        {
            id: "MEAT003M",
            displayName: "Chicken Breast",
            type: "meat",
            amount: "30",
            unit: "bit(s)",
            description: "Chicken breast cut into bits and marinated in our special sauce",
        },
        {
            id: "MEAT003L",
            displayName: "Chicken Breast",
            type: "meat",
            amount: "40",
            unit: "bit(s)",
            description: "Chicken breast cut into bits and marinated in our special sauce",
        },
        {
            id: "MEAT004S",
            displayName: "Bacon",
            type: "meat",
            amount: "12",
            unit: "slice(s)",
            description: "Thinly sliced crispy bacon",
        },
        {
            id: "MEAT004M",
            displayName: "Bacon",
            type: "meat",
            amount: "18",
            unit: "slice(s)",
            description: "Thinly sliced crispy bacon",
        },
        {
            id: "MEAT004L",
            displayName: "Bacon",
            type: "meat",
            amount: "24",
            unit: "slices(s)",
            description: "Thinly sliced crispy bacon",
        },
        {
            id: "MEAT005S",
            displayName: "Pepperoni",
            type: "meat",
            amount: "12",
            unit: "slice(s)",
            description: "Hot pepperoni slices",
        },
        {
            id: "MEAT005M",
            displayName: "Pepperoni",
            type: "meat",
            amount: "14",
            unit: "slice(s)",
            description: "Hot pepperoni slices",
        },
        {
            id: "MEAT005L",
            displayName: "Pepperoni",
            type: "meat",
            amount: "18",
            unit: "slice(s)",
            description: "Hot pepperoni slices",
        },
    ];
    
    const pizzaCheese = [
        {
            id: "CHEESE001S",
            displayName: "Gouda 80%",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: "Cheese Gouda shredded"
    
        },
        {
            id: "CHEESE001M",
            displayName: "Gouda 80%",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: "Cheese Gouda shredded"
        },
        {
            id: "CHEESE001L",
            displayName: "Gouda 80%",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: "Cheese Gouda shredded"
        },
        {
            id: "CHEESE002S",
            displayName: "Eidam 70%",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: "Cheese Eidam shredded"
        },
        {
            id: "CHEESE002M",
            displayName: "Eidam 70%",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: "Cheese Eidam shredded"
        },
        {
            id: "CHEESE002L",
            displayName: "Eidam 70%",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: "Cheese Eidam shredded"
        },
        {
            id: "CHEESE003S",
            displayName: "Mozzarella sliced",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: "Big mozzarela slices"
        },
        {
            id: "CHEESE003M",
            displayName: "Mozzarella sliced",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: "Big mozzarela slices"
        },
        {
            id: "CHEESE003L",
            displayName: "Mozzarella sliced",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: "Big mozzarela slices"
        },
        {
            id: "CHEESE004S",
            displayName: "Cheddar",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: "Thinly shredded Cheddar"
        },
        {
            id: "CHEESE004M",
            displayName: "Cheddar",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: "Thinly shredded Cheddar"
        },
        {
            id: "CHEESE004L",
            displayName: "Cheddar",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: "Thinly shredded Cheddar"
        },
        {
            id: "CHEESE005S",
            displayName: "Parmesan",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE005M",
            displayName: "Parmesan",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE005L",
            displayName: "Parmesan",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE006S",
            displayName: "Gorgonzola",
            type: "cheese",
            amount: "75",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE006M",
            displayName: "Gorgonzola",
            type: "cheese",
            amount: "125",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE006L",
            displayName: "Gorgonzola",
            type: "cheese",
            amount: "175",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE007S",
            displayName: "Niva",
            type: "cheese",
            amount: "100",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE007M",
            displayName: "Niva",
            type: "cheese",
            amount: "150",
            unit: "gram(s)",
            description: ""
        },
        {
            id: "CHEESE007L",
            displayName: "Niva",
            type: "cheese",
            amount: "200",
            unit: "gram(s)",
            description: ""
        },
        
    ];
    
    const miscIngredients = [
        {
            id: "MISC002S",
            displayName: "Pineapple",
            type: "misc-fruit/vegetable",
            amount: "150",
            unit: "grams(s)",
            description: "Sweet fresh Pineapple"
        },
        {
            id: "MISC002M",
            displayName: "Pineapple",
            type: "misc-fruit/vegetable",
            amount: "200",
            unit: "grams(s)",
            description: "Sweet fresh Pineapple"
        },
        {
            id: "MISC002L",
            displayName: "Pineapple",
            type: "misc-fruit/vegetable",
            amount: "250",
            unit: "grams(s)",
            description: "Sweet fresh Pineapple"
        },
        {
            id: "MISC003S",
            displayName: "Shrimp",
            type: "misc-seafood",
            amount: "10",
            unit: "shrimp(s)",
            description: "",
        },
        {
            id: "MISC003M",
            displayName: "Shrimp",
            type: "misc-seafood",
            amount: "15",
            unit: "shrimp(s)",
            description: "",
        },
        {
            id: "MISC003L",
            displayName: "Shrimp",
            type: "misc-seafood",
            amount: "20",
            unit: "shrimp(s)",
            description: "",
        },
        {
            id: "MISC004",
            displayName: "Olive Oil",
            type: "misc-spices",
            amount: "20",
            unit: "shrimp(s)",
            description: "",
        },
        {
            id: "MISC005S",
            displayName: "Tomato Slices",
            type: "misc-fruit/vegetable",
            amount: "10",
            unit: "slices(s)",
            description: "Thinly sliced fresh tomatoes"
        },
        {
            id: "MISC005M",
            displayName: "Tomato Slices",
            type: "misc-fruit/vegetable",
            amount: "15",
            unit: "slices(s)",
            description: "Thinly sliced fresh tomatoes"
        },
        {
            id: "MISC005L",
            displayName: "Tomato Slices",
            type: "misc-fruit/vegetable",
            amount: "20",
            unit: "slices(s)",
            description: "Thinly sliced fresh tomatoes"
        },
        {
            id: "MISC006S",
            displayName: "Sweet Pea pods",
            type: "misc-fruit/vegetable",
            amount: "15",
            unit: "piece(s)",
            description: "",
        },
        {
            id: "MISC006M",
            displayName: "Sweet Pea pods",
            type: "misc-fruit/vegetable",
            amount: "20",
            unit: "piece(s)",
            description: "",
        },
        {
            id: "MISC006L",
            displayName: "Sweet Pea pods",
            type: "misc-fruit/vegetable",
            amount: "25",
            unit: "piece(s)",
            description: "",
        },
        {
            id: "MISC007S",
            displayName: "Corn",
            type: "misc-fruit/vegetable",
            amount: "200",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC007M",
            displayName: "Corn",
            type: "misc-fruit/vegetable",
            amount: "200",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC007L",
            displayName: "Corn",
            type: "misc-fruit/vegetable",
            amount: "200",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC008S",
            displayName: "champignon",
            type: "misc-mushrooms",
            amount: "200",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC008M",
            displayName: "champignon",
            type: "misc-mushrooms",
            amount: "250",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC008L",
            displayName: "champignon",
            type: "misc-mushrooms",
            amount: 300,
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC009S",
            displayName: "Onion rings",
            type: "misc-fruit/vegetable",
            amount: "15",
            unit: "slice(s)",
            description: "",
        },
        {
            id: "MISC009M",
            displayName: "Onion rings",
            type: "misc-fruit/vegetable",
            amount: "25",
            unit: "slice(s)",
            description: "",
        },
        {
            id: "MISC009L",
            displayName: "Onion rings",
            type: "misc-fruit/vegetable",
            amount: "35",
            unit: "slice(s)",
            description: "",
        }, 
        {
            id: "MISC010S",
            displayName: "Black Olives",
            type: "misc-fruit/vegetable",
            amount: "15",
            unit: "olive(s)",
            description: "",
        },
        {
            id: "MISC010M",
            displayName: "Black Olives",
            type: "misc-fruit/vegetable",
            amount: "20",
            unit: "olive(s)",
            description: "",
        },
        {
            id: "MISC010L",
            displayName: "Black Olives",
            type: "misc-fruit/vegetable",
            amount: "25",
            unit: "olive(s)",
            description: "",
        }, 
        {
            id: "MISC011S",
            displayName: "Shiitake Mushrooms",
            type: "misc-mushrooms",
            amount: "150",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC011M",
            displayName: "Shiitake Mushrooms",
            type: "misc-mushrooms",
            amount: "150",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC011L",
            displayName: "Shiitake Mushrooms",
            type: "misc-mushrooms",
            amount: "150",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC012",
            displayName: "Basil",
            type: "misc-spices",
            amount: "50",
            unit: "gram(s)",
            description: "",
        },
        {
            id: "MISC013S",
            displayName: "Bell Pepper",
            type: "misc-fruit/vegetable",
            amount: "10",
            unit: "slice(s)",
            description: "",
        },
        {
            id: "MISC013M",
            displayName: "Bell Pepper",
            type: "misc-fruit/vegetable",
            amount: "15",
            unit: "slice(s)",
            description: "",
        },
        {
            id: "MISC013L",
            displayName: "Bell Pepper",
            type: "misc-fruit/vegetable",
            amount: "20",
            unit: "slice(s)",
            description: "",
        },
        {
            id: "MISC014S",
            displayName: "Broccoli",
            type: "misc-fruit/vegetable",
            amount: "10",
            unit: "bits(s)",
            description: "",
        },
        {
            id: "MISC014M",
            displayName: "Broccoli",
            type: "misc-fruit/vegetable",
            amount: "12",
            unit: "bits(s)",
            description: "",
        },
        {
            id: "MISC014L",
            displayName: "Broccoli",
            type: "misc-fruit/vegetable",
            amount: "14",
            unit: "bits(s)",
            description: "",
        },
    ];
  }
  
  module.exports = ingredientsExport;





