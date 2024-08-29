import { useState, useRef, useEffect } from "react";
import { message } from "antd";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      message.error("Please enter a task");
      return;
    }

    addTodo(value);
    setValue("");
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        ref={inputRef}
        className="todo-input"
        placeholder="What is the task today?"
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
export default TodoForm;
