import React, { Component } from "react";
import ExploreTheme from "../Components/explore/ExploreTheme";
import ExploreTab from "../Components/explore/ExploreTab";
import { Tabs, Tab } from "react-bootstrap";

class Explore extends Component {
  state = {
    categories: [
      {
        eventKey: "volunteer",
        name: "志工服務",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            整合縣市政府、民間團體及學校等資源，
            <br />
            並鏈結國內青年社會創新服務團隊，共同推動志願服務，
            <br />
            舉辦績優團隊競賽表揚，引動下一波青年社會運動。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "ccounceling",
        name: "生涯輔導",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            為強化不同就學階段之青年學子之生涯發展，本署針對高中生、大專生以及為升學就業青年，
            <br />
            分別提供智慧鐵人、大專學生會輔導以及就業關懷輔助計畫，協助青年奠定人生基礎。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "overseas",
        name: "海外計畫",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            為鼓勵青年參與深度國際體驗，協助青年開拓視野、增廣見聞、探索自我，
            <br />
            補助青年創意海外服務提案、獎勵傑出海外志工服務團隊。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "travel",
        name: "壯遊體驗",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            透過與在地非營利組織及大專校院合作以非營利之方式設置各地青年壯遊點，建置優質青年旅遊環境。
            <br />
            鼓勵青年認識鄉土、行遍臺灣，培養對這塊土地的熱情與關懷。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "society",
        name: "社會參與",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            為促進青年對公共事務參與的熱情，提升青年研議公共政策之能力，
            <br />
            設立青年政策論壇、舉辦論壇主持人才培訓，
            <br />
            共同協助本署推動審議民主，以利民主深化與落實。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "startup",
        name: "創業專區",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            為培育具創業家精神之人才，青年署結合學校育成輔導資源，
            <br />
            辦理創業座談會、培力工作坊以及創業團隊選拔等活動。
            <br />
            提供青年創業實驗場域與資源，協助青年學生實踐創業夢想。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "career",
        name: "職場體驗",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            開拓青年多元職場體驗機會，以協助青年在教育過程中培養多元就業能力。
            <br />
            結合公部門、私部門及第三部門的力量，辦理各項多元職場體驗專案，並整合於RICH職場體驗網，
            <br />
            共同為在學青年提供優質的職場體驗機會，供其累積職涯歷練經驗，為未來進入職場增加能量。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "counceling",
        name: "青年諮詢",
        icon: "/imgs/temp.jpg",
        description: (
          <div>
            為廣納青年意見、了解青年需求、落實青年賦權，讓政策研擬更符合青年需求，
            <br />
            設立行政院青諮會以及青年署青諮小組，
            <br />
            以提升政策執行之可行性及有效性。
          </div>
        ),
        activities: [{}],
      },
      {
        eventKey: "ability",
        name: "學生能力培養",
        icon: "/imgs/temp.jpg",
        description: "",
        activities: [{}],
      },
    ],
  };

  handleClick = () =>{
    
  }

  renderCategories = (categories) => {
    return categories.map((category) => (
      <Tab
        transition={false}
        eventKey={category.eventKey}
        title={<ExploreTheme title={category.name} imgPath={category.icon} onClick={this.hangleClick}/>}
      >
        <ExploreTab title={category.name} description={category.description} />
      </Tab>
    ));
  };
  render() {
    return (
      <div className="container mt-5">
        <h3>探索活動</h3>
        <div className="d-flex justify-content-between mt-4"></div>
        <Tabs defaultActiveKey="volunteer" id="uncontrolled-tab-example">
          {this.renderCategories(this.state.categories)}
        </Tabs>
      </div>
    );
  }
}

export default Explore;
