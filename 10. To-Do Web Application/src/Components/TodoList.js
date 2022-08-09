import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({todo_data}) => {
    return(
        <div className="TodoList">
            {todo_data.map((todo) => (
                <TodoListItem todo={todo} key={todo.index} />
            ))}
        </div>
    );
}

export default TodoList;