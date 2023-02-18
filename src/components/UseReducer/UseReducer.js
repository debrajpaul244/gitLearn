import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyDatas = [
  {
    id: uuidv4(),
    title: "html",
  },
  {
    id: uuidv4(),
    title: "css",
  },
];

const initialState = {
  datas: dummyDatas,
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const allData = [...state.datas, action.payload];
      toast.success("Book is Added");
      return {
        ...state,
        datas: allData,
        isModalOpen: true,
      };

    case "REMOVE":
      let filterDelete = [
        ...state.datas.filter((x) => x.id !== action.payload),
      ];
      toast.error("Book is Deleted");
      return {
        ...state,
        datas: filterDelete,
        isModalOpen: true,
      };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      title: bookName,
      id: uuidv4(),
    };

    dispatch({ type: "ADD", payload: newBook });

    setBookName("");
  };

  function handelDelete(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="write title..."
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>

      {state.datas.length >= 1 ? (
        state.datas.map((x) => (
          <article key={x.id}>
            <h2>{x.title}</h2>
            <button onClick={() => handelDelete(x.id)}>Delete</button>
          </article>
        ))
      ) : (
        <h4 style={{ color: "red" }}>Book list is Empty.</h4>
      )}

      <ToastContainer theme="colored" autoClose="500" />
    </>
  );
};

export default UseReducer;
