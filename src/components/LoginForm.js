import {useState} from "react"

export default function LoginForm({setNewForm, setLogin, setUser, setLocalStorage}){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChange = (e) => {
    //dynamically change name of function to set value
    if(e.target.name === 'username'){
      setUsername(e.target.value)
    } else{
      setPassword(e.target.value)
    }
  }

  const loginUser = (event) => {
    event.preventDefault()
    const body = {username, password}
    const configObject = {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    }; 
    fetch(`http://127.0.0.1:3000/login`, configObject)
    .then(resp => resp.json())
    .then(user => {
      setLogin(true)
      setUser(user)
      setLocalStorage(user)
      console.log(user)
    })
    .catch(message => alert(message))
    
  }

  return(
    <form id='login-form' onSubmit={loginUser}>
      <h5>Get started by logging in</h5>
      Username: <input value={username} onChange={onChange} name='username' type='text' required='true'/>
      Password: <input value={password} onChange={onChange} name='password' type='password' required='true' />
      <input type='submit' value='Login'/>
      <br/>
      <span>Don't have an account? <button onClick={() => setNewForm(true)}>Create one!</button></span>
    </form>
  )

}

