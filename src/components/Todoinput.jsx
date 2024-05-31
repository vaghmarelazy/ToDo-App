import React, { useState } from "react";

function Todoinput(props) {
    const {handleAddTodos , todosValue, setTodovalues} = props

    
  return (
    <header>
      <input 
      value={todosValue} 
      onChange={(e)=>{
        setTodovalues(e.target.value);
      }}
      placeholder="Add a Todo"/>
      <button onClick={()=>{
        handleAddTodos(todosValue);
        setTodovalues('')
      }}>Add</button>
    </header>
  );
}

export default Todoinput;

