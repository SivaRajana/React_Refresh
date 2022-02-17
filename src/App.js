import "./styles.css";
import { Component } from "react";
import Counter from "./components/counter/index";

class Practice extends Component {
  render() {
    const { candidate } = this.props;
    return (
      <div>
        <h1>Hey {candidate}, this is just refresh project</h1>
        <Counter />
      </div>
    );
  }
}
export default Practice;
