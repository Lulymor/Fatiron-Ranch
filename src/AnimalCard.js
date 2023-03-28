import React, { useState } from "react";

function AnimalCard({ species, name, age, image }) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <li className="card">
      <img src={image}></img>
      <h4>{name}</h4>
      <h4>{species}</h4>
      <p>Age:{age}</p>
      <button class="primary" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

export default AnimalCard;
