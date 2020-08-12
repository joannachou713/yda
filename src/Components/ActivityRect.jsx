import React, { Component } from "react";

class ActivityRect extends Component {
  renderBadge = (badges) => {
    return badges.map((badge) => <span class="badge badge-secondary mr-3">{badge}</span>);
  };

  render() {
    return (
      <div class="card activity-rect" style={{ width: "18rem" }}>
        <img
          src={this.props.imgPath}
          class="card-img-top"
          alt="..."
          height="250"
        />
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title w-90">{this.props.title}</h5>
            <div class="card-text w-90">{this.props.date}</div>
            {this.renderBadge(this.props.badges)}
          </div>
          <div>
            <a href="#" className="btn btn-normal">
              了解更多
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityRect;
