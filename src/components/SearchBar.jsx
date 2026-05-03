const SearchBar = ({ onChange, setFilter, onSearch }) => {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for recipes..."
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={onSearch}>Search</button>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>
        <option value="vegan">Vegan</option>
      </select>
    </div>
  );
};

export default SearchBar;