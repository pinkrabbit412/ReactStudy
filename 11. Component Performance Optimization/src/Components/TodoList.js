import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todo_data, whenTodoRemoveButtonClicked, whenTodoCheckboxClicked }) => {
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
};

export default TodoList;
