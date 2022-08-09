import {
    MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline
} from "react-icons/md"
import "./TodoListItem.scss"
import cn from "classnames"

const TodoListItem = ({todo}) => {
    const {text, isTodoChecked} = todo;
    return(
        <div className="TodoListItem">
            <div className={ cn( "checkBox", {isTodoChecked} ) }>
                {isTodoChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="removeTodo">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;