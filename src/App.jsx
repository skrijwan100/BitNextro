import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/Home'
import InteractiveBackground from './components/b'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
      {/* <InteractiveBackground/> */}
    </>
  )
}

export default App
