import React, { Component } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsPlusLg, BsDashLg, BsFillTrashFill } from "react-icons/bs";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

   handelInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

    reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    let { count } = this.state;

    return (
      <>
        <div>
          <h1>Count: {count}</h1>
          <ButtonGroup>
            <Button onClick={this.handelInc} className="py-1 px-3" variant="primary">
              <BsPlusLg />
            </Button>
            <Button
              onClick={() => this.setState({ count: this.state.count - 1 })}
              className="py-1 px-3"
              variant="warning"
            >
              <BsDashLg />
            </Button>
            <Button
              onClick={this.reset.bind(this)}
              className="py-1 px-3"
              variant="danger"
            >
              <BsFillTrashFill />
            </Button>
          </ButtonGroup>
        </div>
      </>
    );
  }
}
