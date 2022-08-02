import { Component } from 'react';

import './App.css';
import CSSModule from './CSSModule';
import SASSComponent from './SASSComponent';
import StyledComponent from './styledComponent';

class App extends Component {
  render() {
    return (
    <>
      <SASSComponent />
      <CSSModule />
      <StyledComponent />
    </>
    );
  }
}

export default App;
