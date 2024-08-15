import React, { createContext, useState,useContext} from 'react';

// Create the context
const CanvasContext = createContext();

// Create a provider component
export const CanvasProvider = ({ children }) => {
    let [cards, setCards] = useState([
        {
          id: "card-0",
          text: "This is some dummy text...",
          detailedText: "This is the full detailed text of the card.",
          x: 300,
          y: 94,
          width: 200,
          height: 100
        },
        {
          id: "card-1",
          text: "This is some dummy text...",
          detailedText: "This is the full detailed text of the card.",
          x: 50,
          y: 50,
          width: 200,
          height: 100
        }
      ]);
      let [popupInput,setInput] = useState(false);
      let [change, setChange]  = useState(true);
      const [connections, setConnections] = useState([{ from: 'card-0', to: 'card-1' }]);
  return (
    <CanvasContext.Provider value={{ cards, setCards, connections, setConnections, popupInput, setInput, change, setChange}}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);