import React, { Component } from "react";
import Home from "./Home";
import Login from "./Login";

export default class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isloggedIn: false,
    };
  }

  render() {
    return <>{this.state.isloggedIn ? <Home /> : <Login />}</>;
  }
}
