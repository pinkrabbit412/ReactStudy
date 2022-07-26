import { Component } from 'react';

class ErrorCatch extends Component {
    state = {
        error: false
    };

    // LifeCycle Methon Expansion
    componentDidCatch(error, information) {
        this.setState({error: true});
        console.log({error, information});
    }

    render() {
        if (this.state.error)
            return(<div>오류가 발생했어요.</div>);
        return this.props.children;
    }
}

export default ErrorCatch;