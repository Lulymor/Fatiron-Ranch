import React, { useEffect, useState } from "react";
import NewEnclosureForm from "./NewEnclosureForm";
import EnclosureList from "./EnclosureList";
// import Headers from "./Headers";
function EnclosurePage() {
  const [enclosures, setEnclosures] = useState([]);
  const [search, setSearch] = useState("");

  function handleAddEnclosure(newEnclosure) {
    const updatedEnclosure = [newEnclosure, ...enclosures];
    setEnclosures(updatedEnclosure);
  }
  useEffect(() => {
    fetch("http://localhost:4444/enclosures")
      .then((res) => res.json())
      .then((data) => setEnclosures(data));
  }, []);

  return (
    <main>
      <NewEnclosureForm onAdd={handleAddEnclosure} setSearch={setSearch}/>
      <EnclosureList enclosures={enclosures} search={search} setEnclosures={setEnclosures} />
    </main>
  );
}

export default EnclosurePage;