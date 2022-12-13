import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  console.log(props);
  return (
    <div className="w-[500px] h-[500px] grid grid-cols-3 grid-rows-3 gap-6 mt-5 md:w-[300px] md:h-[300px] md:mt-24 md:gap-4 ">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
