import { useState, useEffect } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetail";
import Modal from "./components/Modal";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searched, setSearched] = useState(false);
  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  async function fetchRecipes(query) {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();

      if (data.meals) {
        const converted = data.meals.map((meal) => {
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const name = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (name && name.trim()) {
              ingredients.push({
                name: name.trim(),
                unit: measure && measure.trim() ? measure.trim() : "to taste",
              });
            }
          }

          const cookingDirections = meal.strInstructions
            ? meal.strInstructions
              .split(/\r\n|\n/)
              .map((s) => s.trim())
              .filter((s) => s.length > 0)
            : [];

          return {
            id: meal.idMeal,
            name: meal.strMeal,
            image: meal.strMealThumb,
            category: meal.strCategory,
            area: meal.strArea,
            diet: [meal.strCategory.toLowerCase()],
            time: null,
            ingredients,
            cookingDirections,
            youtube: meal.strYoutube,
          };
        });
        setRecipes(converted);
      } else {
        setRecipes([]);
        setError("No recipes found. Try another search.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesFilter =
      filter === "all" ? true : recipe.diet.includes(filter);
    return matchesFilter;
  });

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit() {
    fetchRecipes(searchQuery);
  }

  return (
    <div className="App">
      <div className="header">
        <h1 className="WebName">Recipe Finder</h1>
      </div>

      <SearchBar
        onChange={handleSearchChange}
        setFilter={setFilter}
        onSearch={handleSearchSubmit}
      />

      {loading && <p className="status">Searching...</p>}
      {error && <p className="status error">{error}</p>}

      

      {searched && !loading && filteredRecipes.length === 0 && !error && (
        <div className="empty-state">No recipes found 😢</div>
      )}

      {filteredRecipes.length > 0 && (
        <RecipeList
          recipes={filteredRecipes}
          onSelect={setSelectedRecipe}
        />
      )}

      {selectedRecipe && (
        <Modal onClose={() => setSelectedRecipe(null)}>
          <RecipeDetail recipe={selectedRecipe} />
        </Modal>
      )}

      <p className="submitPrompt">
        Wish to add your recipe?{" "}
        <a href="mailto:vansh27052007@gmail.com">Mail us</a>
      </p>
    </div>
  );
}

export default App;