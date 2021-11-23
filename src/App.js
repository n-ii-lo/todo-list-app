import TodoList from "./Todo/todoList";
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy bread" },
    { id: 2, completed: false, title: "Buy butter" },
    { id: 3, completed: false, title: "Buy milk" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className='wrapper'>
      <h1>Henlloo</h1>

      <TodoList todos={todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
