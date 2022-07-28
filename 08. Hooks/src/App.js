import { useState } from 'react';
import './App.css';
import Counter from './Counter';

const App = () => {
  const [counter1_visible, setCounter1Visible] = useState(true)
  return (
    <>
    <div style={{textAlign: "right"}}>
      {counter1_visible && <Counter />}
      <button onClick={() => setCounter1Visible(!counter1_visible)}>{counter1_visible ? "<Counter /> 숨기기" : "<Counter /> 보이기"}</button>
      </div>
    </>
  );
}

export default App;
