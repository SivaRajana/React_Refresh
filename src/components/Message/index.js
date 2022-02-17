import { Component } from "react";
import "./index.css";

class Message extends Component {
  state = { limit: true };
  render() {
    const danger_indication = () => {
      const { limit } = this.state;
      if (limit == false) {
        return <button>Safe</button>;
      }
      return <button> Danger </button>;
    };
    return (
      <div className="text-cen-msg">
        <h1> Message will be shown Here </h1>
        {danger_indication()}
      </div>
    );
  }
}

export default Message;
