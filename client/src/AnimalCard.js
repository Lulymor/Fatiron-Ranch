import React, { useState } from "react";

function AnimalCard({ species, age, name }) {
  const [isInStock, setIsInStock] = useState(true);

  function handleStock() {
    setIsInStock((isInStock) => !isInStock);
  }
  return (
    <li className="card">
      <h4>{species}</h4>
      <h4>{name}</h4>
      <p>Age:{age}</p>
      {isInStock ? (
        <button className="primary" onClick={handleStock}>
          In Stock
        </button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default AnimalCard;
