import React from "react";
import Todo from "./Todo";

function Todos(props) {
  let { todos } = props;

  let getData = (data) => {
    props.onDeleteData(data);
  };

  return (
    <section className="d-flex align-items-center justify-content-center">
      {todos &&
        todos.map((x) => {
          return <Todo todo={x} key={x.id} deleteData={getData} />;
        })}
    </section>
  );
}

export default Todos;
