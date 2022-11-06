import useDragAndDrop from "../hook/useDragAndDrop";
import avatar from "../images/avatar.jpg";

const { innerHeight, innerWidth } = window;
const avatarInitialPosition = {
  x: innerWidth / 2 + 250,
  y: innerHeight / 2 + 100,
};
export default function Avatar() {
  const { elementPosition, onMouseDown, onMouseMove, onMouseUp } =
    useDragAndDrop(avatarInitialPosition);

  return (
    <div
      style={elementPosition as React.CSSProperties}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div>
        <img
          style={{ width: "10rem", height: "auto", borderRadius: "50%" }}
          src={avatar}
          alt="avatar"
        />
      </div>
    </div>
  );
}
