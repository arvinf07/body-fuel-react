import { useState } from "react";

export default function createUserForm(){
  return(
    <form id="new-user-form">
      Create New User
      <br/>
      <label for="username">Username:</label>
      <input name='username' type="text" required='true' />
      <br/>
      Weight: <input name='weight' type='number' required='true' />
      <br/>
      Height: <input name='height' type='number' required='true' />
      <br/>
      Age: <input name='age' type='number' required='true' />
      <br/>
      Gender:
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Female</label>
      <input type="radio" id="other" name="gender" value="other" />
      <label for="other">Other</label>
      <br/>
      Password: <input name="password" type='password' required='true' />
      <br/>
      Password Confirmation: <input name="password_confirmation" type='password' required='true' />
      <br/>
      <input type='submit' value='Create Account' />
    </form>
  )
}