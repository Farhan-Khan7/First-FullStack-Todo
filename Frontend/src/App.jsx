import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Layout from './components/Layout'

const App = () => {

  const [toggle , setToggle] = useState(true);
  const [todos , setTodos] = useState([]);
  const [formData , setFormData] = useState({
    task: "",
    priority : "",
    category : ""
  }); 
  
  const createTodos = async () => {
    const data = await axios.post(`${import.meta.env.VITE_API_URL}/api/todo` , formData)
    
    console.log(data.data)
  }

  const  getTodos = async () => {
    const data = await axios.get(`${import.meta.env.VITE_API_URL}/api/todo`)
    .then((res) => {
      setTodos(res.data.todos)
    })
  }

  const deleteTodos = async (id) =>{
    const data = await axios.delete(`${import.meta.env.VITE_API_URL}/api/todo/${id}`)
    .then((res) => {
      console.log(res.data.todos)
    })
    getTodos();
  }

  const completedTodos = async (id) => {
    const data = await axios.patch(`${import.meta.env.VITE_API_URL}/api/todo/${id}` , {
      completed : true
    })
    .then((res) => {
      console.log(res.data.todos)
    })
    getTodos();
  }

  useEffect(() => {
    getTodos()
  } , [])


  return (
    <div className='bg-[#e9edf5] text-white w-screen h-screen flex flex-col items-center'>
      <Navbar toggle={toggle} setToggle={setToggle} todos={todos} />
      <Form toggle={toggle} setToggle={setToggle} formData={formData} setFormData={setFormData} createTodos={createTodos} getTodos={getTodos} />
      <Layout todos={todos}  setTodos={setTodos} deleteTodos={deleteTodos} completedTodos={completedTodos}  />
    </div>
  )
}

export default App``