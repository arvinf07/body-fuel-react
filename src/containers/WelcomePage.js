import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import NewUserForm from '../components/NewUserForm'


export default function WelcomePage({setLogin, setMeals}){
  const [newForm, setNewForm] = useState(false)

  return(
    <div id='welcome'>
      <h2>Create meals that fuel your body. For you and the world.</h2>
      {newForm ? <NewUserForm setLogin={setLogin} setNewForm={setNewForm} />
      : <LoginForm setLogin={setLogin} setMeals={setMeals} setNewForm={setNewForm} />
      }
    </div>
  )
}