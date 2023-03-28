import React, { useEffect, useState } from "react";
import NewAnimalForm from "./NewAnimalForm";
import AnimalList from "./AnimalList";
import Search from "./Search";

function AnimalPage() {
  const [animals, setAnimals] = useState([]);

  function handleAddAnimal(newAnimal) {
    const updatedAnimal = [newAnimal, ...animals];
    setAnimals(updatedAnimal);
  }
  useEffect(() => {
    fetch("http://localhost:5555/animals")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <main>
      <NewAnimalForm onAdd={handleAddAnimal} />
      <Search />
      <AnimalList animals={animals} />
    </main>
  );
}

export default AnimalPage;
