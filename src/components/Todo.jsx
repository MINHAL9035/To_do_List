import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTodo,editTodo }) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed" : ""}`}  >{task.task}</p>
            <div>
                <FontAwesomeIcon onClick={() => toggleComplete(task.id)} icon={faCircleCheck} />
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />

            </div>

        </div>
    )
}

export default Todo