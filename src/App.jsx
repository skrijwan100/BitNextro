import { useState } from 'react'
import './App.css'
import HomePage from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
    </>
  )
}

export default App
