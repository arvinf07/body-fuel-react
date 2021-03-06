import './App.css';
import body_fuel from './body_fuel.png'
import React, {useState, useEffect} from 'react';
import WelcomePage from './containers/WelcomePage';
import FoodTable  from "./containers/FoodTable";

function App() {
  const [loggedIn, setLogin] = useState(false)
  const [user, setUser] = useState({})

  // const addMealFood = (mealFood) => {
  //   setUser((prevState) => {
  //     return {
  //       ...prevState,
  //       prevState.meals: ...prevState.meals
  //     }
  //   })
  // }

  const setLocalStorage = (user) => {
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('User', JSON.stringify({user})) 
    // the user info must be JSON.stringified first before saving because they can only store strings                          
  }                 
                            
  useEffect(() => {
    // when loging out make sure to clear localStorage
    if(localStorage.getItem('loggedIn')){
      setLogin(true)
      setUser(JSON.parse(localStorage.getItem('User')))
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img alt="bodyfuel logo" id='App-logo' src={body_fuel}/>
      </header>
      { loggedIn
      ? <FoodTable meals={user.meals} />
      : <WelcomePage setLogin={setLogin} setLocalStorage={setLocalStorage} setUser={setUser} /> 
      }
    </div>
  );
}


export default App;
