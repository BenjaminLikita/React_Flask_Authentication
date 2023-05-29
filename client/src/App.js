import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  )
}
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
export default App