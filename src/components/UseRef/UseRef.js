import React, { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const userAgeRef = useRef();
  const userPasswordRef = useRef();

  const handelSubmit = (event) => {
    event.preventDefault();

    let user = {
      name: userNameRef.current.value,
      age: userAgeRef.current.value,
      password: userPasswordRef.current.value,
      id: new Date().getTime().toString(),
    };
    console.log(user);

    userNameRef.current.value = "";
    userAgeRef.current.value = "";
    userPasswordRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="name" ref={userNameRef} />
        <input type="text" placeholder="age" ref={userAgeRef} />
        <input type="password" placeholder="password" ref={userPasswordRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UseRef;
