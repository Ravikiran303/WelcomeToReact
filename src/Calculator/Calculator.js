import React, { Component } from "react";

export class Calculator extends Component {
  state = {
    a: 0,
    b: 0,
    showResult: false
  };
  setA = e => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false
    });
    console.log(e.target.value);
  };
  setB = e => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false
    });
    console.log(e.target.value);
  };
  setShowResult = () => {
    this.setState(prevState => {
      return { showResult: !prevState.showResult };
    });
  };
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <input className="Class A" onChange={this.setA} />
        <input className="Class B" onChange={this.setB} />
        <button onClick={this.setShowResult}>Submit</button>
        {this.state.showResult ? (
          <div>
            <br />
            {"Add : " + (this.state.a + this.state.b)}
            <br />
            {"Sub : " + (this.state.a - this.state.b)}
            <br />
            {"Mul : " + this.state.a * this.state.b}
            <br />
            {"Div : " + this.state.a / this.state.b}
            <br />
          </div>
        ) : (
          "click for result"
        )}
      </div>
    );
  }
}

export default Calculator;
