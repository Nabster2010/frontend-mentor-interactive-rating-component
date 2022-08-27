import React from "react";

const Circle = ({ children, selected, setSelected, value }) => {
  return (
    <button
      onClick={() => setSelected(value)}
      className={`w-14 h-14  rounded-full cursor-pointer  shadow-md flex justify-center items-center hover:bg-LightGrey hover:text-White transition active:bg-Orange  ${
        selected ? "selected hover:bg-Orange" : "unselected"
      }`}
    >
      {children}
    </button>
  );
};

export default Circle;
