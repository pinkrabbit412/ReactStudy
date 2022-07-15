import { Component } from "react";



class Counter extends Component {
  /*
    constructor(props) {
        super(props);
        // State의 초기값을 설정합니다.
        this.state = {
            count: 0,
            fixed_count: 7
        };
    }
    */

  state = {
    count: 0,
    fixed_count: 7
  };
  when_click() {
    //학습에 참고한 자료 URL: https://ko.reactjs.org/docs/faq-state.html
    console.log("when_click()이 호출되었습니다.");
    this.setState( (state) => { return {count: state.count + 1} });
  }
  render() {
    const { count, fixed_count } = this.state;
    return (
      <>
        <br />
        <br />
        <h1>
          ({count}, {fixed_count})
        </h1>
        {/*
        <button onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
        */}
        <button onClick={ this.when_click.bind(this) }>
          <p style={{ fontWeight: "bold" }}>+ 1</p>
        </button>
      </>
    );
  }
}

export default Counter;
