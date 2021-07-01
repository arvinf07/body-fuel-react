import { useState } from "react";

export default function NewUserForm({setNewForm}){
  const [state, setState] = useState({
    username: "",
    weight: 0,
    height: 0,
    age: 0,
    password: "",
    password_confirmation: "",
    gender: ""
  })

  const onChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  return(
    <form id="new-user-form">
      Create New User
      <br/>
      <label for="username">Username: </label>
      <input onChange={onChange} name='username' type="text" required='true' />
      <br/>
      <label for="weight">Weight: </label>
      <input onChange={onChange} name='weight' type='number' required='true' />
      <br/>
      Height: <input onChange={onChange} name='height' type='number' required='true' />
      <br/>
      Age: onChange={onChange} <input name='age' type='number' required='true' />
      <br/>
      Gender:  
      <label for="male">Male</label>
      <input type="radio" id="male" name="gender" value="male" checked={state.gender === 'male'} onChange={onChange} />

      <label for="female">Female</label>
      <input type="radio" id="female" name="gender" value="female" checked={state.gender === 'female'} onChange={onChange} />

      <label for="other">Other</label>
      <input type="radio" id="other" name="gender" value="other" checked={state.gender === 'other'} onChange={onChange}/>
      <br/>
      Password: <input name="password" type='password' required='true' onChange={onChange} />
      <br/>
      Password Confirmation: <input name="password_confirmation" type='password' required='true' onChange={onChange} />
      <br/>
      <input type='submit' value='Create Account' />

      <br/>
      <span>Already have an account? <button onClick={() => setNewForm(false)}>Log In!</button></span>
    </form>
  )
}