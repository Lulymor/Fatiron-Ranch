import React from "react";

//I can search for animals  by their name and see a filtered list of animals
function Search() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Animals:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
