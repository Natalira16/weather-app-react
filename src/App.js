import logo from './logo.svg';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          👋🏼 Hello World 👩🏽‍💻
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Weather city="Berlin" />
      </header>
    </div>
  );
}

export default App;
