import "./TodoTemplate.scss";

const TodoTemplate = ({children}) => {
    return(
        <div className="TodoTemplateWrapper">
            <div className="appTitle">일정 관리</div>
            <div className="contents">{children}</div>
        </div>
    );
};

export default TodoTemplate;