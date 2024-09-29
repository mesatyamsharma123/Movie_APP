import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './component/Count'
import Logic from './component/Logic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Logic/>
    </>
  )
}

export default App
