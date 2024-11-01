import React from "react";

const Container = ({ children, designs }) => {
  return (
    <div className={`max-w-[1200px] mx-auto py-5 px-10  ${designs}`}>
      {children}
    </div>
  );
};

export default Container;
