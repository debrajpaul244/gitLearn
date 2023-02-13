import React, { Component } from "react";

import { BsEmojiWink } from "react-icons/bs";

export default class Card extends Component {
  render() {
    let { title } = this.props;

    return (
      <>
        <div>
          <h1>{title}</h1>
          <h1>
            {" "}
            <BsEmojiWink />
          </h1>
        </div>
      </>
    );
  }
}
