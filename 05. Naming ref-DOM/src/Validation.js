import { Component } from "react";

class Validation extends Component {
  state = {
    access_code: "",
    clicked: false,
    validated: false,
  };
  whenValueChanged = (event) => {
    this.setState({ access_code: event.target.value });
  };
  whenConnectButtonClicked = () => {
    this.setState({
      clicked: true,
      validated: this.state.access_code === "0412",
    });
    this.input.focus();
  };
  render() {
    return (
      <>
        액세스 코드를 입력하십시오.
        <br />
        <input
          ref={(ref) => this.input=ref}
          type={"password"}
          value={this.state.access_code}
          onChange={this.whenValueChanged}
          className={this.state.clicked ? (this.state.validated ? "success" : "fail") : ""}
        ></input>
        &nbsp;
        <button onClick={this.whenConnectButtonClicked}>접속</button>
      </>
    );
  }
}

export default Validation;
