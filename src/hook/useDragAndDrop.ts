import { useState } from "react";
interface Iposition {
  x: number;
  y: number;
}
interface InewPostion {
  clientX: number;
  clientY: number;
}
const useDragAndDrop = (position: Iposition) => {
  const [draggingInfo, setDraggingInfo] = useState({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: position,
    lastTranslation: position,
  });

  const { isDragging } = draggingInfo;
  const onMouseDown = ({ clientX, clientY }: InewPostion) => {
    if (!isDragging)
      setDraggingInfo({
        ...draggingInfo,
        isDragging: true,
        origin: { x: clientX, y: clientY },
      });
  };

  const onMouseMove = ({ clientX, clientY }: InewPostion) => {
    if (isDragging) {
      const { origin, lastTranslation } = draggingInfo;
      setDraggingInfo({
        ...draggingInfo,
        translation: {
          x: Math.abs(clientX - (origin.x + lastTranslation.x)),
          y: Math.abs(clientY - (origin.y + lastTranslation.y)),
        },
      });
    }
  };

  const onMouseUp = () => {
    if (isDragging) {
      const { translation } = draggingInfo;
      setDraggingInfo({
        ...draggingInfo,
        isDragging: false,
        lastTranslation: { x: translation.x, y: translation.y },
      });
    }
  };

  const elementPosition = {
    position: "absolute",
    right: `${draggingInfo.translation.x}px`,
    bottom: `${draggingInfo.translation.y}px`,
  };

  return {
    elementPosition,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};

export default useDragAndDrop;
