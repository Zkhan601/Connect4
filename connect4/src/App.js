import './App.css';
import Board from './components/Board';
import DropZone from './components/DropZone';

function App() {

  return (
    
    <div className="App">
      <div class="container">
  
  
 
</div>

     <div className="box">
      <div class ="area">
     <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        </div>
        <h1>Connect Four</h1>
      <DropZone/>
      <Board/>
      </div>
    </div>
  );
}

export default App;