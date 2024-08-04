import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo: React.FC = () => {
    const [input, setInput] = useState<string>("")
    const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value)
    }

    const addTodoHandler = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (input.trim()) {
            dispatch(addTodo(input))
            setInput('')
        }
    }

  return (
    <form onSubmit={addTodoHandler} className='mt-12 space-x-3'>
        <input type="text" name="text" id="text" value={input} onChange={handleChange} placeholder='Enter a Todo' className='bg-gray-800 rounded-md border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' autoComplete='off'/>
        <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >
            Add Todo
        </button>
    </form>
  )
}

export default AddTodo
