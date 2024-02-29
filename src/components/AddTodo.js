import React,{ useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className='mx-[50px] my-[50px]'>
        <input type='text' placeholder='Enter your todos...' className='rounded-[10px]' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' className='ml-[10px] bg-gray-600 p-[5px] rounded-[10px]'>Add Todo</button>
    </form>
  )
}

export default AddTodo