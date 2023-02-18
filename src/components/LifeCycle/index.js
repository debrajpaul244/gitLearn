import React, { Component } from "react";

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    console.log("cronstructor");

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handelIncrement() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        {console.log("rendering..")}
        <h1>Count: {this.state.count}</h1>

        <button onClick={this.handelIncrement.bind(this)}>Increment</button>
      </>
    );
  }
}
