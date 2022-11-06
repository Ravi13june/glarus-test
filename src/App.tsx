import React from "react";
import { AboutUser } from "./components/About";
import Avatar from "./components/Avatar";
import Card from "./components/Card";
import EditButton from "./components/EditButton";
import useDragAndDrop from "./hook/useDragAndDrop";

const { innerHeight, innerWidth } = window;
const mainPosition = { x: innerWidth / 2 - 100, y: innerHeight / 2 - 100 };

const App = () => {
  const { elementPosition, onMouseDown, onMouseMove, onMouseUp } =
    useDragAndDrop(mainPosition);
  const container = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={container}>
      <div
        style={elementPosition as React.CSSProperties}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseMove}
        onMouseUp={onMouseUp}
      />
      <AboutUser />
      <Card />
      <EditButton />
      <Avatar />
    </div>
  );
};
export default App;
