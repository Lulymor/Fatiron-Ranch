import React, { useState } from "react";

function EnclosureCard({ area, image }) {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <li className="card">
      <img src={image}></img>
      <h4>Area: {area}</h4>
      <button class="primary" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

export default EnclosureCard;