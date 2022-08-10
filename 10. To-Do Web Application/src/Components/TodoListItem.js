import {
	MdCheckBoxOutlineBlank,
	MdCheckBox,
	MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({
	todo,
	whenTodoRemoveButtonClicked,
	whenTodoCheckboxClicked,
}) => {
	const { index, text, isTodoChecked } = todo;
	return (
		<div className="TodoListItem">
			<div
				className={cn("checkBox", { isTodoChecked })}
				onClick={() => whenTodoCheckboxClicked(index)}
			>
				{isTodoChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div
				className="removeTodo"
				onClick={() => whenTodoRemoveButtonClicked(index)}
			>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
};

export default TodoListItem;
