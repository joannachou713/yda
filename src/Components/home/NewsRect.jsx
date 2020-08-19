import React, { Component } from "react";

class NewsRect extends Component {
  switchBadge = (tag) => {
    let tagClass
    switch (tag) {
      case "新聞發布":
        tagClass = "info";
        break;
      case "招標公告":
        tagClass = "secondary";
        break;
      case "徵求人才":
        tagClass = "success";
        break;
      case "名單公告":
        tagClass = "warning";
        break;
      default:
        break;
    }
    return <span class={`badge badge-${tagClass}`}>{tag}</span>;
  };
  render() {
    return (
      <div className="d-flex justify-content-around pt-4">
        <div>{this.props.date}</div>
        <div>{this.switchBadge(this.props.tag)}</div>
        <div className="w-75">{this.props.title}</div>
        {/* <div>{this.props.url}</div> */}
      </div>
    );
  }
}

export default NewsRect;
