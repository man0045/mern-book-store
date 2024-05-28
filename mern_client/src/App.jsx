import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/Navbar'
import MyFooter from './component/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        
        <Outlet/>
      </div>
      <MyFooter/>
    </>
  )
}

export default App
