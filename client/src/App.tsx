import './index.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <header>
         <nav>
         <div className='bg-white flex justify-between px-3'>
       <div className='flex items-center p-2 space-x-5'>
        <a href="/" className='text-xl'>Home</a>
           
        </div>
        <div className='flex items-center p-2 space-x-5'>
          <a href="/login" className='border-2 border-primary px-5 py-1 font-bold rounded-md box-border'>Log in</a>
          <a href="/signup" className='text-white border-2 border-primary bg-primary px-5 py-1 font-bold rounded-md'>Sign up</a>
        </div>
      </div>
         </nav>
      </header>
      <main>
        <Outlet/> 
      </main>
    </div>
  )
}

export default App
