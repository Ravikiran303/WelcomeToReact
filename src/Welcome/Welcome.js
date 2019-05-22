import React, { Component } from "react";

export class Welcome extends Component {
  render(props) {
    return <div>{this.props.name}</div>;
  }
}

export default Welcome;
