import { useState } from "react";

function RecipeDetail({ recipe }) {
  const [servings, setServings] = useState(1);

  if (!recipe) return <p>Select a recipe to see details</p>;

  return (
    <div className="recipe-detail">

      <h2>{recipe.name}</h2>

      {/* SERVINGS SECTION */}
      <div className="servings-section">
        <label>No. of servings: {servings}</label>
        <input
          type="range"
          min="1"
          max="50"
          value={servings}
          onChange={(e) => setServings(Number(e.target.value))}
        />
      </div>

      {/* INGREDIENTS */}
      <div className="ingredients-section">
        <h4>Ingredients:</h4>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>
              {item.name} — {item.quantity * servings} {item.unit}
            </li>
          ))}
        </ul>
      </div>

      {/* TIME */}
      <p className="time">⏱ Time: {recipe.time} min</p>

      {/* DIRECTIONS */}
      {recipe.cookingDirections && (
        <div className="directions-section">
          <h3>Directions</h3>
          <ol>
            {recipe.cookingDirections.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

    </div>
  );
}

export default RecipeDetail;