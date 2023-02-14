import React from "react";
import Todo from "./Todo";

function Todos({ data }) {
  return (
    <>{data && data.map((todo, index) => <Todo key={index} data={todo} />)}</>
  );
}

export default Todos;
