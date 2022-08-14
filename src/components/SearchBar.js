import React from "react";

function SearchBar({handleFilter, handlePriceFilter, handleAlphabetize}) {

  function handleFilterChange(e) {
    handleFilter(e.target.value)
  }

  function handlePriceFilterChange(e) {
    handlePriceFilter(e.target.value)
  }

  function handleAlphabetizeChange(e) {
    handleAlphabetize(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleAlphabetizeChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handlePriceFilterChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
