import React from "react";
import User from "./User";

function Users() {
  let user = { name: "debraj", id: "002" };

  return (
    <>
      <User data={user} />
    </>
  );
}

export default Users;
