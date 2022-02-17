import "./styles.css";
import { Component } from "react";
import Counter from "./components/counter/index";
import Message from "./components/Message/index";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter For React Syntax Refresh</h1>
        <Counter />
        <Message />
      </div>
    );
  }
}
export default App;
