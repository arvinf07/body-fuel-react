import './App.css';
import body_fuel from './body_fuel.png'
import React, {useState, useEffect} from 'react';
import WelcomePage from './containers/WelcomePage';
import FoodTable  from "./containers/FoodTable";

function App() {
  const [loggedIn, setLogin] = useState(false)
  const [meals, setMeals] = useState([])
  const [user, setUser] = useState({})

  const setLocalStorage = (user) => {
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('User', JSON.stringify({user})) 
    // the user info must be JSON.stringified first before saving because they can only store strings                          
  }                 
                            
  useEffect(() => {
    if(localStorage.getItem('loggedIn')){
      setLogin(true)
      setUser(JSON.parse(localStorage.getItem('User'))) // localStorage can only store strings
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
      </header>
      { !loggedIn 
      ? <WelcomePage setLogin={setLogin} setLocalStorage={setLocalStorage} setUser={setUser} setMeals={setMeals} /> 
      : <FoodTable user={user} /> 
      }
      
    </div>
  );
}

export default App;
