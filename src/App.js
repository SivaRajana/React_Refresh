import "./styles.css";
import { Component } from "react";
import Counter from "./components/counter/index";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter For React Syntax Refresh</h1>
        <Counter />
      </div>
    );
  }
}
export default App;
