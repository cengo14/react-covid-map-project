import React from "react";

const Card = ({ item }) => {
  return (
    <div className="border text-black shadow-md p-5 rounded-md">
      <p className="text-sm font-semibold mb-2 capitalize">{item[0]}</p>
      <h2 className="text-lg font-bold">{!item[1] ? "Bilinmiyor" : item[1]}</h2>
    </div>
  );
};

export default Card;
