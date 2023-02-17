import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

function Index() {
  let [todos, setTodos] = useState([]);

  function getDate(data) {
    setTodos((prevTodos) => {
      return [...prevTodos, data];
    });
  }

  function getTheData(id) {
    let finterDelete = todos && todos.filter((x) => x.id !== id);
    setTodos((oldTodo) => {
      return finterDelete;
    });
  }

  return (
    <>
      <NewTodo onData={getDate} />
      <Todos todos={todos} onDeleteData={getTheData} />
    </>
  );
}

export default Index;
