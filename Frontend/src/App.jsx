import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Form from './components/Form'
import Layout from './components/Layout'

const App = () => {

  const [toggle , setToggle] = useState(true)

  return (
    <div className='bg-[#e9edf5] text-white w-screen h-screen flex flex-col items-center'>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Form toggle={toggle} setToggle={setToggle} />
      <Layout />
    </div>
  )
}

export default App
