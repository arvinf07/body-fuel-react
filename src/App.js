import './App.css';
import body_fuel from './body_fuel.png'
import WelcomePage from './containers/WelcomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
      </header>
      {/* If !loggedIn */}
      <WelcomePage />
      {/* Else show user's table */}
    </div>
  );
}

export default App;
