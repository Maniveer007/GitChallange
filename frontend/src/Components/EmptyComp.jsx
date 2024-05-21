// EmptyDiv.js
import React from "react";
import { useDrop } from "react-dnd";

const EmptyDiv = ({ onDrop, type }) => {
  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        width: "100px",
        height: "100px",
        border: `2px dashed ${isOver ? "green" : "black"}`,
        margin: "5px",
      }}
    >
      {isOver && <p>Drop here</p>}
    </div>
  );
};

export default EmptyDiv;
