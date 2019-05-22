import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    console.log("Constuctor");
    super(props);
    this.state = {
      counter: 0
    };
    this.Increment = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };
    this.Decrement = () => {
      this.setState({
        counter: this.state.counter - 1
      });
    };
  }
  componentDidMount() {
    console.log("Component did mount");
    console.log("----------------------");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component did Update");
    console.log("----------------------");
  }
  render() {
    console.log("Render");
    return (
      <div>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        Counter = {this.state.counter}
      </div>
    );
  }
}

export default Counter;
