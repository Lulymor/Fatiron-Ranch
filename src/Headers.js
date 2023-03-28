import Button from "react-bootstrap/Button";
function Headers({ setSearch }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <>
      <header>
        <h1>
          <span> 🌾 </span>
          FlatIron Ranch
          <span> 🌾 </span>
        </h1>
        <div className="navbar">
          <Button variant="light" href="/enclosures">
            Enclosures
          </Button>{" "}
          <Button variant="light" href="/animal/new">
            Buy new Animal
          </Button>{" "}
          <Button variant="light" href="login">
            LogIn
          </Button>{" "}
        </div>
        <div className="searchbar">
          <label htmlFor="search">Search Animals:</label>
          <input
            type="text"
            id="search"
            placeholder="search for a species of animal..."
            onChange={handleChange}
          />
        </div>
      </header>
    </>
  );
}
export default Headers;
