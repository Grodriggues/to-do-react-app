import React from "react";
import CollapisbleItem from "./CollapisbleItem";

function Collapisble({ items,fns }) {
  return (
    <ul className="collapsible anmt grid">
      {items.length > 0 && items.map((item,i) => <CollapisbleItem info={item} key={i} fns={fns} />)}
      
    </ul>
  );
}

export default Collapisble;
