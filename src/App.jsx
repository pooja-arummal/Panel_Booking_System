import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/button'
import DashBoard from './Components/dashboard'
import Student from './Components/SGList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DashBoard/>
      {/* <Student/> */}
    </>
  )
}

export default App
