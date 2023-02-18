import React, { Component, createRef } from "react";

export default class CreateRef extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.userNameRef = createRef();
    this.passwordRef = createRef();
  }

  haldelSubmit = (event) => {
    event.preventDefault();
    let user = {
      name: this.userNameRef.current.value,
      password: this.passwordRef.current.value,
      id: new Date().getTime().toString(),
    };
    console.log(user);
    this.userNameRef.current.value = "";
    this.passwordRef.current.value = "";
  };

  render() {
    return (
      <>
        <form onSubmit={this.haldelSubmit}>
          <input type="text" placeholder="name" ref={this.userNameRef} />
          <input
            type="password"
            placeholder="password"
            ref={this.passwordRef}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
