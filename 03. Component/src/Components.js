const Components = props => {
    const {name, children} = props;
    return (
        <>
        <div>컴포넌트가 호출되었습니다.</div>
        <br />
        <div>{name}님, 환영합니다.</div>
        <br />
        <div>{children}</div>
        </>
    )
};
Components.defaultProps = {
    name: "<이름>"
};

export default Components;