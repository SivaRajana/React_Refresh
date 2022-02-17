import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: 0 };

  incrementClick = () => {
    // console.log("Increment button clicked!");
    this.setState((prev) => {
      console.log(`The Value is ${prev.count}`);
      return { count: prev.count + 1 };
    });
  };
  decrementClick = () => {
    console.log("Decrement button clicked");
    this.setState((prev) => {
      console.log(`The Value is ${prev.count}`);
      return { count: prev.count - 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div className="text-center">
        <h1>Counter</h1>
        <p className="counter-text">{count}</p>
        <div>
          <button onClick={this.incrementClick}> Increase </button>
          <button onClick={this.decrementClick}> Decrease </button>
        </div>
      </div>
    );
  }
}

export default Counter;
