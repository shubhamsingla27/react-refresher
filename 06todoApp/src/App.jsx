import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(()=>{
    const savedTodos= localStorage.getItem("localTodos")
    return savedTodos? JSON.parse(savedTodos):[
      { id: 0, description: "Play", completed: true },
      { id: 1, description: "Study", completed: false },
      { id: 2, description: "Sleep", completed: false },
    ]
  });

  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos))
  }, [todos]);

  const handleNewTodoAddition = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: prevTodos.length + 1, description: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };

  const handleEditingTodoChange=(e)=>{
    setEditingTodo((prevEditingTodo)=>(
      {...prevEditingTodo, description:e.target.value}
    ))
  }

  const handleEditingTodoSave=()=>{
    setTodos((prevTodos)=>(
      prevTodos.map((todo)=>(
        todo.id===editingTodo.id? editingTodo:todo
      ))
    ))
    setEditingTodo(null)
  }

  return (
    <>
      <form onSubmit={handleNewTodoAddition}>
        <input
          type="text"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button>Submit</button>
      </form>
      <div className="listContainer">
        {todos.map((todo) => {
          const isEditing = editingTodo?.id === todo.id;
          return (
            <div key={todo.id} className="listItemContainer">
              {isEditing ? (
                <input value={editingTodo.description} onChange={handleEditingTodoChange}/>
              ) : (
                todo.description
              )}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCompleteTodo(todo.id)}
              />
              
              <span className="spacer"></span>
              {isEditing ? (
                <button onClick={handleEditingTodoSave}>Save</button>
              ) : (
                <button onClick={() => setEditingTodo(todo)}>Edit</button>
              )}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
