import './index.css'
import './assets/css/sidebar.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <header>
         <nav>
         <div className='bg-primary text-white flex justify-between px-3'>
       <div className='flex items-center space-x-5'>
        <ul className='flex space-x-3 text-sm font-semibold items-stretch'>
          <li>
            <NavLink to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            </NavLink>
          </li>
          <li><NavLink to="/">Activities</NavLink></li>
          <li><NavLink to="/">Billing</NavLink></li>
          <li><NavLink to="/">Customers</NavLink></li>
          <li><NavLink to="/">Vendors</NavLink></li>
          <li><NavLink to="/">Payroll and HR</NavLink></li>
          <li><NavLink to="/">Financial</NavLink></li>
          <li><NavLink to="/">Reports</NavLink></li>
          <li><NavLink to="/">Analytics</NavLink></li>
          <li><NavLink to="/">Documents</NavLink></li>
          <li><NavLink to="/">Setup</NavLink></li>
          <li><NavLink to="/">A/R</NavLink></li>
          <li><NavLink to="/">A/P</NavLink></li>
          <li><NavLink to="/">Sales Audit</NavLink></li>
          <li><NavLink to="/">Support</NavLink></li>
        </ul>
        </div>
        <div className='flex items-center p-2 space-x-5'>
          <NavLink to="/auth/login" className='border-2 border-white px-5 py-1 font-bold rounded-md box-border'>Log in</NavLink>
          <NavLink to="/auth/signup" className='text-primary border-2 border-white bg-white px-5 py-1 font-bold rounded-md'>Sign up</NavLink>
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
