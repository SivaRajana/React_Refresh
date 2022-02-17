import { Component } from "react";
import "./index.css";

class Message extends Component {
  state = { limit_exceeded: true };

  render() {
    const { limit_exceeded } = this.state;
    let danger_indication;
    if (limit_exceeded == false) {
      danger_indication = <button>Safe</button>;
    } else {
      danger_indication = <button> Danger </button>;
    }
    return (
      <div className="text-cen-msg">
        <h1> Message will be shown Here </h1>
        {danger_indication}
      </div>
    );
  }
}

export default Message;
