import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
 

export default function Window(props) {
  return (
    <Draggable
    axis="x"
    handle=".handle"
    defaultPosition={{x: 0, y: 0}}
    position={null}
    grid={[25, 25]}
    scale={1}
    >
          {props.children}
      </Draggable>
  );
}
