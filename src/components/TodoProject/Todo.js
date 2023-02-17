import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Todo(props) {
  let { title, desc, id } = props.todo;
  let [isDelete, setIsDelete] = useState(false);

  let handelDelete = (id) => {
    props.deleteData(id);
    setIsDelete(true);

    toast.error("Delet Successfully");
    // toast.error("Todo was Delete");
  };

  return (
    <>
      <article id={id} className="card shadow rounded w-25 p-3 mt-5 mx-3">
        <h2>{title}</h2>
        <p>{desc}</p>
        <button
          className="btn btn-danger w-25"
          onClick={() => handelDelete(id)}
        >
          Delete
        </button>
      </article>
      {isDelete && (
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

export default Todo;
