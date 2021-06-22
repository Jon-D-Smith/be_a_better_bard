
import './App.css';
import Characters from './components/Characters';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
      <Characters />
      </div>
      
    </div>
  );
}

export default App;
