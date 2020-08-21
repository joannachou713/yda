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
          className='activity-rect-explore'
        />
      ));
      tempActs.push(<div className="mb-4 w-100 d-flex justify-content-between align-items-center">{children}</div>)
    }
    return <div className='mt-5 w-100 d-flex flex-column justify-content-center align-items-center"'>{tempActs}</div>;
  };

  render() {
    return (
      <div className="pt-5 pb-3 px-4 explore-tab">
        <h4>{this.props.title}</h4>
        <div>{this.props.description}</div>
        {this.renderActivities()}
      </div>
    );
  }
}

export default ExploreTab;
