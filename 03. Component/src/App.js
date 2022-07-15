import "./App.css";
import Components from "./Components";
import Counter from "./Counter";
import { useState } from "react";
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
  const [message, set_message] = useState("");
  const [color, set_color] = useState("white");
  const loginClickEvent = () => set_message("반가워요!");
  const logoutClickEvent = () => set_message("안녕히 가세요.");
  return (
    <>
      <Components name="악동분홍토끼" favorite_number={7}>
        깡총!
      </Components>
      <Counter />
      <br />
      <button onClick={loginClickEvent}>로그인</button>
      <button onClick={logoutClickEvent}>로그아웃</button>
      <br />
      <button onClick={() => set_color("white")} style={{ color: "black", fontWeight: "bold" }}>
        하얀색(기본값)
      </button>
      <button onClick={() => set_color("#FCACD3")} style={{ color: "#FCACD3", fontWeight: "bold" }}>
        분홍색(#FCACD3)
      </button>
      <br />
      <br />
      <h1 style={{color}}>{message}</h1>
    </>
  );
};

export default App;
