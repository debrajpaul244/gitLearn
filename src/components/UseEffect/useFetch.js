import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UseFetch = (url) => {
  const [datas, setDatas] = useState([]);
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
        setDatas(data);
      })
      .catch((err) => {
        setisError(err);
        toast.error(err.message);
        setDatas([]);
      });
  }, []);

  return {datas, loading, isError};
};

export default UseFetch;
