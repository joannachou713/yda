import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import NewsTab from "../home/NewsTab";

class NewsArea extends Component {
  state = {
    allnews: this.props.allnews,
    newslist: "",
    biddinglist: "",
    recruitlist: "",
    namelist: "",
  };

  componentDidMount = () => {
    let newslist = this.props.allnews.filter((news) => news.tag == "新聞發布");
    let biddinglist = this.props.allnews.filter(
      (news) => news.tag == "招標公告"
    );
    let recruitlist = this.props.allnews.filter(
      (news) => news.tag == "徵求人才"
    );
    let namelist = this.props.allnews.filter((news) => news.tag == "名單公告");
    this.setState(
      {
        newslist: newslist,
        biddinglist: biddinglist,
        recruitlist: recruitlist,
        namelist: namelist,
      },
      console.log(newslist, biddinglist, recruitlist, namelist)
    );
  };

  render() {
    return (
      <div style={{ height: "517px" }}>
        <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
          <Tab eventKey="all" title="全部">
            <NewsTab newsList={this.state.allnews} />
          </Tab>
          <Tab eventKey="news" title="新聞發布">
            <NewsTab newsList={this.state.newslist} />
          </Tab>
          {this.props.type === "home" ? (
            <Tab eventKey="bidding" title="招標公告">
              <NewsTab newsList={this.state.biddinglist} />
            </Tab>
          ) : (
            ""
          )}
          {this.props.type === "home" ? (
            <Tab eventKey="recruit" title="徵求人才">
              <NewsTab newsList={this.state.recruitlist} />
            </Tab>
          ) : (
            ""
          )}
          <Tab eventKey="namelist" title="名單公告">
            <NewsTab newsList={this.state.namelist} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default NewsArea;
