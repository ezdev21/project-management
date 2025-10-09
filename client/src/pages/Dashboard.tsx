import { useState } from "react"
import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

const Dashboard = () =>{  
  const { t } = useTranslation();
  const [opened,setOpened] = useState(false)
  const toggleNav = ()=>{
    setOpened(!opened)
  }

  return (
    <div>
      <div id="mySidenav" className={`sidenav + ${opened? 'opened-nav' : ''}`}>
        <ul>
        <li><NavLink to="/">{t('Activities')}</NavLink></li>
          <li><NavLink to="/">{t('Billing')}</NavLink></li>
          <li><NavLink to="/">{t('Customers')}</NavLink></li>
          <li><NavLink to="/">{t('Vendors')}</NavLink></li>
          <li><NavLink to="/">{t('Payroll and HR')}</NavLink></li>
          <li><NavLink to="/">{t('Financial')}</NavLink></li>
          <li><NavLink to="/">{t('Reports')}</NavLink></li>
          <li><NavLink to="/">{t('Analytics')}</NavLink></li>
          <li><NavLink to="/">{t('Documents')}</NavLink></li>
          <li><NavLink to="/">{t('Setup')}</NavLink></li>
          <li><NavLink to="/">{t('A/R')}</NavLink></li>
          <li><NavLink to="/">{t('A/P')}</NavLink></li>
          <li><NavLink to="/">{t('Sales Audit')}</NavLink></li>
          <li><NavLink to="/">{t('Support')}</NavLink></li>
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