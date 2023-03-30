import Button from "react-bootstrap/Button";
function Headers() {
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
          <Button variant="light" href="/animals">
            Animals
          </Button>{" "}
          <Button variant="light" href="/animal/new">
            Add new Animal
          </Button>{" "}
          <Button variant="light" href="/enclosure/new">
            Create new Enclosure
          </Button>{" "}
          {/* <Button variant="light" href="/login">
            LogIn
          </Button>{" "} */}
        </div>
      </header>
    </>
  );
}
export default Headers;
