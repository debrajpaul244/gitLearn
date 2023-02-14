import React, { useState } from "react";

function AddTodo(props) {
  const [todo, setTodos] = useState("");

  let handelChange = (e) => {
    setTodos(e.target.value);
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    props.onNewTodoData(todo);
    setTodos("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="write something.."
        value={todo}
        onChange={handelChange}
        name="todo"
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
}

export default AddTodo;
