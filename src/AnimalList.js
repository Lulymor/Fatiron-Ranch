import React from "react";
import AnimalCard from "./AnimalCard";

function AnimalList({ animals, search }) {
  const filteredAnimals = animals.filter((animal) => {
    const speciesSearch = animal.species.toLowerCase();
    return speciesSearch.includes(search.toLowerCase());
  });

  return (
    <ul className="cards">
      {filteredAnimals.map((animal) => {
        return <AnimalCard {...animal} key={animal.id} />;
      })}
    </ul>
  );
}
export default AnimalList;
