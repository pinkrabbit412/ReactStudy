import { useState, useReducer, useRef, useCallback } from "react";

import "./App.css";
import TodoTemplate from "./Components/TodoTemplate";
import TodoAppFooter from "./Components/TodoAppFooter";
import TodoInsert from "./Components/TodoInsert";
import TodoList from "./Components/TodoList";

function createBulkTodos() {
	const array = [];
	for (let i = 1; i < 2501; i++) {
		array.push({
			index: i,
			text: `dummyTodo#${i}`,
			isTodoChecked: false,
		});
	}
	return array;
}

function todoReducer(todo_data, action) {
	switch (action.command) {
		case "INSERT":
			return todo_data.concat(action.todo);
		case "REMOVE":
			return todo_data.filter((todo) => todo.index !== action.target_index);
		case "TOGGLE":
			return todo_data.map((todo) =>
				todo.index === action.target_index
					? { ...todo, isTodoChecked: !todo.isTodoChecked }
					: todo
			);
		default:
			return todo_data;
	}
}

const App = () => {
	//const [todo_data, setTodoData] = useState(createBulkTodos);
	//const next_index = useRef(2501);

	/*
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
  */
	/*const whenTodoCheckboxClicked = useCallback((target_index) => {
		setTodoData((todo_data) =>
			todo_data.map((todo) =>
				todo.index === target_index
					? { ...todo, isTodoChecked: !todo.isTodoChecked }
					: todo
			)
		);
	}, []);

	const whenTodoInserted = useCallback((text) => {
		const todo = {
			index: next_index.current,
			text,
			isTodoChecked: false,
		};
		setTodoData((todo_data) => todo_data.concat(todo));
		next_index.current++;
	}, []);

	const whenTodoRemoveButtonClicked = useCallback((target_index) => {
		setTodoData((todo_data) =>
			todo_data.filter((todo) => todo.index !== target_index)
		);
	}, []);
	
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
	*/

	// useReducer를 사용한 가독성 및 성능 최적화
	const [todo_data, dispatch] = useReducer(
		todoReducer,
		undefined,
		createBulkTodos
	);
	const next_index = useRef(2501);

	const whenTodoInserted = useCallback((text) => {
		const todo = {
			index: next_index.current,
			text,
			isTodoChecked: false,
		};
		dispatch({ command: "INSERT", todo });
		next_index.current++;
	}, []);

	const whenTodoRemoveButtonClicked = useCallback((target_index) => {
		dispatch({ command: "REMOVE", target_index });
	}, []);

	const whenTodoCheckboxClicked = useCallback((target_index) => {
		dispatch({ command: "TOGGLE", target_index });
	}, []);

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
