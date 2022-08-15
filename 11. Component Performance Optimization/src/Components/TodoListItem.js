import React from "react";
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
	style
}) => {
	const { index, text, isTodoChecked } = todo;
	return (
		<div className="TodoListItem-Virtualized" style={style}>
			<div className={ cn( "TodoListItem", { pink: !(index % 2) } ) }>
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
		</div>
	);
};

export default React.memo(TodoListItem);
