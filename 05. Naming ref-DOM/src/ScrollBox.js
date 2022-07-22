import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 다음 코드와 의미가 같음:
        const scroll_height = this.box.scroll_height;
        const client_height = this.box.client_height;
    */
    this.box.scrollTop = scrollHeight - clientHeight;
  };
  render() {
    const outside_style = {
      border: "1px soild white",
      height: "25rem",
      width: "25rem",
      overflow: "auto",
      position: "relative",
    };
    const inside_style = {
      width: "100%",
      height: "35rem",
      background: "linear-gradient(#FCACD3, #F962AC)",
    };
    return (
      <>
        <div
          style={outside_style}
          ref={(ref) => {this.box = ref}}
        >
          <div style={inside_style} />
        </div>
      </>
    );
  }
}

export default ScrollBox;
