import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({ animals, search, setSearch, setAnimals }) {
  const filteredAnimals = animals.filter((animal) => {
    const speciesSearch = animal.species.toLowerCase();
    return speciesSearch.includes(search.toLowerCase());
  });
  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <>
      <div className="searchbar">
        <label htmlFor="search">Search Animals:</label>
        <input
          type="text"
          id="search"
          placeholder="search for a species of animal..."
          onChange={handleChange}
        />
      </div>
      <ul className="cards">
        {filteredAnimals.map((animal) => {
          return (
            <AnimalCard
              {...animal}
              key={animal.id}
              setSearch={setSearch}
              setAnimals={setAnimals}
            />
          );
        })}
      </ul>
    </>
  );
}
export default AnimalList;
