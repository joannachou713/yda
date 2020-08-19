import React, { Component } from "react";

class ExploreTab extends Component {
  render() {
    return (
      <div className='py-5 px-4 explore-tab'>
        <h4>{this.props.title}</h4>
        <div>{this.props.description}</div>
      </div>
    );
  }
}

export default ExploreTab;
