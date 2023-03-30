function AnimalCard({ species, name, age, image, id, setAnimals }) {
  function handleDelete() {
    fetch(`http://127.0.0.1:5555/animals/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setAnimals((animals) => animals.filter((animal) => animal.id !== id));
      }
    });
  }
  return (
    <>
      <li className="card">
        <img src={image}></img>
        <h4>{name}</h4>
        <h4>{species}</h4>
        <p>Age:{age}</p>
        <button className="primary" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
}
export default AnimalCard;
