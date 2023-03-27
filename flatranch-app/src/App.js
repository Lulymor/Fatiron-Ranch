import React, { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch('/animals').then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
  }, [])

  return (
    <div>
      {(typeof data.animals === 'undefined') ? (
        <p>Loading...</p>

      ): (
        data.animals.map((animal, i) => (
          <p key={i}>{animal}</p>
        ))
      )}
    </div>
  )
}

export default App
