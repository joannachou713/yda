import React, { Component } from "react";
import ExploreTheme from "../Components/explore/ExploreTheme";
import ExploreTab from "../Components/explore/ExploreTab";
import { Tabs, Tab } from "react-bootstrap";
import ThemeSite from "../Components/home/ThemeSite";

class Explore extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    categories: [
      {
        eventKey: "career",
        name: "職場體驗",
        icon: "/imgs/icons/categories/職場體驗.png",
        description: (
          <div>
            開拓青年多元職場體驗機會，以協助青年在教育過程中培養多元就業能力。
            <br />
            結合公部門、私部門及第三部門的力量，辦理各項多元職場體驗專案，並整合於RICH職場體驗網，
            <br />
            共同為在學青年提供優質的職場體驗機會，供其累積職涯歷練經驗，為未來進入職場增加能量。
          </div>
        ),
        themesites: [
          {
            title: "RICH 職涯體驗網",
            imgPath: "/imgs/icons/themes/RICH.png",
            url: "https://rich.yda.gov.tw/",
          },
        ],
        activities: [
          {
            title: "大專生公部門見習",
            imgPath: "/imgs/temp.jpg",
            date: "下學期(4~5月)、暑假(7~8月)、上學期(10~11月)",
            badges: ["職場體驗", "見習活動"],
            signup: true,
          },
          {
            title: "經濟自立青年工讀計畫",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["職場體驗", "見習活動"],
            signup: true,
          },
          {
            title: "青年創業家見習",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["職場體驗", "見習活動"],
            signup: true,
          },
          {
            title: "青年暑期社區職場體驗",
            imgPath: "/imgs/temp.jpg",
            date: "2021-07-12 ~ 2021-08-26，共計1.5個月",
            badges: ["職場體驗", "見習活動"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "society",
        name: "社會參與",
        icon: "/imgs/icons/categories/社會參與.png",
        description: (
          <div>
            為促進青年對公共事務參與的熱情，提升青年研議公共政策之能力，
            <br />
            設立青年政策論壇、舉辦論壇主持人才培訓，
            <br />
            共同協助本署推動審議民主，以利民主深化與落實。
          </div>
        ),
        themesites: [
          {
            title: "青年好政",
            imgPath: "/imgs/icons/themes/青年好政.png",
            url: "https://www.youthhub.tw/",
          },
          {
            title: "青年社區參與行動",
            imgPath: "/imgs/icons/themes/青年社區參與行動.png",
            url: "https://act.ydachangemaker.tw/",
          },
        ],
        activities: [
          {
            title: "青年好政系列活動",
            imgPath: "/imgs/temp.jpg",
            date: "7~9月",
            badges: ["社會參與", "講座演講"],
            signup: true,
          },
          {
            title: "青年事務法人",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["社會參與"],
            signup: true,
          },
          {
            title: "超暖青年 - 國際、偏鄉、青銀行動計畫",
            imgPath: "/imgs/temp.jpg",
            date: "11月前",
            badges: ["社會參與"],
            signup: true,
          },
          {
            title: "青年公共參與補助：獎勵補助作業要點",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["社會參與", "補助計畫"],
            signup: true,
          },
          {
            title: "超牆記者",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["社會參與"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "overseas",
        name: "海外計畫",
        icon: "/imgs/icons/categories/海外計畫.png",
        description: (
          <div>
            為鼓勵青年參與深度國際體驗，協助青年開拓視野、增廣見聞、探索自我，
            <br />
            補助青年創意海外服務提案、獎勵傑出海外志工服務團隊。
          </div>
        ),
        themesites: [
          {
            title: "Young 飛",
            imgPath: "/imgs/icons/themes/young飛.png",
            url: "http://youthaction.org.tw/",
          },
          {
            title: "青年海外和平志工團",
            imgPath: "/imgs/icons/themes/青年海外和平工作團.png",
            url: "https://yopc.yda.gov.tw/ch/index.php",
          },
          {
            title: "全球青年趨勢論壇",
            imgPath: "/imgs/icons/themes/全球青年趨勢論壇.png",
            url: "https://iyouth.youthhub.tw/2019ypp/",
          },
          {
            title: "iYouth 青年國際圓夢平台",
            imgPath: "/imgs/icons/themes/iYouth.png",
            url: "https://iyouth.youthhub.tw/index.php",
          },
        ],
        activities: [
          {
            title: "人生啟航 i 飛翔",
            imgPath: "/imgs/temp.jpg",
            date: "2021-06-01 ~ 2021-11-15",
            badges: ["海外計畫", "補助計畫", "多人組隊"],
            signup: true,
          },
          {
            title: "青年國際參與行動地圖",
            imgPath: "/imgs/temp.jpg",
            date: "6 ~ 8月",
            badges: ["海外計畫", "補助計畫"],
            signup: true,
          },
          {
            title: "全球青年趨勢論壇",
            imgPath: "/imgs/temp.jpg",
            date: "2021-11-09 ~ 2021-11.10",
            badges: ["生涯輔導"],
            signup: true,
          },
          {
            title: "大專校院職涯輔導種子教師培訓",
            imgPath: "/imgs/temp.jpg",
            date: "4 ~ 10月",
            badges: ["生涯輔導", "培力活動", "講座演講"],
            signup: true,
          },
          {
            title: "大專校院推動職涯輔導補助計畫",
            imgPath: "/imgs/temp.jpg",
            date: "2021.01.01 ~ 2021.11.15",
            badges: ["生涯輔導", "補助計畫"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "volunteer",
        name: "志工服務",
        icon: "/imgs/icons/categories/志工服務.png",
        description: (
          <div>
            整合縣市政府、民間團體及學校等資源，
            <br />
            並鏈結國內青年社會創新服務團隊，共同推動志願服務，
            <br />
            舉辦績優團隊競賽表揚，引動下一波青年社會運動。
          </div>
        ),
        themesites: [
          {
            title: "青年教育志工",
            imgPath: "/imgs/icons/themes/青年教育志工＿績優團隊全國競賽.png",
            url: "https://youthvolunteer.yda.gov.tw/",
          },
        ],
        activities: [
          {
            title: "青年志工自組團隊",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["志工服務", "多人團隊"],
            signup: true,
          },
          {
            title: "績優團隊全國競賽",
            imgPath: "/imgs/temp.jpg",
            date: "每年3 ~ 4月",
            badges: ["志工服務", "計畫競賽", "獎金"],
            signup: true,
          },
          {
            title: "教育業務志願服務獎勵辦法",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["志工服務", "獎金"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "travel",
        name: "壯遊體驗",
        icon: "/imgs/icons/categories/壯遊體驗.png",
        description: (
          <div>
            透過與在地非營利組織及大專校院合作以非營利之方式設置各地青年壯遊點，建置優質青年旅遊環境。
            <br />
            鼓勵青年認識鄉土、行遍臺灣，培養對這塊土地的熱情與關懷。
          </div>
        ),
        themesites: [
          {
            title: "壯遊體驗學習網",
            imgPath: "/imgs/icons/themes/壯遊體驗.png",
            url: "https://youthtravel.tw/",
          },
        ],
        activities: [
          {
            title: "大專校院學生國際體驗學習計畫",
            imgPath: "/imgs/temp.jpg",
            date: "2021-01-01 ~ 2021-11-16",
            badges: ["壯遊體驗", "補助計畫", "多人組隊"],
            signup: true,
          },
          {
            title: "壯遊體驗活動",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["壯遊體驗", "補助計畫"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "startup",
        name: "創業專區",
        icon: "/imgs/icons/categories/創業專區.png",
        description: (
          <div>
            為培育具創業家精神之人才，青年署結合學校育成輔導資源，
            <br />
            辦理創業座談會、培力工作坊以及創業團隊選拔等活動。
            <br />
            提供青年創業實驗場域與資源，協助青年學生實踐創業夢想。
          </div>
        ),
        themesites: [
          {
            title: "U-Start 創新創業",
            imgPath: "/imgs/icons/themes/Ustart.png",
            url: "https://ustart.yda.gov.tw/bin/home.php",
          },
          {
            title: "創創點火器",
            imgPath: "/imgs/icons/themes/創創點火器.png",
            url: "https://www.rockfuture.net/",
          },
          {
            title: "超牆青年",
            imgPath: "/imgs/icons/themes/超牆青年.png",
            url: "https://ydahub.tw/web/public/",
          },
        ],
        activities: [
          {
            title: "U-start原漾計畫",
            imgPath: "/imgs/temp.jpg",
            date:
              "第一階段 2021-04-15 ~ 2021-10-14\
            第二階段 2021-11-01 ~ 2022-10-31",
            badges: ["創業專區", "補助計畫", "計畫競賽"],
            signup: true,
          },
          {
            title: "創創座談沙龍",
            imgPath: "/imgs/temp.jpg",
            date: "3 ~ 10月，預計辦理6場次",
            badges: ["創業專區", "培力活動", "計畫競賽"],
            signup: true,
          },
          {
            title: "火箭人選秀會",
            imgPath: "/imgs/temp.jpg",
            date: "2021-08-22 ~ 2021-09-05",
            badges: ["創業專區", "補助計畫"],
            signup: true,
          },
          {
            title: "創創展示會",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["社會參與", "補助計畫"],
            signup: true,
          },
          {
            title: "火箭營工作坊",
            imgPath: "/imgs/temp.jpg",
            date: "4 ~ 10月，預計辦理3梯次",
            badges: ["社會參與"],
            signup: true,
          },
          {
            title: "創創相對論",
            imgPath: "/imgs/temp.jpg",
            date: "全年度活動",
            badges: ["社會參與"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "ability",
        name: "學生能力培養",
        icon: "/imgs/icons/categories/學生能力培養.png",
        description: (
          <div>
            為提升青年領導力與創意，向下紮根培養適性人才，
            <br />
            本署規劃兩針對在學青年的能力培養活動。
            <br />
            透過創意競賽與領導力培訓課程，激發青年潛能。
          </div>
        ),
        themesites: [
          {
            title: "智慧鐵人創意競賽",
            imgPath: "/imgs/icons/themes/智慧鐵人.png",
            url: "https://ironman.creativity.edu.tw/18th/",
          },
          {
            title: "大專女學生領導力培訓營",
            imgPath: "/imgs/icons/themes/大專女.png",
            url: "https://www.rockfuture.net/",
          },
        ],
        activities: [
          {
            title: "大專女學生領導力培訓營",
            imgPath: "/imgs/temp.jpg",
            date: "四天三夜，無特定時間",
            badges: ["學生能力培養", "培力活動", "講座演講"],
            signup: true,
          },
          {
            title: "智慧鐵人競賽",
            imgPath: "/imgs/temp.jpg",
            date: "每年10月至次年9月",
            badges: ["學生能力培養", "培力活動", "計畫競賽"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "ccounceling",
        name: "生涯輔導",
        icon: "/imgs/icons/categories/生涯輔導.png",
        description: (
          <div>
            為強化不同就學階段之青年學子之生涯發展，本署針對高中生、大專生以及為升學就業青年，
            <br />
            分別提供智慧鐵人、大專學生會輔導以及就業關懷輔助計畫，協助青年奠定人生基礎。
          </div>
        ),
        themesites: [
          {
            title: "U-Start 創新創業",
            imgPath: "/imgs/temp.jpg",
            url: "/imgs/icons/themes/Ustart.png",
          },
          {
            title: "創創點火器",
            imgPath: "/imgs/icons/themes/創創點火器.png",
            url: "https://www.rockfuture.net/",
          },
          {
            title: "超牆青年",
            imgPath: "/imgs/icons/themes/超牆青年.png",
            url: "https://ydahub.tw/web/public/",
          },
        ],
        activities: [
          {
            title: "民間團體推動職涯發展補助計畫",
            imgPath: "/imgs/temp.jpg",
            date: "2021-06-01 ~ 2021-11-15",
            badges: ["生涯輔導", "補助計畫"],
            signup: true,
          },
          {
            title: "全國大專校院職涯輔導主管會議",
            imgPath: "/imgs/temp.jpg",
            date: "2021-08-25 ~ 2021-08-26",
            badges: ["生涯輔導", "補助計畫"],
            signup: true,
          },
          {
            title: "大專校院職涯輔導成果評選",
            imgPath: "/imgs/temp.jpg",
            date: "6月公告名單",
            badges: ["生涯輔導"],
            signup: true,
          },
          {
            title: "大專校院職涯輔導種子教師培訓",
            imgPath: "/imgs/temp.jpg",
            date: "4 ~ 10月",
            badges: ["生涯輔導", "培力活動", "講座演講"],
            signup: true,
          },
          {
            title: "大專校院推動職涯輔導補助計畫",
            imgPath: "/imgs/temp.jpg",
            date: "2021-01-01 ~ 2021-11-15",
            badges: ["生涯輔導", "補助計畫"],
            signup: true,
          },
          {
            title: "大專學生會輔導",
            imgPath: "/imgs/temp.jpg",
            date: "2021-05-05",
            badges: ["生涯輔導", "獎金"],
            signup: true,
          },
          {
            title: "未升學未就業青少年關懷扶助",
            imgPath: "/imgs/temp.jpg",
            date: "2021-01-01 ~ 2021-12-31",
            badges: ["生涯輔導"],
            signup: true,
          },
        ],
      },
      {
        eventKey: "counceling",
        name: "青年諮詢",
        icon: "/imgs/icons/categories/青年諮詢.png",
        description: (
          <div>
            為廣納青年意見、了解青年需求、落實青年賦權，讓政策研擬更符合青年需求，
            <br />
            設立行政院青諮會以及青年署青諮小組，
            <br />
            以提升政策執行之可行性及有效性。
          </div>
        ),
        themesites: [
          {
            title: "青年諮詢小組",
            imgPath: "/imgs/icons/themes/行政院青諮會.png",
            url: "https://youthadvisory.yda.gov.tw/",
          },
        ],
        activities: [
          {
            title: "行政院青諮會",
            imgPath: "/imgs/temp.jpg",
            date: "每四個月召開會議一次",
            badges: ["青年諮詢", "培訓活動"],
            signup: true,
          },
          {
            title: "青年諮詢小組",
            imgPath: "/imgs/temp.jpg",
            date: "兩年",
            badges: ["青年諮詢", "培訓活動"],
            signup: true,
          },
        ],
      },
    ],
    previous: "職場體驗",
    current: "職場體驗",
  };

  componentDidMount = () => {
    let currentContent = {};
    this.state.categories.forEach((category) => {
      if (this.state.current === category.name) {
        currentContent = category;
      }
    });
    let img = document.querySelector(`#${currentContent.name} > img`);
    let triangle = document.querySelector(`#${currentContent.name} > div`);
    img.classList.add("active-explore-tab-img");
    triangle.classList.remove("hidden");
  };

  handleChangeCategory = (e) => {
    let { current } = this.state;
    this.setState({ current: e, previous: current }, () => {
      let currentContent = {};
      let previousContent = {};
      this.state.categories.forEach((category) => {
        if (this.state.current === category.name) {
          currentContent = category;
        }
        if (this.state.previous === category.name) {
          previousContent = category;
        }
      });

      let preimg = document.querySelector(`#${previousContent.name} > img`);
      let pretriangle = document.querySelector(
        `#${previousContent.name} > div`
      );
      preimg.classList.remove("active-explore-tab-img");
      pretriangle.classList.add("hidden");

      let img = document.querySelector(`#${currentContent.name} > img`);
      let triangle = document.querySelector(`#${currentContent.name} > div`);
      img.classList.add("active-explore-tab-img");
      triangle.classList.remove("hidden");
    });
  };

  renderCategories = (categories) => {
    return categories.map((category) => (
      <ExploreTheme
        title={category.name}
        imgPath={category.icon}
        onClick={this.handleChangeCategory}
      />
    ));
  };

  renderExploreTab = (current) => {
    let currentContent = {};
    this.state.categories.forEach((category) => {
      if (current === category.name) {
        currentContent = category;
      }
    });
    return (
      <ExploreTab
        title={currentContent.name}
        description={currentContent.description}
        activities={currentContent.activities}
      />
    );
  };

  renderThemes = (current) => {
    let themes = {};
    this.state.categories.forEach((category) => {
      if (current === category.name) {
        themes = category.themesites;
      }
    });

    return themes.map((site) => (
      <ThemeSite title={site.title} imgPath={site.imgPath} url={site.url} />
    ));
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <h3>探索活動</h3>
          <div className="d-flex justify-content-center mt-4">
            {this.renderCategories(this.state.categories)}
          </div>
          {this.renderExploreTab(this.state.current)}
        </div>

        <div className="mt-5 py-5">
          <h3 className="text-center mb-3 mt-5">相關主題網站</h3>
          <div className='mb-5 d-flex justify-content-center align-items-center'>{this.renderThemes(this.state.current)}</div>
        </div>
      </>
    );
  }
}

export default Explore;
