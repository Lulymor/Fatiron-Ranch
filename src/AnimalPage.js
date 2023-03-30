import React, { useEffect, useState } from "react";
import NewAnimalForm from "./NewAnimalForm";
import AnimalList from "./AnimalList";
import Headers from "./Headers";
function AnimalPage() {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddAnimal(newAnimal) {
    const updatedAnimal = [newAnimal, ...animals];
    setAnimals(updatedAnimal);
  }
  
  useEffect(() => {
    fetch("http://localhost:4444/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <main>
      <Headers setSearch={setSearch} />
      <NewAnimalForm onAdd={handleAddAnimal} />
      <AnimalList animals={animals} search={search} setAnimals={setAnimals} />
    </main>
  );
}

export default AnimalPage;
