import React, { useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import { useGlobalContext } from "../context";

const App = () => {
  const { account, provider, contract } = useGlobalContext();

  const [items, setItems] = useState([
    { type: "image", content: img1, index: 0 },
    { type: "image", content: img2, index: 1 },
    { type: "image", content: img3, index: 2 },
    { type: "image", content: img4, index: 3 },
    { type: "image", content: img5, index: 4 },
    { type: "empty", index: 5 },
    { type: "empty", index: 6 },
    { type: "empty", index: 7 },
    { type: "empty", index: 8 },
    { type: "empty", index: 9 },
  ]);

  const handleItemClick = (index) => {
    const clickedItem = items[index];
    // console.log(clickedItem);

    // Find the first empty div and swap places
    // const emptyIndex = items.findIndex((item) => item.type === "empty");

    let emptyIndex = 0;
    if (clickedItem.index > 4) emptyIndex = clickedItem.index - 5;
    else emptyIndex = clickedItem.index + 5;

    // console.log("asdad", emptyIndex);
    // alert(emptyIndex);

    if (emptyIndex !== -1 && clickedItem.type !== "empty") {
      const updatedItems = [...items];
      updatedItems[emptyIndex] = {
        type: clickedItem.type,
        content: clickedItem.content,
        index: emptyIndex,
      };
      updatedItems[index] = { type: "empty", index: index };

      // console.log("Updated Array:", updatedItems); // Log the updated array

      setItems(updatedItems);
    }
  };

  const rolldicehandler = async () => {
    console.log(items);
    const newArray = items
      .slice(0, 5)
      .map((item) => (item.type === "empty" ? 0 : 1));

    console.log("New Array:", newArray);
  };

  return (
    <div>
      <h1>Image and Empty Div Swapper</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* Render items with indices 0-4 inline */}
        {items.slice(0, 5).map((item) => (
          <div
            key={item.index}
            onClick={() => handleItemClick(item.index)}
            style={{
              border: "1px solid black",
              width: "100px",
              height: "100px",
              margin: "5px",
              textAlign: "center",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.content}
                alt={`Image ${item.index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              "Empty"
            )}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {/* Render items with indices 5-9 below */}
        {items.slice(5, 10).map((item) => (
          <div
            key={item.index}
            onClick={() => handleItemClick(item.index)}
            style={{
              border: "1px solid black",
              width: "100px",
              height: "100px",
              margin: "5px",
              textAlign: "center",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.content}
                alt={`Image ${item.index + 1}`}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              "Empty"
            )}
          </div>
        ))}
      </div>
      <button onClick={rolldicehandler}>Roll</button>
    </div>
  );
};

export default App;
