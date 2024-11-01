import React from "react";

const ContentLoader = () => {
  const arr = new Array(10).fill("");
  return arr.map((_, key) => (
    <div
      key={key}
      data-testid="card-loader"
      className="border text-black shadow-md p-5 rounded- text-transparent select-none bg-gray-100 animate-pulse"
    >
      <div className="text-sm mb-2 w-28 py-1 bg-gray-400 rounded-lg">.</div>
      <div className="text-lg w-3/4 md:w-44 bg-gray-400 rounded-lg">.</div>
    </div>
  ));
};

export default ContentLoader;
