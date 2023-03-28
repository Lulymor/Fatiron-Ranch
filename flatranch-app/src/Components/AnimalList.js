import React from "react";
import AnimalCard from "./AnimalCard";


//When the app runs I can see all the plants

function AnimalList({animals}) {
  const animalDetails = animals.map((animal) => {
    return <AnimalCard key={animal.id} species ={animal.species} age ={animal.age} name={animal.name} />
  })
  return (
    <ul className="cards">{animalDetails}</ul>
  );
}

export default AnimalList;