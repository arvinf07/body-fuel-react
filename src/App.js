import './App.css';
import body_fuel from './body_fuel.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
