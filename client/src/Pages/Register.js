import React, { registerfect, useState } from 'react'
import axios from '../axios'



function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async () => {
    
    try{
      const resp = await axios.post("//localhost:5000/register", {
        email, password
      })

      window.location.href = "/"
    }
    catch(err){
      if(err){
        alert("Invalid Credentials")
      }
    }
  }
  return (
    <div>
      <h1>Create an Account</h1>
      <form>
        <div class="form">
          <label>Email: </label>
          <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form">
          <label>Password: </label>
          <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='button' onClick={registerUser}>Submit</button>
      </form>
    </div>
  )
}

export default Register