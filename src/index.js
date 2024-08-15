import React from 'react';
import ReactDOM from 'react-dom/client';
import { CanvasProvider } from './CanvasContext';
import  App  from './App'

ReactDOM.createRoot(document.querySelector('#root')
).render( 
    <CanvasProvider> 
    <App />
    </CanvasProvider>
  )