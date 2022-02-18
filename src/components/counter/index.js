import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = {
    count: 0,
    counterDisplay: " Counter",
    styleCounter: "counter-text",
    bgcounter: "text-center"
  };

  incrementClick = () => {
    // console.log("Increment button clicked!");
    this.setState((prev) => {
      console.log(`The Value is ${prev.count}`);
      if (prev.count < 10) {
        return {
          count: prev.count + 1,
          counterDisplay: "Increasing...",
          styleCounter: "red-color",
          bgcounter: "bg-increase text-center"
        };
      }
    });
  };
  decrementClick = () => {
    console.log("Decrement button clicked");
    this.setState((prev) => {
      console.log(`The Value is ${prev.count}`);
      if (prev.count > 0) {
        return {
          count: prev.count - 1,
          counterDisplay: "Decreasing..",
          bgcounter: "bg-decrease text-center"
        };
      }
    });
  };

  render() {
    const { count, counterDisplay, styleCounter, bgcounter } = this.state;
    return (
      <div className={bgcounter}>
        <h1 className={styleCounter}>{counterDisplay}</h1>
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
