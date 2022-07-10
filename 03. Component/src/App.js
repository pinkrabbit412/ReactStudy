import './App.css';
import Components from './Components';
//import {Component} from 'react';


/*
function App() {
  return (
    <>
    </>
  );
}


// #1. 클래스형 컴포넌트
class App extends Component {
  render() {
    return (
      <>
      <div className='react'>Hello!</div>
      </>
    );
  }
}


// #2. 모듈 불러오기
const App = () => {
  return <Components />;
};

// #3. props
const App = () => {
  return <Components name="악동분홍토끼" />
};

*/

// #4. children
const App = () => {
  return <Components name="악동분홍토끼">깡총!</Components>;
};

export default App;
