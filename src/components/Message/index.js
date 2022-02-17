import { Component } from "react";
import "./index.css";

class Message extends Component {
  state = { limit: true };
  render() {
    const { limit } = this.state;
    return (
      <div className="text-cen-msg">
        <h1> Safe Level </h1>
        {limit && <p> Exceeding....</p>}
        {!limit && <p> not exceeding..don't worry....</p>}
      </div>
    );
  }
}

export default Message;
