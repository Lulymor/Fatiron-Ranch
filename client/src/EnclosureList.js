import React from "react";
import EnclosureCard from "./EnclosureCard";

function EnclosureList({ enclosures }) {
  const enclosureDetails = enclosures.map((enclosure) => {
    return (
      <EnclosureCard
        key={enclosure.id}
        area={enclosure.area}
        image={enclosure.image}
      />
    );
  });
  return <ul className="cards">{enclosureDetails}</ul>;
}

export default EnclosureList;