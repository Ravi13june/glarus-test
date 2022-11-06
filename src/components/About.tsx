import useDragAndDrop from "../hook/useDragAndDrop";
const { innerHeight, innerWidth } = window;
const startingPosition1 = { x: innerWidth / 2 - 10, y: innerHeight / 2 - 10 };

export const AboutUser = () => {
  const aboutInitialStyle = {
    width: "250px",
    height: "200px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "10px",
  };
  const { elementPosition, onMouseDown, onMouseMove, onMouseUp } =
    useDragAndDrop(startingPosition1);
  return (
    <div
      style={
        {
          ...elementPosition,
          ...aboutInitialStyle,
        } as React.CSSProperties
      }
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div style={{ padding: "15px" }}>
        <p>Hi, I'm frontend developer</p>
        <p>Having experince in ReactJs, NestJs, Mongodb,MySql</p>
      </div>
    </div>
  );
};
