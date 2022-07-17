import { Component, useState } from "react";

/*
class EventExample extends Component {
  state = {
    username: "",
    message: ""
  };
  constructor(props) {
    super(props);
    this.whenInputFieldChanged = this.whenInputFieldChanged.bind(this);
    this.whenConfirmButtonClicked = this.whenConfirmButtonClicked.bind(this);
    this.whenKeyPressed = this.whenKeyPressed.bind(this);
  }
  whenInputFieldChanged(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  whenConfirmButtonClicked() {
    alert(this.state.message + "\n - " + this.state.username);
    this.setState({ username: "", message: "" });
  }
  whenKeyPressed(event) {
    if (event.key === "Enter") {
        this.whenConfirmButtonClicked();
    }
  }
  render() {
    return (
      <>
        <h1>이벤트 예제</h1>
        <h2>이벤트 예제 소스코드가 호출됨.</h2>
        <br />
        아래에 사용자명과 메세지를 입력해주세요.
        <br />
        <input
          type={"text"}
          name={"username"}
          placeholder="사용자명 입력"
          value={this.state.username}
          onChange={this.whenInputFieldChanged}
        />&nbsp;
        <input
          type={"text"}
          name={"message"}
          placeholder="메세지 입력"
          value={this.state.message}
          onChange={this.whenInputFieldChanged}
          onKeyPress={this.whenKeyPressed}
        />
        &nbsp;
        <button
          onClick={this.whenConfirmButtonClicked}
        >
          확인
        </button>
      </>
    );
  }
}*/

const EventExample = () => {
    /*
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const whenUsernameChanged = (event) => setUsername(event.target.value);
    const whenMessageChanged = (event) => setMessage(event.target.value);
    */
    const [form, setForm] = useState({username: "", message: ""});
    const {username, message} = form;
    const whenValueChanged = (event) => {
        const nextForm = {
            ...form,
            [event.target.name]: event.target.value
        };
        setForm(nextForm);
    };
    const whenConfirmButtonClicked = () => {
        alert(message + "\n - " + username);
        setForm({username:  "", message: ""});
    };
    const whenKeyPressed = (event) => {
        if (event.key === "Enter") {
            whenConfirmButtonClicked();
        }
    };
    return (
        <>
          <h1>이벤트 예제</h1>
          <h2>이벤트 예제 소스코드가 호출됨.</h2>
          <br />
          아래에 사용자명과 메세지를 입력해주세요.
          <br />
          <input
            type={"text"}
            name={"username"}
            placeholder="사용자명 입력"
            value={username}
            onChange={whenValueChanged}
          />&nbsp;
          <input
            type={"text"}
            name={"message"}
            placeholder="메세지 입력"
            value={message}
            onChange={whenValueChanged}
            onKeyPress={whenKeyPressed}
          />
          &nbsp;
          <button
            onClick={whenConfirmButtonClicked}
          >
            확인
          </button>
        </>
      );
}

export default EventExample;
