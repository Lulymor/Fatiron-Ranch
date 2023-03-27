

export default function AnimalCard() {

    return (
      <div className="AnimalCard">
        <h3>name</h3>
        <img src='#' alt='animal'/>
        <button>{true ? "I'm good 😇" : "I'm bad 😈"}</button>
          <button className="remove-btn">REMOVE</button>
      </div>
    )
  }