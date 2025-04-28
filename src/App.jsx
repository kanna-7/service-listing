import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ServiceCard from './components/ServiceCard'

function App() {
  const [matter, setMatter] = useState()

  return (
    <>
      <ServiceCard />
    </>
  )
}

export default App
