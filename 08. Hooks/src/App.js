import { useState } from "react";
import "./App.css";
import CalcAverage from "./CalcAverage";
import Character from "./Character";
import Counter from "./Counter";

const App = () => {
  const [counter1_visible, setCounter1Visible] = useState(false);
  const [character_visible, setCharacterVisible] = useState(false);
  const [CalcAverage_visible, setCalcAverageVisible] = useState(true);
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
        {character_visible && <Character />}
        <button onClick={() => setCharacterVisible(!character_visible)}>
          {character_visible ? "<Character /> 숨기기" : "<Character /> 보이기"}
        </button>
      </div>
      <hr />
      <div style={{ textAlign: "right" }}>
        {CalcAverage_visible && <CalcAverage />}
        <button onClick={() => setCalcAverageVisible(!CalcAverage_visible)}>
          {CalcAverage_visible ? "<CalcAverage /> 숨기기" : "<CalcAverage /> 보이기"}
        </button>
      </div>
    </>
  );
};

export default App;
