import React, { Component } from "react";

export default class EventHandeling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handelChange(e) {
    this.setState(
      {
        text: e.target.value,
      },
      () => console.log(this.state.text)
    );
  }

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Say Something.."
          onChange={this.handelChange.bind(this)}
        />
        <h1>{this.state.text}</h1>
      </>
    );
  }
}
