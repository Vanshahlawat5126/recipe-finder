// takes recipes as props and displays them in a list format
const RecipeList = ({ recipes, onSelect }) => {
    if(recipes.length === 0){
        return <p>No recipes found</p>
    }
    return (
        <div >
            {recipes && recipes.map((recipe, index) => (

                <div key={index} className="recipe-card" onClick={() => onSelect(recipe)}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients.map(ing => ing.name).join(", ")}</p>
                    <p>{recipe.description}</p>
                </div>

            ))}
        </div>
    );
}
export default RecipeList;