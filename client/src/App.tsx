import { useState } from 'react'
import './index.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header>
        <nav>
          
        </nav>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>  
  )
}

export default App
