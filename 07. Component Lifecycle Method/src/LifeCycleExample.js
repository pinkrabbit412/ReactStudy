import { Component } from 'react';

class LifeCycleExample extends Component {
    state = {
        number: 0,
        color: null,
    }
    target_ref = null;

    constructor(props) {
        super(props);
        console.log("호출됨: 생성자");
    }

    // LifeCycle Method Expansion
    static getDerivedStateFromProps(next_props, previous_state) {
        console.log("호출됨: getDerivedStateFromProps()");
        if (next_props.color !== previous_state.color) {
            return { color: next_props.color };
        }
        return null;
    }

    // LifeCycle Method Expansion
    componentDidMount() {
        console.log("호출됨: componentDidMount()");
    }

    // LifeCycle Method Expansion
    shouldComponentUpdate(next_props, next_state) {
        console.log("호출됨: shouldComponentUpdate()", next_props, next_state);
        return next_state.number % 10 !== 4;  // 마지막 자리가 4면(False) 리렌더링하지 않음
    }

    // LifeCycle Method Expansion
    componentWillUnmount() {
        console.log("호출됨: componentWillUnmount()");
    }

    whenPlus1ButtonClicked = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // LifeCycle Method Expansion
    getSnapshotBeforeUpdate(previous_props, previous_state) {
        console.log("호출됨: getSnapshotBeforeUpdate()");
        if(previous_props.color !== this.props.color) {
            return this.target_ref.style.color;
        }
        return null;
    }

    // LifeCycle Method Expansion
    componentDidUpdate(previous_props, previous_state, snapshot) {
        console.log("호출됨: componentDidUpdate()");
        if (snapshot) {
            console.log("업데이트 전의 색상은 다음과 같음: ", snapshot);
        }
    }

    render() {
        console.log("페이지가 렌더링됨");
        const style = { color: this.props.color, fontSize: "5rem" };
        return (
        <>
            {/* this.props.missing.value - 이 줄은 오류를 발생시키는 줄임 */}
            <h1 style={style} ref={(ref) => this.target_ref=ref}>
                {this.state.number}
            </h1>
            <p>16진수 색깔 코드: {this.state.color}</p>
            <button onClick={this.whenPlus1ButtonClicked}>+1</button>
        </>
        );
    }
}

export default LifeCycleExample;