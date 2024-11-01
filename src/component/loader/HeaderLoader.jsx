import React from "react";

const HeaderLoader = () => {
  return (
    <div
      data-testid="header-loader"
      className="flex gap-2 items-center animate-pulse"
    >
      <div className="bg-gray-200 h-7 w-[120px] rounded-md"></div>
      <div className="bg-gray-200 w-16 h-11 rounded-md"></div>
    </div>
  );
};

export default HeaderLoader;
