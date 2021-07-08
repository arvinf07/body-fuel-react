import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import NewUserForm from '../components/NewUserForm'


export default function WelcomePage({setLogin, setMeals, setUser, setLocalStorage}){
  const [newForm, setNewForm] = useState(false)

  return(
    <div id='welcome'>
      <h2>Create meals that fuel your body. For you and the world.</h2>
      {newForm ? <NewUserForm setUser={setUser} setLogin={setLogin} setNewForm={setNewForm} />
      : <LoginForm setLogin={setLogin} setLocalStorage={setLocalStorage} setUser={setUser} setMeals={setMeals} setNewForm={setNewForm} />
      }
    </div>
  )
}