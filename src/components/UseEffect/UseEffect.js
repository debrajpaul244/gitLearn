import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Post from "./Post";
import UseFetch from "./useFetch";
const dataUrl = "https://jsonplaceholder.typicode.com/posts";

const UseEffectLearn = () => {
  const { datas, loading, isError } = UseFetch(dataUrl);

  return (
    <>
      {isError && <h2>{isError.message}</h2>}
      {datas && datas.map((x) => <Post key={x.id} {...x} />)}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="colored"
      />
    </>
  );
};

export default UseEffectLearn;
