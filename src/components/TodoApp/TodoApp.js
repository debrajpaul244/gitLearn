import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Todos from "./Todos";

let dummyData = ["saheb", "debraj"];

function TodoApp() {
  let [todos, setTodos] = useState(dummyData);

  let getData = (data) => {
    // console.log(data);
    setTodos([data,...todos]);
  };

  return (
    <div>
      <AddTodo onNewTodoData={getData} />
      <Todos data={todos} />
    </div>
  );
}

export default TodoApp;
