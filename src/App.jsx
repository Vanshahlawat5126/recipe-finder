import { useState } from "react";
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
        // convert API format to match your existing recipe structure
        const converted = data.meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          category: meal.strCategory,
          area: meal.strArea,
          diet: [meal.strCategory.toLowerCase()],
          ingredients: Object.keys(meal)
            .filter((k) => k.startsWith("strIngredient") && meal[k])
            .map((k) => ({ name: meal[k] })),
          instructions: meal.strInstructions,
          youtube: meal.strYoutube,
        }));
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

  // filter on top of API results
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

      {!searched && !loading && (
        <p className="status">Search for a recipe to get started...</p>
      )}

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
        Want to add your recipe?{" "}
        <a href="mailto:vansh27052007@gmail.com">Mail us</a>
      </p>
    </div>
  );
}

export default App;