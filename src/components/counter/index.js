import { Component } from "react";
import "./index.css";

class Counter extends Component {
  state = { count: "start", isEven: null };

  render() {
    const modify = (prev) => {
      const randNum = Math.ceil(Math.random() * 100);
      this.setState((prev) => {
        const x = randNum % 2 == 0 ? "Even" : "ODD";
        return { count: randNum, isEven: x };
      });
    };
    const { count, isEven } = this.state;
    return (
      <div>
        <h1>{isEven}</h1>
        <h2>{count} </h2>
        <button onClick={modify}>MODIFY Number</button>
      </div>
    );
  }
}

export default Counter;
