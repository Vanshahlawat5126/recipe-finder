const recipesData = [
  {
    id: 1,
    name: "Pasta",
    diet: ["veg", "vegan" ],
    ingredients: [
      { name: "Noodles", quantity: 200, unit: "g" },
      { name: "Tomato Sauce", quantity: 1, unit: "cup" },
    ],
    time: 20,
    cookingDirections: [
    "Boil water",
    "Add noodles",
    "Cook for 10 minutes",
    "Add sauce and mix"
  ]
  },
  {
    id: 2,
    name: "Omelette",
    diet: ["non-veg"],
    ingredients: [
      { name: "Eggs", quantity: 2, unit: "pcs" },
      { name: "Salt", quantity: 1, unit: "pinch" },
    ],
    time: 10,
    cookingDirections: [
    "Crack eggs into a bowl",
    "Add salt and whisk well",
    "Heat pan and add oil or butter",
    "Pour mixture and cook until set",
    "Fold and serve"
  ]
  },
  {
    id: 3,
    name: "Salad",
    diet: ["veg", "vegan"],
    ingredients: [
      { name: "Lettuce", quantity: 1, unit: "cup" },
      { name: "Tomato", quantity: 1, unit: "pcs" },
      { name: "Cucumber", quantity: 0.5, unit: "pcs" },
    ],
    time: 15,
    cookingDirections: [
    "Wash all vegetables",
    "Chop lettuce, tomato, and cucumber",
    "Add to a bowl",
    "Mix well",
    "Serve fresh"
  ]
  },
  {
    id: 4,
    name: "Pakora",
    diet: ["veg", "vegan"],
    ingredients: [
      { name: "Besan", quantity: 100, unit: "g" },
      { name: "Potato", quantity: 1, unit: "pcs" },
      { name: "Onion", quantity: 1, unit: "pcs" },
      { name: "Spices", quantity: 1, unit: "tsp" },
    ],
    time: 20,
    cookingDirections: [
    "Slice potato and onion",
    "Mix with besan and spices",
    "Add water to make batter",
    "Heat oil in a pan",
    "Fry until golden brown"
  ]
  },
  {
    id: 5,
    name: "Lemonade",
      diet: ["veg", "vegan"],
    ingredients: [
      { name: "Lemons", quantity: 2, unit: "pcs" },
      { name: "Sugar", quantity: 2, unit: "tbsp" },
      { name: "Water", quantity: 1, unit: "glass" },
    ],
    time: 10,
     cookingDirections: [
    "Squeeze lemon juice into a glass",
    "Add sugar",
    "Add water and mix well",
    "Stir until sugar dissolves",
    "Serve chilled"
  ]
  },
  {
  id: 6,
  name: "Fried Rice",
    diet: ["veg", "vegan"],
  ingredients: [
    { name: "Rice", quantity: 1, unit: "cup" },
    { name: "Vegetables", quantity: 1, unit: "cup" },
    { name: "Soy Sauce", quantity: 1, unit: "tbsp" },
  ],
  time: 25,
   cookingDirections: [
    "Cook rice and keep aside",
    "Heat oil in a pan",
    "Add vegetables and sauté",
    "Add cooked rice",
    "Add soy sauce and mix well"
  ]
},
{
  id: 7,
  name: "Maggi",
  diet: ["veg", "vegan"], 
  ingredients: [
    { name: "Maggi Noodles", quantity: 1, unit: "packet" },
    { name: "Water", quantity: 1.5, unit: "cup" },
    { name: "Masala", quantity: 1, unit: "packet" },
  ],
  time: 5,
   cookingDirections: [
    "Boil water in a pan",
    "Add noodles",
    "Add masala",
    "Cook for 2-3 minutes",
    "Serve hot"
  ]
},
{
  id: 8,
  name: "Grilled Sandwich",
    diet: ["veg", "vegan"],
  ingredients: [
    { name: "Bread", quantity: 2, unit: "slices" },
    { name: "Butter", quantity: 1, unit: "tbsp" },
    { name: "Vegetables", quantity: 0.5, unit: "cup" },
  ],
  time: 10,
   cookingDirections: [
    "Apply butter on bread slices",
    "Add vegetables between slices",
    "Grill in sandwich maker",
    "Cook until crispy",
    "Serve hot"
  ]
},
{
  id: 9,
  name: "Tea",
  diet: ["veg", "vegan"],
  ingredients: [
    { name: "Water", quantity: 1, unit: "cup" },
    { name: "Milk", quantity: 0.5, unit: "cup" },
    { name: "Tea Leaves", quantity: 1, unit: "tsp" },
    { name: "Sugar", quantity: 1, unit: "tsp" },
  ],
  time: 10,
  cookingDirections: [
    "Boil water in a pan",
    "Add tea leaves",
    "Add milk and sugar",
    "Boil for a few minutes",
    "Strain and serve"
  ]
},
{
  id: 10,
  name: "Coffee",
  diet: ["veg", "vegan"],
  ingredients: [
    { name: "Milk", quantity: 1, unit: "cup" },
    { name: "Coffee Powder", quantity: 1, unit: "tsp" },
    { name: "Sugar", quantity: 1, unit: "tsp" },
  ],
  time: 5,
   cookingDirections: [
    "Heat milk",
    "Add coffee powder",
    "Add sugar",
    "Mix well",
    "Serve hot"
  ]
},
{
  id: 11,
  name: "Poha",
  diet: ["veg", "vegan"],
  ingredients: [
    { name: "Poha", quantity: 1, unit: "cup" },
    { name: "Onion", quantity: 1, unit: "pcs" },
    { name: "Peanuts", quantity: 2, unit: "tbsp" },
    { name: "Spices", quantity: 1, unit: "tsp" },
  ],
  time: 15,
cookingDirections: [
    "Wash poha and drain water",
    "Heat oil and add peanuts",
    "Add onions and sauté",
    "Add poha and spices",
    "Mix well and cook for few minutes"
  ]
},
{
  id: 12,
  name: "Paneer Bhurji",
  diet: ["veg"],
  ingredients: [
    { name: "Paneer", quantity: 200, unit: "g" },
    { name: "Onion", quantity: 1, unit: "pcs" },
    { name: "Tomato", quantity: 1, unit: "pcs" },
    { name: "Spices", quantity: 1, unit: "tsp" },
  ],
  time: 20,
  cookingDirections: [
    "Heat oil in a pan",
    "Add onions and sauté",
    "Add tomatoes and cook",
    "Add crumbled paneer",
    "Add spices and mix well"
  ]
},
{
  id: 13,
  name: "Fruit Salad",
  diet: ["veg", "vegan"],
  ingredients: [
    { name: "Apple", quantity: 1, unit: "pcs" },
    { name: "Banana", quantity: 1, unit: "pcs" },
    { name: "Orange", quantity: 1, unit: "pcs" },
    { name: "Honey", quantity: 1, unit: "tbsp" },
  ],
  time: 10,
   cookingDirections: [
    "Wash and chop fruits",
    "Add to a bowl",
    "Add honey",
    "Mix gently",
    "Serve fresh"
  ]
},
{
  id: 14,
  name: "French Toast",
  diet : ["non-veg"],
  ingredients: [
    { name: "Bread", quantity: 2, unit: "slices" },
    { name: "Eggs", quantity: 1, unit: "pcs" },
    { name: "Milk", quantity: 0.5, unit: "cup" },
    { name: "Sugar", quantity: 1, unit: "tsp" },
  ],
  time: 15,
  cookingDirections: [
    "Whisk eggs, milk, and sugar",
    "Dip bread slices in mixture",
    "Heat pan and add butter",
    "Cook bread until golden brown",
    "Serve hot"
  ]
},
{
  id: 15,
  name: "Upma",
  diet: ["veg", "vegan"],
  ingredients: [
    { name: "Rava", quantity: 1, unit: "cup" },
    { name: "Water", quantity: 2, unit: "cup" },
    { name: "Vegetables", quantity: 0.5, unit: "cup" },
    { name: "Spices", quantity: 1, unit: "tsp" },
  ],
  time: 20,
  cookingDirections: [
    "Heat oil in a pan",
    "Add rava and roast lightly",
    "Add water and bring to boil",
    "Add vegetables and spices",
    "Cook until thick and serve"
  ]
}
];

export default recipesData;