import React from "react";
import { PiVirus } from "react-icons/pi";

const HomeLoader = ({ color }) => {
  return (
    <div data-testid="home-loader" className="flex justify-center w-full">
      <PiVirus color={color} size={26} className="animate-spin" />
    </div>
  );
};

export default HomeLoader;
