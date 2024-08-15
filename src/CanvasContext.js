import React, { createContext, useState,useContext} from 'react';

// Create the context
const CanvasContext = createContext();

// Create a provider component
export const CanvasProvider = ({ children }) => {
  const [canvasState, setCanvasState] = useState({ cards: [], connections: [] });
  return (
    <CanvasContext.Provider value={{ canvasState, setCanvasState }}>
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);