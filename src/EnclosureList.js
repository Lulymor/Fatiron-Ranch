import React from "react";
import EnclosureCard from "./EnclosureCard";

function EnclosureList({ enclosures, search }) {
  const filteredEnclosures = enclosures.filter((enclosure) => {
    const areaSearch = enclosure.area.toLowerCase();
    return areaSearch.includes(search.toLowerCase());
  });

  return (
    <ul className="cards">
      {filteredEnclosures.map((enclosure) => {
        return <EnclosureCard {...enclosure} key={enclosure.id} />;
      })}
    </ul>
  );
}
export default EnclosureList;