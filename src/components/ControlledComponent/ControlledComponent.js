import React, { useState } from "react";

const ControlledComponent = () => {
  let [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  let { username, email, password } = user;

  let handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(user);

    setUser({ username: "", email: "", password: "" });
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <div>
          <input
            name="username"
            value={username}
            type="text"
            placeholder="username"
            onChange={handelChange}
          />
        </div>

        <div>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="email"
            onChange={handelChange}
          />
        </div>
        <div>
          <input
            value={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={handelChange}
          />
        </div>
        <button type="submit">Join Now</button>
      </form>
    </>
  );
};

export default ControlledComponent;
