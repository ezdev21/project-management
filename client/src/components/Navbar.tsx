import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Navbar() {
  const { t } = useTranslation();
  const name = useSelector((state:RootState) => state.auth.name);

  const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault()
  }
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
        <div className='flex items-center p-2 space-x-5'>
          <form onSubmit={(e) => handleSubmit(e)}>
             <button>{name}</button>
          </form>
        </div>
      </div>
         </nav>
      </header>
    </div>
  )
}

export default Navbar
