import {useState} from "react"

export default function LoginForm(){
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

  return(
    <form id='login-form'>
      <h5>Get started by logging in</h5>
      Username: <input value={username} onChange={onChange} name='username' type='text' required='true'/>
      Password: <input value={password} onChange={onChange} name='password' type='password' required='true' />
      <input type='submit' value='Login'/>
      <br/>
      <span>Don't have an account? <button>Create one!</button></span>
    </form>
  )

}

