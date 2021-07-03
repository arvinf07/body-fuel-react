import './App.css';
import body_fuel from './body_fuel.png'
import React, {useState} from 'react';
import WelcomePage from './containers/WelcomePage';
import FoodTable  from "./containers/FoodTable";

function App() {
  const [loggedIn, setLogin] = useState(false)
  const [meals, setMeals] = useState([])


  return (
    <div className="App">
      <header className="App-header">
        <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
      </header>
      { !loggedIn ? <WelcomePage setLogin={setLogin} setMeals={setMeals} /> : <FoodTable /> }
      
    </div>
  );
}

export default App;
