import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/button'
import DashBoard from './Components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashBoard/>
    </>
  )
}

export default App
