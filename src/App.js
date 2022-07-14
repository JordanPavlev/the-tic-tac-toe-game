import './App.scss';
import { Board } from './components/Board/board';
import { Start } from './components/Start/start';

function App() {
  return (
    <div className="App">
     <div className='container'>
      <Start/>
      <Board/>
     </div>
    </div>
  );
}

export default App;
