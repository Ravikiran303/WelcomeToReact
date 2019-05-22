import React from "react";
import Welcome from "./Welcome/Welcome";
import Calculator from "./Calculator/Calculator";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Calculator />
      <br />
      <Counter />
    </div>
  );
}

export default App;
