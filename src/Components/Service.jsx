import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img className='service-icon' src={this.props.imgPath} width="150" />
        <span className='mt-2'>{this.props.title}</span>
      </div>
    );
  }
}

export default Service;
