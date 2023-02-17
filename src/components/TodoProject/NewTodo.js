import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

function NewTodo(props) {
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
  });

  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handelChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTodo({ ...todo, [name]: value, id: uuidv4() });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    props.onData(todo);
    setIsSuccessMessage(true);
    toast.success("Todo was Added");
    setTodo({
      title: "",
      desc: "",
    });
  };
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="w-25 card shadow rounded p-4 m-auto mt-5"
      >
        <div>
          <label htmlFor="title" className="text-left">
            Title
          </label>
          <input
            name="title"
            value={todo.title}
            type="text"
            id="title"
            className="form-control mb-3"
            onChange={handelChange}
            required
          />
        </div>
        <div>
          <label htmlFor="desc" className="text-left">
            Description
          </label>
          <textarea
            name="desc"
            value={todo.desc}
            id="desc"
            rows="3"
            className="form-control mb-3"
            onChange={handelChange}
            required
          ></textarea>
        </div>
        <button className="btn btn-primary">Add Todo</button>
      </form>
      {isSuccessMessage && (
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="colored"
        />
      )}
    </>
  );
}

export default NewTodo;
