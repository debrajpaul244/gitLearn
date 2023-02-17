import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Post from "./Post";
const url = "https://jsonplaceholder.typicode.com/posts/";

const UseEffectLearn = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(null);

  useEffect(() => {
    toast.success("Loading...");
    setIsLoading(true);
    setisError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Failed to fetch.");
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setPosts(data);
      })
      .catch((err) => {
        setisError(err);
        toast.error(err.message);
        setPosts([]);
      });
  }, []);

  return (
    <>
      {isError && <h2>{isError.message}</h2>}
      {posts && posts.map((x) => <Post key={x.id} {...x} />)}
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
