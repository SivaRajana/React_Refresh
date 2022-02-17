import { Component } from "react";
import "./index.css";

class Message extends Component {
  state = { limit: true };

  danger_indication = () => {
    const { limit } = this.state;
    if (limit == false) {
      return <button>Safe</button>;
    } else {
      return <button> Danger </button>;
    }
  };

  render() {
    return (
      <div className="text-cen-msg">
        <h1> Message will be shown Here </h1>
        {this.danger_indication()}
      </div>
    );
  }
}

export default Message;
