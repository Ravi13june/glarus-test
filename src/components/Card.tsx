import useDragAndDrop from "../hook/useDragAndDrop";

const { innerHeight, innerWidth } = window;
const infoCardinitialPosition = {
  x: innerWidth / 2 - 250,
  y: innerHeight / 2 - 250,
};

const cardInitialStyle = {
  width: "250px",
  height: "200px",
  backgroundColor: "#000000",
  color: "#fff",
  borderRadius: "10px",
};
export default function Card() {
  const { elementPosition, onMouseDown, onMouseMove, onMouseUp } =
    useDragAndDrop(infoCardinitialPosition);

  return (
    <div
      style={
        {
          ...elementPosition,
          ...cardInitialStyle,
        } as React.CSSProperties
      }
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div style={{ padding: "15px" }}>
        <h3>Name: Jon Doe</h3>
        <h3>Age: 23</h3>
        <h3>-Engineer</h3>
      </div>
    </div>
  );
}
