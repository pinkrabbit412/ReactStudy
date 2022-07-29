import { useState } from "react";
import "./App.css";
import Character from "./Character";
import Counter from "./Counter";

const App = () => {
  const [counter1_visible, setCounter1Visible] = useState(false);
  const [counter2_visible, setCounter2Visible] = useState(true);
  return (
    <>
      <div style={{ textAlign: "right" }}>
        {counter1_visible && <Counter />}
        <button onClick={() => setCounter1Visible(!counter1_visible)}>
          {counter1_visible ? "<Counter /> 숨기기" : "<Counter /> 보이기"}
        </button>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        {counter2_visible && <Character />}
        <button onClick={() => setCounter2Visible(!counter2_visible)}>
          {counter2_visible ? "<Character /> 숨기기" : "<Character /> 보이기"}
        </button>
      </div>
    </>
  );
};

export default App;
