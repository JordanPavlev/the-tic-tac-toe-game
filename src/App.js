import { useContext } from 'react';
import './App.scss';
import  Start  from './components/start';
import  Board  from "./components/board";
import  Modal  from "./components/modal"

import { GameContext } from './context/GameContext';



function App() {
    //Context
    const { screen } = useContext(GameContext)
    

    
  return (
    <div className="App">
     <div className='container'>
      {screen === "start" ? <Start/> : <Board/>}
     </div>
     <Modal/>
    </div>
  );
}

export default App;
