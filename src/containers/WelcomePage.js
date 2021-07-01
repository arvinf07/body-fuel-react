import LoginForm from '../components/LoginForm'

export default function WelcomePage({setLogIn, setMeals}){
  return(
    <div id='welcome'>
      <h2>Create meals that fuel your body. For you and the world.</h2>
      <LoginForm setLogIn={setLogIn} setMeals={setMeals} />
    </div>
  )
}