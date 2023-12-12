import React from "react";

const Box = ({ children, className }) => {
  return (
    <div
      className={`${className} rounded-lg w-full hover:border hover:bg-accent shadow-md hover:shadow-md`}
    >
      {children}
    </div>
  );
};

export default Box;
