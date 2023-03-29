import React, { useState } from "react";
import { Button } from "react-bootstrap";

function NewEnclosureForm({ onAdd }) {
  const [area, setArea] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:4444/enclosures", {
      method: "POST",
      headers: {
        "Content-Type": "application /json",
      },
      body: JSON.stringify({
        area: area
      }),
    })
      .then((res) => res.json())
      .then((newEnclosure) => onAdd(newEnclosure));
  }
  return (
    <div className="new-enclosure-form">
      <h2>New Enclosure</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="area"
          placeholder="area"
          value={area}
          onChange={(event) => setArea(event.target.value)}
        />
        <Button type="submit" variant="light">
          Add Enclosure
        </Button>
      </form>
    </div>
  );
}

export default NewEnclosureForm;