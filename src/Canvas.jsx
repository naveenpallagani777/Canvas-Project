import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Xarrow from 'react-xarrows';
import { useCanvasContext } from './CanvasContext.js'; // Import the context

const Canvas = () => {
  const [cards, setCards] = useState([
    {
        "id": "card-0",
        "text": "This is some dummy text...",
        "detailedText": "This is the full detailed text of the card.",
        "x": 300,
        "y": 94,
        "width": 200,
        "height": 100
    },
    {
        "id": "card-1",
        "text": "This is some dummy text...",
        "detailedText": "This is the full detailed text of the card.",
        "x": 50,
        "y": 50,
        "width": 200,
        "height": 100
    }
]);
  const [connections, setConnections] = useState([{"from": 'card-0', "to": 'card-1'}]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [popupContent, setPopupContent] = useState(null);
  const [draggingCard, setDraggingCard] = useState(null);
  console.log(connections,cards);
  const { setCanvasState } = useCanvasContext(); // Access the context

  const addCard = () => {
    const newCard = {
      id: `card-${cards.length}`,
      text: 'This is some dummy text...',
      detailedText: 'This is the full detailed text of the card.',
      x: 50,
      y: 50,
      width: 200,
      height: 100,
    };
    setCards([...cards, newCard]);
  };

  const updateCard = (id, newData) => {
    setCards(cards.map(card => card.id === id ? { ...card, ...newData } : card));
  };

  const handleCardClick = (cardId) => {
        if (selectedCard === null) {
            setSelectedCard(cardId);
        } else {
            if (selectedCard !== cardId) {
              setConnections([...connections, { from: selectedCard, to: cardId }]);
            }
            setSelectedCard(null);
            setHoveredCard(null);
        }
  };

  const handleCardTouchStart = (cardId) => {
    console.log("touch start");
    // Your card touch logic, if needed
    handleCardClick(cardId); // Call the same function to handle click and touch
  };

  const handleCardDrag = (e, d, cardId) => {
    updateCard(cardId, { x: d.x, y: d.y });
  };

  const handleCardResize = (e, direction, ref, delta, position, cardId) => {
    updateCard(cardId, { 
      width: ref.offsetWidth, 
      height: ref.offsetHeight,
      x: position.x,
      y: position.y
    });
  };

  const handleCardHover = (cardId) => {
    if (selectedCard !== cardId) {
      setHoveredCard(cardId);
    } else {
      setHoveredCard(null);
    }
  };

  const handleDoubleClick = (e, index) => {
    // Double click logic
  };

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const handleSaveCanvas = () => {
    setCanvasState({ cards: [...cards], connections: [...connections] }); // Save the current canvas state in context
  };

  const removeConnection = (indexToRemove) => {
    setConnections(connections.filter((_, index) => index !== indexToRemove));
    console.log("remove");
  };

  return (
    <div style={{ width: '100vw', height: '50vh', overflow: 'auto', border: '1px solid black', position: 'relative' }}>
      <button onClick={addCard}>Add Card</button>
      <button onClick={handleSaveCanvas} style={{ marginLeft: '10px' }}>Save Canvas</button>
      
      {/* Cards */}
      {cards.map((card) => (
        <Rnd
          key={card.id}
          default={{
            x: card.x,
            y: card.y,
            width: card.width,
            height: card.height,
          }}
          bounds="parent"
          id={card.id}
          onDrag={(e, d) => handleCardDrag(e, d, card.id)}
          onResizeStop={(e, direction, ref, delta, position) => handleCardResize(e, direction, ref, delta, position, card.id)}
        >
          <div
            style={{
              border: selectedCard === card.id ? '2px solid blue' : '1px solid gray',
              padding: '10px',
              backgroundColor: 'white',
              borderRadius: '4px',
              cursor: selectedCard ? 'crosshair' : 'pointer',
              widows:'100%',
              height: '100%',
              boxSizing: 'border-box',
            }}
            onClick={() => handleCardClick(card.id)}
            onTouchStart={() => handleCardTouchStart(card.id)} // Add touch event
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <p>
              {card.text.slice(0, 20)}...
              <button onClick={(e) => { e.stopPropagation(); openPopup(card.detailedText); }}>Show more</button>
            </p>
          </div>
        </Rnd>
      ))}

      {/* Temporary Arrow */}
      {selectedCard && hoveredCard && (
        <Xarrow start={selectedCard} end={hoveredCard} color="blue" dashness={{ strokeLen: 10, nonStrokeLen: 15 }} />
      )}

      {/* Permanent Arrows with Double-Tap to Remove */}
      {connections.map((connection, index) => (
        <Xarrow
        key={index}
        start={connection.from}
        end={connection.to}
        passProps={{
          onClick: () => removeConnection(index), // For desktop
          onTouchEnd: () => {
            console.log("onTouchEnd fired for connection", index);
            removeConnection(index); // For mobile
          },
          cursor: 'pointer',
        }}
      />
      
      
      ))}

      {/* Popup */}
      {popupContent && (
        <div style={popupStyle}>
          <div style={popupContentStyle}>
            <p>{popupContent}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const popupStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const popupContentStyle = {
  width: '300px',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '4px',
};

export default Canvas;
