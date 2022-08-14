import { useState, useCallback } from "react";

import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ( {whenTodoInserted} ) => {
	const [value, setValue] = useState("");

	const whenTodoTextInputValueChanged = useCallback(
		(event) => {
			setValue(event.target.value);
	}, []);

	const whenTodoSubmitEventOccured = useCallback(
		(event) => {
			whenTodoInserted(value);
			setValue("");
			event.preventDefault();
		},
		[whenTodoInserted, value]
	);

	return (
		<form className="TodoInsert" onSubmit={whenTodoSubmitEventOccured}>
			<input
				value={value}
				onChange={whenTodoTextInputValueChanged}
				placeholder="할 일 입력..."
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
};

export default TodoInsert;
