import React, { useState } from "react";

function EnclosureCard({ area }) {
  const [isLivedIn, setIsLivedIn] = useState(true);

  function handleEnclosure() {
    setIsLivedIn((isLivedIn) => !isLivedIn);
  }
  return (
    <li className="card">
      <h4>Area: {area}</h4>
      <h4>{image}</h4>
      {isLivedIn ? (
        <button className="primary" onClick={handleEnclosure}>
          {animal} Lives Here!
        </button>
      ) : (
        <button onClick={handleEnclosure}>Vacant</button>
      )}
    </li>
  );
}

export default EnclosureCard;