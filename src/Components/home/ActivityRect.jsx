import React, { Component } from "react";

class ActivityRect extends Component {
  renderBadge = (badges) => {
    if(badges)return badges.map((badge) => <span class="badge badge-secondary mr-3">{badge}</span>);
  };

  render() {
    return (
      <a href='/activity'><div className={`card ${this.props.className}`} style={{ width: "325px", opacity:`${this.props.visibility=='none'?0:1}` }} >
        <img
          src={this.props.imgPath}
          class="card-img-top"
          alt="..."
          height="250"
        />
        <div class="card-body d-flex flex-column justify-content-between align-items-start">
            <h5 class="card-title w-90">{this.props.title}</h5>
            <div class="card-text w-90">{this.props.date}</div> {/*活動日期*/}
            <div class="d-flex">{this.renderBadge(this.props.badges)}</div>
        </div>
      </div></a>
    );
  }
}

export default ActivityRect;
