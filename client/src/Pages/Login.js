import React, { useState } from 'react'
import axios from '../axios'



function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const logInUser = async () => {
    
    try{
      const resp = await axios.post("//localhost:5000/login", {
        email, password
      })
      if (resp){
        window.location.href = "/"
      }

    }
    catch(err){
      if(err.response.status === 401){
        alert("Invalid Credentials")
      }
    }
  }
  return (
    <div>
      <h1>Log in to your Account</h1>
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
        <button type='button' onClick={logInUser}>Submit</button>
      </form>
    </div>
  )
}

export default Login