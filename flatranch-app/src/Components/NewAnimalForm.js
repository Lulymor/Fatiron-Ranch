import React, {useState} from "react";


//when the app starts, I can see all the plants
//I can add a new plant to the page by submitting the form.

function NewAnimalForm({onAdd}) {
  const [species, setSpecies] = useState("")
  const [age, setAge] = useState("")
  const [name, setName] = useState("")

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:3000/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application /json",
      },
      body: JSON.stringify({
        species: species,
        age: age,
        name: name,
      })
    })
    .then(res => res.json())
    .then((newAnimal) => onAdd(newAnimal))
  }
  return (
    <div className="new-animal-form">
      <h2>New Animal</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="species type" placeholder="Species Type" value={species} onChange = {(event) => setSpecies(event.target.value)} />
        <input type="text" name="age" placeholder="age" value={age} onChange = {(event) => setAge(event.target.value)}/>
        <input type="text" name="name" step="0.01" placeholder="name" value={name} onChange ={(event) => setName(event.target.value)}/>
        <button type="submit">Add Animal</button>
      </form>
    </div>
  );
}

export default NewAnimalForm;
 
