import './App.css';
import body_fuel from './body_fuel.png'
import React, {useState} from 'react';
import WelcomePage from './containers/WelcomePage';

function App() {
  const [loggedIn, setLogIn] = useState(false)
  const [meals, setMeals] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
      </header>
      {/* If !loggedIn */}
      <WelcomePage setLogIn={setLogIn} setMeals={setMeals} />
      {/* Else show user's table */}
    </div>
  );
}

export default App;
