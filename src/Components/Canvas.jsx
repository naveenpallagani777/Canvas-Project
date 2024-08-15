import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Xarrow from 'react-xarrows';
import { useCanvasContext } from '../CanvasContext.js'; // Import the context
import Input from './Input.jsx'

const Canvas = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [popupContent, setPopupContent] = useState(null);

  let {cards,connections,setConnections,setCards,popupInput,setInput} = useCanvasContext();

  
  

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
    handleCardClick(cardId); // Call the same function to handle click and touch
  };

  const handleCardDrag = (e, d, cardId) => {
    updateCard(cardId, { x: d.x, y: d.y });
  };

  const handleCardResize = (e, direction, ref, delta, position, cardId) => {
    updateCard(cardId, { 
      width: Math.max(ref.offsetWidth, 200), // Ensure width is at least 200px
      height: Math.max(ref.offsetHeight, 100), // Ensure height is at least 100px
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

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  const removeConnection = (indexToRemove) => {
    setConnections(connections.filter((_, index) => index !== indexToRemove));
  };

  const removeCard = (cardId) => {
    setCards(cards.filter(card => card.id !== cardId));
    setConnections(connections.filter(connection => connection.from !== cardId && connection.to !== cardId));
    setSelectedCard(null);
  };

  return (
    <div className='w-[720px] md:w-full absolute top-[70px]' style={{ height:'90vh',overflow: 'auto', border: '1px solid black'}}>
      <div className='w-full flex gap-4 justify-center absolute bottom-2'>
        <button className='border p-2 text-2xl font-medium bg-blue-700 text-yellow-50 rounded-md' onClick={() => {setInput(true)}}>Add Card</button>
      </div>

      {popupInput && (<div className='w-full h-full flex justify-center items-center fixed top-0 right-0 z-20'
                      style={{background:'rgba(0, 0, 0, 0.5)'}} >
        <Input />
      </div>)}
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
          minWidth={200}    // Set minimum width to 200px
          minHeight={100}   // Set minimum height to 100px
          id={card.id}
          onDrag={(e, d) => handleCardDrag(e, d, card.id)}
          onResizeStop={(e, direction, ref, delta, position) => handleCardResize(e, direction, ref, delta, position, card.id)}
          style={{ boxSizing: 'border-box' }}
        >
          <div className='p-2 bg-white rounded-md relative w-full h-full '
            style={{
              border: selectedCard === card.id ? '2px solid blue' : '1px solid gray',
              cursor: selectedCard ? 'crosshair' : 'pointer',
              boxSizing: 'border-box',
            }}
            onClick={() => handleCardClick(card.id)}
            onTouchStart={() => handleCardTouchStart(card.id)}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <p>
              {card.text.slice(0, 20)}...
              <button onClick={(e) => { e.stopPropagation(); openPopup(card.detailedText); }} className='border border-lime-500 p-2 rounded-md absolute left-2 bottom-2 font-medium'>Show more</button>
            </p>
            {/* Remove Button */}
            <button className='bg-red-700 text-blue-100 px-2 font-medium absolute right-2 bottom-2'
              onClick={(e) => { e.stopPropagation(); removeCard(card.id); }}
            >
              X
            </button>
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
            onTouchEnd: () => removeConnection(index), // For mobile
            cursor: 'pointer',
          }}
        />
      ))}

      {/* Popup */}
      {popupContent && (
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className='fixed top-0 right-0 w-full h-full flex items-center justify-center'>
          <div  className='w-[300px] p-5 bg-white relative rounded-md'>
            <p>{popupContent}</p>
            <button className='bg-red-700 text-blue-100 px-2 absolute right-2 bottom-2' onClick={closePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
