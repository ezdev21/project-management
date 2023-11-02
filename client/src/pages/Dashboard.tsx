import { useState } from "react"
import { NavLink } from "react-router-dom"

const Dashboard = () =>{  
  const [opened,setOpened] = useState(false)
  const toggleNav = ()=>{
    setOpened(!opened)
  }
  return (
    <div>
      <div id="mySidenav" className={`sidenav + ${opened? 'opened-nav' : ''}`}>
        <ul>
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
      <div id="main">
        <nav className="flex justify-between">
           <span className={`menu-span + ${opened? 'opened-menu-span' : ''}`} onClick={toggleNav}>&#9776;</span>
        </nav>
      </div>
    </div>
  )
}
export default Dashboard