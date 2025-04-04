import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lanyard from './Landyard'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ height:"100vh", width:"100%" }} >
    <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    <h1 id="eezib" style={{ fontFamily:"Raleway", fontSize:'3rem' }} >Eezib Technology pvt.ltd</h1>
    </div>
  )
}

export default App
