import React, { useState } from "react";

function NewEnclosureForm({ onAdd }) {
  const [area, setArea] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/enclosures", {
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
          name="area type"
          placeholder="Area Type"
          value={species}
          onChange={(event) => setArea(event.target.value)}
        />
        <button type="submit">Add Enclosure</button>
      </form>
    </div>
  );
}

export default NewEnclosureForm;