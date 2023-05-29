import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "../App.css"
import axios from '../axios'

function Home() {

  const [user, setUser] = useState("")

  useEffect(() => {
    (async() => {
      try{
        const resp = await axios.post("//localhost:5000/@me")
        setUser(resp.data)
        console.log(resp.data);
      }
      catch(e){
        console.log("Not Authenticated");
      }
      
    })()
  }, [])

  const logOutUser = async () => {
    const resp = await axios.post("//localhost:5000/logout")
    window.location.href = "/"
  }


  return (
    <div>
      <h1>Welcome to this React Application</h1>
      
      {user ? 
      <div>
        <h2>Logged In</h2>
        <h3>ID: {user.id}</h3>
        <h3>Email: {user.email}</h3>
        <button onClick={logOutUser}>Logout</button>
      </div>
      :
      <div>
      <p>You are not logged in!!</p>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    </div>
    }
    </div>
  )
}

export default Home