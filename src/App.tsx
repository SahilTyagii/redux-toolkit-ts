import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App: React.FC = () => {

  return (
    <>
    <h1 className='leading-normal'>
      Learning redux-toolkit<br />with <span className='bg-[#377CC8] rounded-md p-2 text-white font-light'><span className='font-semibold'>Type</span>Script</span>
    </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
