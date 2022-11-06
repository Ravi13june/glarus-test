import useDragAndDrop from "../hook/useDragAndDrop";

const { innerHeight, innerWidth } = window;
const buttonInitailPosition = {
  x: innerWidth / 2 + 300,
  y: innerHeight / 2 + 300,
};
function EditButton() {
  const { elementPosition, onMouseDown, onMouseMove, onMouseUp } =
    useDragAndDrop(buttonInitailPosition);
  return (
    <div
      style={elementPosition as React.CSSProperties}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <button
        style={{
          border: "1px solid #000",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        Edit Profile
      </button>
    </div>
  );
}

export default EditButton;
