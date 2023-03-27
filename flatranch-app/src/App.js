// import React, { useState, useEffect } from 'react'

// function App() {

//   const [data, setData] = useState([{}])

//   useEffect(() => {
//       fetch('/animals').then(
//         res => res.json()
//       ).then(
//         data => {
//           setData(data)
//           console.log(data)
//         }
//       )
//   }, [])

//   return (
//     <div>
//       {(typeof data.animals === 'undefined') ? (
//         <p>Loading...</p>

//       ): (
//         data.animals.map((animal, i) => (
//           <p key={i}>{animal}</p>
//         ))
//       )}
//     </div>
//   )
// }

// export default App

import '../App.css';
import AnimalsList from './AnimalsList';
import NewAnimalForm from './NewAnimalForm';
import Filter from './Filter.js';

function App() {
  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        <NewAnimalForm />
        <Filter />
        <AnimalsList />
    </div>
  );
}

export default App;