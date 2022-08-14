import { useState, useRef, useCallback } from "react";

import "./App.css";
import TodoTemplate from "./Components/TodoTemplate";
import TodoAppFooter from "./Components/TodoAppFooter";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

const App = () => {
	const [todo_data, setTodoData] = useState([
		{
			index: 1,
			text: "리액트 기초 학습하기",
			isTodoChecked: true,
		},
		{
			index: 2,
			text: "컴포넌트 스타일링 해보기",
			isTodoChecked: true,
		},
		{
			index: 3,
			text: "리액트로 간단한 일정 관리 애플리케이션 만들어보기",
			isTodoChecked: false,
		},
	]);

	const next_index = useRef(4);

	const whenTodoCheckboxClicked = useCallback(
		(target_index) => {
			setTodoData(
				todo_data.map((todo) =>
					todo.index === target_index
						? { ...todo, isTodoChecked: !todo.isTodoChecked }
						: todo
				)
			);
		},
		[todo_data]
	);

	const whenTodoInserted = useCallback(
		(text) => {
			const todo = {
				index: next_index.current,
				text,
				isTodoChecked: false,
			};
			setTodoData(todo_data.concat(todo));
			next_index.current++;
		},
		[todo_data]
	);

	const whenTodoRemoveButtonClicked = useCallback(
		(target_index) => {
			setTodoData(
				todo_data.filter((todo) => todo.index !== target_index)
			);
		},
		[todo_data]
	);

	return (
		<div style={{ maxWidth: "1024px" }}>
			<TodoTemplate>
				<TodoInsert whenTodoInserted={whenTodoInserted} />
				<TodoList
					todo_data={todo_data}
					whenTodoRemoveButtonClicked={whenTodoRemoveButtonClicked}
					whenTodoCheckboxClicked={whenTodoCheckboxClicked}
				/>
			</TodoTemplate>
			<TodoAppFooter />
		</div>
	);
};

export default App;
