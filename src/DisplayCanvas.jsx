import React from 'react';
import { Rnd } from 'react-rnd';
import Xarrow from 'react-xarrows';
import { useCanvasContext } from './CanvasContext.js';

const DisplayCanvas = () => {
  const { canvasState } = useCanvasContext(); // Access the stored canvas state
  console.log(canvasState.connections,canvasState.cards);

  return (
    <div style={{ width: '100vw', height: '50vh', border: '1px solid black'}}>
      {/* Display Cards */}
      {canvasState.cards.map((card) => (
        <Rnd
          key={card.id}
          default={{
            x: card.x,
            y: card.y,
            width: card.width,
            height: card.height,
          }}
          bounds="parent"
          disableDragging
          enableResizing={false}
        >
          <div
            style={{
              border: '1px solid gray',
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '4px',
              height: '100%',
              boxSizing: 'border-box',
            }}
          >
            <p>{card.text.slice(0, 20)}...</p>
          </div>
        </Rnd>
      ))}

      {/* Display Connections */}
      {canvasState.connections.map((connection, index) => (
        <Xarrow
          key={index}
          start={connection.from}
          end={connection.to}
          color="gray"
          passProps={{
            onDoubleClick: (e) => {},
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
};

export default DisplayCanvas;
