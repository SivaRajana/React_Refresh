import { Component } from "react";
import "./index.css";

class Counter extends Component {
  incrementClick = () => {
    console.log("Increment button clicked!");
  };
  decrementClick = () => {
    console.log("Decrement button clicked");
  };

  render() {
    return (
      <div className="text-center">
        <h1>Counter</h1>
        <p>0</p>
        <div>
          <button onClick={this.incrementClick}> Increase </button>
          <button onClick={this.decrementClick}> Decrease </button>
        </div>
      </div>
    );
  }
}

export default Counter;
