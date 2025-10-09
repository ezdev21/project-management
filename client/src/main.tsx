import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './pages/About';
import './index.css'
import './utils/i18n/index'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FourOhFour from './pages/FourOhFour';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/auth/signup" element={<Signup/>} />
      <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/auth/reset-password" element={<ResetPassword/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<FourOhFour/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
