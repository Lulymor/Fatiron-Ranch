import React, { useState } from "react";

function AnimalCard({ species, name, age, image }) {
  function handleClick() {
    console.log("clicked");
  }

  // function handleRemoveAnimal({animal, onRemoveAnimal}) {
  //   fetch(`http://localhost:4444/animals`, {
  //     method: "DELETE",
  //   }).then((r) => {
  //     if (r.ok) {
  //       onRemoveAnimal({animal});
  //     } else {
  //       r.json().then((err) => alert(err.errors));
  //     }
  //   });
  // }

  return (
    <li className="card">
      <img src={image}></img>
      <h4>{name}</h4>
      <h4>{species}</h4>
      <p>Age:{age}</p>
      <button className="primary"
      //  onClick={() => handleRemoveAnimal({animal})}
       >
        Delete
      </button>
    </li>
  );
}

export default AnimalCard;
