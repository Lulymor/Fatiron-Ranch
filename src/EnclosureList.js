import React from "react";
import EnclosureCard from "./EnclosureCard";

function EnclosureList({ enclosures, searchEnc, setSearchEnc, setEnclosures }) {
  const filteredEnclosures = enclosures.filter((enclosure) => {
    const areaSearch = enclosure.area.toLowerCase();
    return areaSearch.includes(searchEnc.toLowerCase());
  });
  function handleChange(event) {
    setSearchEnc(event.target.value);
  }
  return (
    <>
      <div className="searchbar">
        <label htmlFor="search">Search Enclosures:</label>
        <input
          type="text"
          id="search"
          placeholder="search for a enclosure..."
          onChange={handleChange}
        />
      </div>
      <ul className="cards">
        {filteredEnclosures.map((enclosure) => {
          return (
            <EnclosureCard
              {...enclosure}
              key={enclosure.id}
              setSearchEnc={setSearchEnc}
              setEnclosures={setEnclosures}
            />
          );
        })}
      </ul>
    </>
  );
}
export default EnclosureList;
