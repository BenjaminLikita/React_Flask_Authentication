import React from 'react'
import NavBar from './NavBar'

function Layout({children}) {
  return (
    <div className='Layout'>
        <NavBar />
        {children}
    </div>
  )
}





export default Layout