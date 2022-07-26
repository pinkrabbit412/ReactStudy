import './App.css';
import {Component} from 'react';
import LifeCycleExample from './LifeCycleExample';
import ErrorCatch from './ErrorCatch';

function getRandomColor() {
  return ("#" + Math.floor(Math.random() * 0xffffff).toString(16));
}

class App extends Component {
  state = { color: "#ffffff" }

  whenGetRandomColorButtonClicked = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <>
      <ErrorCatch>
        <LifeCycleExample color={this.state.color} />
        <hr />
        <button onClick={this.whenGetRandomColorButtonClicked}>색깔 바꾸기 (무작위)</button>
      </ErrorCatch>
      </>
    );
  }
}

export default App;
