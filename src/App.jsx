import { useState } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import recipesData from "./data/recipes";
import RecipeDetail from "./components/RecipeDetail";
import Modal from "./components/Modal";

function App() {
  // single source of truth
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

 const query = searchQuery.toLowerCase();

const filteredRecipes = recipesData.filter((recipe) => {
  const nameMatch = recipe.name.toLowerCase().includes(query);

  const ingredientMatch = recipe.ingredients.some((ing) =>
    ing.name.toLowerCase().includes(query)
  );

  const matchesSearch = nameMatch || ingredientMatch;

  const matchesFilter =
    filter === "all" ? true : recipe.diet.includes(filter);

  return matchesSearch && matchesFilter;
});

  // search
  function handleSearchChange(event) {
    setSearchQuery(event.target.value.toLowerCase());
  }

  // detail modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <h1 className="WebName">Recipe Finder</h1>
      </div>

      {/* SEARCH */}
      <SearchBar onChange={handleSearchChange} setFilter={setFilter} />

      {/* LIST */}
      {filteredRecipes.length === 0 ? (
        <div className="empty-state">
          No recipes found 😢
        </div>
      ) : (
        <RecipeList
          recipes={filteredRecipes}
          onSelect={setSelectedRecipe}
        />
      )}
      {/* Recipe card*/}
      {selectedRecipe && (
        <Modal onClose={() => setSelectedRecipe(null)}>
          <RecipeDetail recipe={selectedRecipe} />
        </Modal>
      )}

      {/* SUBMIT PROMPT */}
      <p className="submitPrompt">
        Want to add your recipe?{" "}
        <a href="mailto:vansh27052007@gmail.com">Mail us</a>
      </p>
    </div>
  );
}

export default App;