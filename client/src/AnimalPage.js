import React, { useEffect, useState } from "react";
import NewAnimalForm from "./NewAnimalForm";
import AnimalList from "./AnimalList";
import Search from "./Search";

function AnimalPage() {
  const [animals, setAnimals] = useState([]);
  const [enclosures, setEnclosures] = useState([]);

  function handleAddAnimal(newAnimal) {
    const updatedAnimal = [newAnimal, ...animals];
    setAnimals(updatedAnimal);
  }

  function handleAddEnclosure(newEnclosure) {
    const updatedEnclosure = [newEnclosure, ...enclosures];
    setEnclosures(updatedEnclosure);
  }

  useEffect(() => {
    fetch("http://localhost:5555/animals")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <main>
      <NewAnimalForm onAdd={handleAddAnimal} />
      <NewEnclosureForm onAdd={handleAddEnclosure} />
      <Search />
      <AnimalList animals={animals} />
    </main>
  );
}

export default AnimalPage;
