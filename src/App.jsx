import React,{useContext} from 'react';
import Canvas from './Components/Canvas';
import DisplayCanvas from './DisplayCanvas';
import Head from './Components/Head';
import { useCanvasContext } from './CanvasContext';
import Help from './Components/Help'


function App() {
  let {change} = useCanvasContext();
  return (
    <div className="App">
      <Head />
      {!change && <Help />}
      {change && <Canvas />}

    </div>
  );
}

export default App;
