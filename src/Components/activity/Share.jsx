import React, { Component } from "react";

class Share extends Component {
  render() {
    return (
      <div className="card" style={{width:'350px', height:'350px'}}>
        <img
          src={this.props.imgPath}
          class="card-img-top"
          alt="..."
          height="180"
        />
        <div class="card-body d-flex flex-column justify-content-between align-items-start">
          <h5>{this.props.name}</h5>
          <hr/>
          <div class="card-text">{this.props.description}</div> 
        </div>
      </div>
    );
  }
}

export default Share;
