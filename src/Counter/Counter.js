import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    console.log("Constuctor");
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return <div>Counter = {0}</div>;
  }
}

export default Counter;
