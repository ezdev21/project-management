import './index.css'
import './assets/css/sidebar.css'
import {Outlet } from 'react-router-dom'

function App() {
  
  return (
    <div>
      <main>
        <Outlet/> 
      </main>
    </div>
  )
}

export default App
