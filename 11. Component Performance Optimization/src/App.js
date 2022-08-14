import { useState, useRef, useCallback } from "react";

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

const App = () => {
	const [todo_data, setTodoData] = useState(createBulkTodos);

	const next_index = useRef(2501);

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
};

export default App;
