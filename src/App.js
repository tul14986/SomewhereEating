import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">SomewhereEating</a>
        <a href="#news">Cuisines</a>
        <a href="#contact">Locations</a>
        <a href="#about">Contact</a>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Proof Of Concept - Somewhere Eating
      </header>
    </div>
  );
}

export default App;
