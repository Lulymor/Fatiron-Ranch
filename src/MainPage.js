import React, { useEffect, useState } from "react";
import NewAnimalForm from "./NewAnimalForm";
import AnimalList from "./AnimalList";
import Headers from "./Headers";
import EnclosureList from "./EnclosureList";
import NewEnclosureForm from "./NewEnclosureForm";
import { Route, Switch } from "react-router-dom";

function MainPage() {
  const [animals, setAnimals] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddAnimal(newAnimal) {
    const updatedAnimal = [newAnimal, ...animals];
    setAnimals(updatedAnimal);
  }
  const [enclosures, setEnclosures] = useState([]);
  const [searchEnc, setSearchEnc] = useState("");

  function handleAddEnclosure(newEnclosure) {
    const updatedEnclosure = [newEnclosure, ...enclosures];
    setEnclosures(updatedEnclosure);
  }
  useEffect(() => {
    fetch("http://localhost:5555/enclosures")
      .then((res) => res.json())
      .then((data) => setEnclosures(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5555/animals")
      .then((res) => res.json())
      .then((data) => setAnimals(data));
  }, []);

  return (
    <main>
      <Switch>
        <Route exact path="/animal/new">
          <Headers />
          <NewAnimalForm onAdd={handleAddAnimal} />
        </Route>
        <Route exact path="/animals">
          <Headers />
          <AnimalList
            animals={animals}
            search={search}
            setAnimals={setAnimals}
            setSearch={setSearch}
          />
        </Route>
        <Route exact path="/enclosure/new">
          <Headers />
          <NewEnclosureForm
            onAdd={handleAddEnclosure}
            setSearch={setSearchEnc}
          />
        </Route>
        <Route exact path="/enclosures">
          <Headers />

          <EnclosureList
            enclosures={enclosures}
            searchEnc={searchEnc}
            setSearchEnc={setSearchEnc}
            setEnclosures={setEnclosures}
          />
        </Route>
      </Switch>
    </main>
  );
}

export default MainPage;

// http://localhost:3000/enclosures
