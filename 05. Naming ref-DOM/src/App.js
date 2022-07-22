import "./App.css";
import { Component } from "react";

import Validation from "./Validation";
import RefExample from "./createRef";
import ScrollBox from "./ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        <Validation />
        <br />
        <RefExample />
        <hr />
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
      </>
    );
  }
}

export default App;
