import React, { Component } from "react";

class RefExample extends Component {
    input = React.createRef();

    whenTargetFocused = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <>
            <input ref={(this.input)} />
            </>
        );
    }
}

export default RefExample;