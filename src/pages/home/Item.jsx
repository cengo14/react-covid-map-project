import React from "react";
import { PiVirus } from "react-icons/pi";

const Item = ({ color, text, value }) => {
  return (
    <div>
      <div className="flex gap-3">
        <PiVirus
          data-testid="svg"
          className={`${color} text-2xl md:text-5xl`}
        />
        <div>
          <span className="text-neutral-500 text-sm max-md:hidden">{text}</span>
          <h2 className="text-lg md:text-2xl">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default Item;
