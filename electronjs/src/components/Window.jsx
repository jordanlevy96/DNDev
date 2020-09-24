import React from 'react';
import Draggable from 'react-draggable';
 

export default function Window(props) {
  return (
    <Draggable>
      <div>
          {props.children}
      </div>
      </Draggable>
  );
}
