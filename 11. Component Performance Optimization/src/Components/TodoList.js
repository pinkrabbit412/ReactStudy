import React, { useCallback } from "react";
import { List } from "react-virtualized";

import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todo_data, whenTodoRemoveButtonClicked, whenTodoCheckboxClicked }) => {
	/* // 기존 코드
	return (
		<div className="TodoList">
			{todo_data.map((todo) => (
				<TodoListItem
					todo={todo}
					key={todo.index}
					whenTodoRemoveButtonClicked={whenTodoRemoveButtonClicked}
                    whenTodoCheckboxClicked={whenTodoCheckboxClicked}
				/>
			))}
		</div>
	);
	*/

	// 변경 후 코드 (react-virtualized 사용)
	const rowRenderer = useCallback(({index, key, style}) => {
		const todo = todo_data[index];
		return(
			<TodoListItem
				todo={todo}
				key={key}
				whenTodoRemoveButtonClicked={whenTodoRemoveButtonClicked}
				whenTodoCheckboxClicked={whenTodoCheckboxClicked}
				style={style}
			>
			</TodoListItem>
		);
	}, [ todo_data, whenTodoRemoveButtonClicked, whenTodoCheckboxClicked ]);
	
	return(
		<List
			className="TodoList"
			width={1024}
			height={1024}
			rowCount={todo_data.length}
			rowHeight={57}
			rowRenderer={rowRenderer}
			list={todo_data}
			style={{outline: "none"}}>
		</List>
	);
};

export default React.memo(TodoList);
