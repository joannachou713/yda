import React, { Component } from "react";
import Pagination from "@material-ui/lab/Pagination";
import NewsRect from "../Components/NewsRect";

class NewsTab extends Component {
  state = {
    page: 1,
  };

  renderNewsRect = (newsList, page) => {
    let selectedList = Array.from(newsList).slice((page - 1) * 7, page * 7);
  //  selectedList = selectedList.length===7?selectedList:selectedList.push(Array(7-selectedList.length).fill([{date:' ',tag:' ', title:' ',url:' '}]))
    console.log(selectedList)
    return (
      <div className="tab-content">
        {Array.from(selectedList).map((news) => {
          return (
            <NewsRect
              date={news.date}
              tag={news.tag}
              title={news.title}
              url={news.url}
            />
          );
        })}
      </div>
    );
  };

  render() {
    const handlePagination = (event, value) => {
      console.log(value);
      this.setState({ page: value });
    };
    return (
      <div className="border">
        {this.renderNewsRect(this.props.newsList, this.state.page)}
        <Pagination
          className="d-flex justify-content-center align-items-center py-4"
          count={Math.ceil(this.props.newsList.length / 7)}
          variant="outlined"
          onChange={handlePagination}
        />
      </div>
    );
  }
}

export default NewsTab;
