import React from 'react'
import TotalTask from './TotalTask'
import CompletedTodos from './CompletedTodos'

const Layout = ({todos , setTodos , deleteTodos , completedTodos}) => {
  return (
    <div className='bg-transparent text-white w-screen h-screen flex p-5  items-center'>
      <TotalTask todos={todos} setTodos={setTodos} deleteTodos={deleteTodos} completedTodos={completedTodos}/>
      <CompletedTodos todos={todos}  deleteTodos={deleteTodos}/>
    </div>
  )
}

export default Layout
