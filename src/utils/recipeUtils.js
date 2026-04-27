export const searchRecipes = (recipes, query) => {
  const q = query.toLowerCase();

  return recipes.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.ingredients.some(item =>
      item.toLowerCase().includes(q)
    )
  );
};