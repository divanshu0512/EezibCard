import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lanyard from './Landyard'
import "../src/font.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ height:"100vh", width:"100%" }} >
    <Lanyard position={[0, 0, 20]} gravity={[0, -60, 0]} />
    <h1 id="eezib" style={{ fontFamily:"Nura", fontSize:'3rem', fontWeight:500, textTransform:'capitalize' }} >Eezib Technology pvt.ltd</h1>
    <h4 id="eezib2" style={{ fontFamily:"Raleway", fontSize:'1rem' }} >Designed by Eezib tech @Divanshu..</h4>
    </div>
  )
}

export default App
