import { useState } from 'react'
import './index.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <header>
         <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
         </nav>
      </header>
      <main>
        <Outlet/> 
      </main>
    </div>
  )
}

export default App
