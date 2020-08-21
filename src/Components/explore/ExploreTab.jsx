import React, { Component } from "react";
import ActivityRect from "../home/ActivityRect";

class ExploreTab extends Component {
  renderActivities = () => {
    let tempActs = []; //this.props.activities
    console.log(Math.ceil(this.props.activities.length / 3));
    for (let i = 0; i < Math.ceil(this.props.activities.length / 3); i++) {
      console.log(i);
      let children = this.props.activities.slice(i * 3, i * 3 + 3);
      children = children.map((child) => (
        <ActivityRect
          title={child.title}
          imgPath={child.imgPath}
          date={child.date}
          badges={child.badges}
          signup={child.signup}
        />
      ));
      tempActs.push(<div className="d-flex my-5">{children}</div>)
    }
    return <div className="">{tempActs}</div>;
  };

  render() {
    return (
      <div className="py-5 px-4 explore-tab">
        <h4>{this.props.title}</h4>
        <div>{this.props.description}</div>
        <div className="d-flex">{this.renderActivities()}</div>
      </div>
    );
  }
}

export default ExploreTab;
