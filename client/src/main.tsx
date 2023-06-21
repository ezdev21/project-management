import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './pages/About';
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FourOhFour from './pages/FourOhFour';
import Login from './pages/Login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<About/>} />
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
