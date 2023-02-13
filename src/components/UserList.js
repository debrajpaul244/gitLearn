import React from "react";
import User from "./User";

import { v4 as uuidv4 } from "uuid";

const userData = [
  {
    name: "debraj pal",
    age: 22,
    phones: [{ home: 8777544623 }, { office: 8167758830 }],
  },
  {
    name: "debasis paul",
    age: 49,
    phones: [{ home: 9002202291 }, { office: 9800260280 }],
  },
  {
    name: "chhaya paul",
    age: 43,
    phones: [{ home: 6294850487 }, { office: 4578965213 }],
  },
];

const UserList = () => {
  return (
    <>
      <div className="User__list">
        {userData &&
          userData.map((x) => {
            return (
              <User key={uuidv4()} name={x.name} age={x.age} phone={x.phones} />
            );
          })}
      </div>
    </>
  );
};

export default UserList;
