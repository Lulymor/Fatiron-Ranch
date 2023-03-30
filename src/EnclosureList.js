import React from "react";
import EnclosureCard from "./EnclosureCard";

function EnclosureList({ enclosures, search }) {
  const filteredEnclosures = enclosures.filter((enclosure) => {
    const areaSearch = enclosure.area.toLowerCase();
    return areaSearch.includes(search.toLowerCase());
  });

  // function AnimalList({ animals, search }) {
  //   const filteredAnimals = animals.filter((animal) => {
  //     const speciesSearch = animal.species.toLowerCase();
  //     return speciesSearch.includes(search.toLowerCase());
  //   });

  return (
    <ul className="cards">
      {filteredEnclosures.map((enclosure) => {
        return <EnclosureCard {...enclosure} key={enclosure.id} />;
      })}
    </ul>
  );
}
export default EnclosureList;