import React, { useState, useRef, useEffect } from "react"
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value.trim()) {
            toast.error("Please enter a task");
            return;
        }


        addTodo(value);
        setValue('')
        setError("")
    }

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" value={value} ref={inputRef} className="todo-input" placeholder='What is the task today?' onChange={handleChange} />
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm