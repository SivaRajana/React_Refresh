import "./styles.css";
import { Component } from "react";

class Practice extends Component {
  render() {
    const { candidate } = this.props;
    return <h1>Hey {candidate}, this is just refresh project</h1>;
  }
}
export default Practice;
