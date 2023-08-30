import React from "react";
import Box from "./Box";
import boxes from "./boxes";

function App() {
  const [allBoxes, setallBoxes] = React.useState(boxes);

  const box = allBoxes.map((box) => {
    return <Box key={box.id} on={box.on} toggle={() => toggle(box.id)} />;
  });

  function toggle(id) {
    setallBoxes((prev) => {
      return prev.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }
  return <div>{box}</div>;
}

export default App;
