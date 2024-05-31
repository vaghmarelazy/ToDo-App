import React, { useEffect, useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  //   let todos = [
  //     'Hit the gym',
  //     'Go Outside and get some frsh air',
  //     'Read a book',
  //     'Complete daily tasks'
  // ]
  const [todos, setTodos] = useState([]);
  const [todosValue, setTodovalues] = useState("");

function persistData(newList){
  localStorage.setItem('todos', JSON.stringify({todos:newList})
  )
}

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodos(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index != todoIndex;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEdited = todos[index];
    setTodovalues(valueToBeEdited);
    handleDeleteTodos(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse( localTodos ).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <Todoinput
        handleAddTodos={handleAddTodos}
        todosValue={todosValue}
        setTodovalues={setTodovalues}
      />
      <TodoList
        handleEditTodos={handleEditTodos}
        handleDeleteTodos={handleDeleteTodos}
        todos={todos}
      />
    </>
  );
}
export default App;
