import { useState } from "react";

function RecipeDetail({ recipe }) {
  const [servings, setServings] = useState(1);

  if (!recipe) return <p>Select a recipe to see details</p>;

  return (
    <div className="recipe-detail">

      <h2>{recipe.name}</h2>

      {/* IMAGE */}
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "100%", borderRadius: "12px", marginBottom: "16px" }}
        />
      )}

      {/* CATEGORY & AREA */}
      <p className="time">🍽 {recipe.category} • {recipe.area}</p>

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
              {item.name} — {item.unit || "to taste"}
            </li>
          ))}
        </ul>
      </div>

      {/* DIRECTIONS */}
      {recipe.cookingDirections && recipe.cookingDirections.length > 0 && (
        <div className="directions-section">
          <h3>Directions</h3>
          <ol>
            {recipe.cookingDirections.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {/* YOUTUBE LINK */}
      {recipe.youtube && (
        
          href={recipe.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn"
          style={{
            display: "inline-block",
            marginTop: "16px",
            padding: "10px 20px",
            background: "#e94560",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          ▶ Watch on YouTube
        </a>
      )}

    </div>
  );
}

export default RecipeDetail;