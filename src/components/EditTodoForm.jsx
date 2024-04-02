import React, { useState, useRef, useEffect } from "react"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditTodoForm = ({ editTodo, task }) => {

    const [value, setValue] = useState(task.task)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value.trim()) {
            toast.error("Please enter a task");
            return;
        }

        editTodo(value, task.id);
        setValue('')
        setError("")
    }

    const inputRef = useRef('null')

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} ref={inputRef} className="todo-input" placeholder='Update Task' onChange={handleChange} />
            <button type="submit" className='todo-btn'>Update Task</button>
           
        </form>
    )
}

export default EditTodoForm