import React from "react";

const Cell = ({ value, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`dark:outline-1 dark:outline dark:outline-white game-cell cursor-pointer text-7xl md:text-5xl 
       flex items-center justify-center shadow-primary-shadow font-bold ${className} `}
    >
      {value}
    </div>
  );
};

export default Cell;
