function EnclosureCard({ area, image, id, setEnclosures }) {
  function handleDelete() {
    fetch(`http://127.0.0.1:5555/enclosures/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setEnclosures((enclosures) =>
          enclosures.filter((enclosure) => enclosure.id !== id)
        );
      }
    });
  }
  return (
    <li className="card">
      <img src={image}></img>
      <h4>{area}</h4>
      <button className="primary" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
export default EnclosureCard;
