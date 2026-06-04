import React, { Component, useState } from "react";

/* Class Component */
class ClassComponent extends Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

/* Functional Component */
function FunctionalComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Functional Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

/* Main App */
function App() {
  return (
    <div>
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;