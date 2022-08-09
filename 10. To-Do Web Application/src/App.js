import { useState, useRef, useCallback } from 'react';

import './App.css';
import TodoTemplate from './Components/TodoTemplate';
import TodoAppFooter from './Components/TodoAppFooter';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';


const App = () => {
  const [todo_data, setTodoData] = useState([
    {
      index: 1,
      text: "리액트 기초 학습하기",
      isTodoChecked: true
    },
    {
      index: 2,
      text: "컴포넌트 스타일링 해보기",
      isTodoChecked: true
    },
    {
      index: 3,
      text: "리액트로 간단한 일정 관리 애플리케이션 만들어보기",
      isTodoChecked: false
    }
  ]);

  const next_id = useRef(4);

  const whenTodoInserted = useCallback(
    (text) => {
      const todo = {
        index: next_id.current,
        text,
        isTodoChecked: false
      };
      setTodoData(todo_data.concat(todo));
      next_id.current++;
    }
  ,[todo_data]);

  return(
    <div style={{maxWidth: "1024px"}}>
    <TodoTemplate>
      <TodoInsert whenTodoInserted={whenTodoInserted}/>
      <TodoList todo_data={todo_data} />
    </TodoTemplate>
    <TodoAppFooter />
    </div>
  );
}


export default App;
