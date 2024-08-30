import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
import Swal from "sweetalert2";
import { message } from "antd";
uuidv4();

const getLocalItems = () => {
  let lists = localStorage.getItem("lists");
  console.log(lists);

  if (lists) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const TodoWrapper = () => {
  const [todos, setTodos] = useState(getLocalItems());
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updatedTodos.sort((a, b) =>
      a.completed === b.completed ? 0 : a.completed ? 1 : -1
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this todo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos(todos.filter((todo) => todo.id != id));
        message.success("Todo deleted successfully");
      }
    });
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
    message.success("Task edited successfully");
  }; 
  
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    message.success("Logged Out successfully");
    navigate("/login");
  };

  return (
    <>
      <button className="logOut" onClick={handleLogout}>
        Logout
      </button>
      <div className="main">
        <div className="image-div">
          <img className="image" src="/mainImage.jpg" alt="image" />
        </div>
        <div className="todoDiv">
          <div className="TodoWrapper">
            <h1>Getting Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <EditTodoForm key={index} editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoWrapper;
