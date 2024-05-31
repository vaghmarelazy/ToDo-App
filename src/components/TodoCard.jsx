import React from "react";
import Todoinput from "./Todoinput";

function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button onClick={()=>{
            handleEditTodos(index)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={()=>{
            handleDeleteTodos(index)
          }}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  );
}

export default TodoCard;
