import React, { Component } from "react";
import ActivityRect from "../Components/home/ActivityRect";
import NewsArea from "../Components/home/NewsArea";
import ThemeSite from "../Components/home/ThemeSite";
import Service from "../Components/home/Service";

class Home extends Component {
  state = {
    activities: [
      {
        title: "創創行動者工作坊",
        imgPath: "/imgs/temp.jpg",
        date: "活動日期 2020-07-23 ~ 2020-07-31",
        badges: ["學生培訓"],
        signup: true,
      },
      {
        title: "青年志工自組團隊",
        imgPath: "/imgs/temp.jpg",
        date: "全年度活動，需在活動開始日前 45 天報名",
        badges: ["志工服務", "多人團隊"],
        signup: true,
      },
      {
        title: "教育業務志願服務獎勵辦法",
        imgPath: "/imgs/temp.jpg",
        date: "報名時間 2020-07-31 ~ 2020-09-30",
        badges: ["志工服務", "獎金補助"],
        signup: false,
      },
      {
        title: "大專校院推動職涯輔導補助計畫",
        imgPath: "/imgs/temp.jpg",
        date: "報名時間 2020-09-25 ~ 2020-10-31",
        badges: ["職涯補助", "補助計畫"],
        signup: false,
      },
      {
        title: "大專校院推動職涯輔導補助計畫",
        imgPath: "/imgs/temp.jpg",
        date: "報名時間 2020-09-25 ~ 2020-10-31",
        badges: ["職涯補助", "補助計畫"],
        signup: false,
      },
      {
        title: "大專校院推動職涯輔導補助計畫",
        imgPath: "/imgs/temp.jpg",
        date: "報名時間 2020-09-25 ~ 2020-10-31",
        badges: ["職涯補助", "補助計畫"],
        signup: false,
      },
      {
        title: "大專校院推動職涯輔導補助計畫",
        imgPath: "/imgs/temp.jpg",
        date: "報名時間 2020-09-25 ~ 2020-10-31",
        badges: ["職涯補助", "補助計畫"],
        signup: false,
      },
    ],
    allnews: [
      {
        date: "2020-07-20",
        tag: "名單公告",
        title: "名單公告名單公告1",
        url: "--",
      },
      { date: "2020-07-20", tag: "名單公告", title: "這是假標題2", url: "--" },
      {
        date: "2020-07-20",
        tag: "徵求人才",
        title: "這是假徵求人才徵求人才標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "這是新布新聞發布假標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "招標公告",
        title: "這是招標公告假標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "這是假標題新聞發布",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "名單公告",
        title: "這是假標題名單公告名單公告名單公告名單公告",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "這是新聞發布新聞發布假標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "新聞發布新聞發布新聞發布",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "新聞發布新聞發布新聞發布新聞發布",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "徵求人才",
        title: "這是假標題徵求人才徵求人才",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "名單公告",
        title: "名單公告名單公告名單公告名單公告名單公告",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "徵求人才",
        title: "這是假徵求人才標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "新聞發布",
        title: "這是假新聞發布新聞發布新聞發布新聞發布標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "招標公告",
        title: "這是假招標公告標題",
        url: "--",
      },
      {
        date: "2020-07-20",
        tag: "招標公告",
        title: "這招標公告招標公告是假標題",
        url: "--",
      },
    ],
    themesites: [
      [
        {
          title: "RICH 職涯體驗網",
          imgPath: "/imgs/icons/themes/RICH.png",
          url: "https://rich.yda.gov.tw/",
        },
        {
          title: "青年海外和平志工團",
          imgPath: "/imgs/icons/themes/青年海外和平工作團.png",
          url: "https://yopc.yda.gov.tw/ch/index.php",
        },
        {
          title: "iYouth 青年國際圓夢平台",
          imgPath: "/imgs/icons/themes/iYouth.png",
          url: "https://iyouth.youthhub.tw/index.php",
        },
        {
          title: "青年資源讚",
          imgPath: "/imgs/icons/themes/青年資源讚.png",
          url: "https://youth-resources.yda.gov.tw/",
        },
        {
          title: "U-Start 創新創業",
          imgPath: "/imgs/icons/themes/Ustart.png",
          url: "https://ustart.yda.gov.tw/bin/home.php",
        },
        {
          title: "壯遊體驗學習網",
          imgPath: "/imgs/icons/themes/壯遊體驗.png",
          url: "https://youthtravel.tw/",
        },
      ],
      [
        {
          title: "青年好政",
          imgPath: "/imgs/icons/themes/青年好政.png",
          url: "https://www.youthhub.tw/",
        },
        {
          title: "青年海外和平志工團",
          imgPath: "/imgs/icons/themes/青年海外和平工作團.png",
          url: "https://yopc.yda.gov.tw/ch/index.php",
        },
        {
          title: "青年職涯輔導資訊平台",
          imgPath: "/imgs/icons/themes/青年職涯輔導資訊平台.png",
          url: "https://mycareer.yda.gov.tw/",
        },
        {
          title: "青年諮詢小組",
          imgPath: "/imgs/icons/themes/行政院青諮會.png",
          url: "https://youthadvisory.yda.gov.tw/",
        },
        {
          title: "超牆青年",
          imgPath: "/imgs/icons/themes/超牆青年.png",
          url: "https://ydahub.tw/web/public/",
        },
        {
          title: "智慧鐵人創意競賽",
          imgPath: "/imgs/icons/themes/智慧鐵人.png",
          url: "https://ironman.creativity.edu.tw/18th/",
        },
      ],
    ],
  };

  renderActivities = (activities) => {
    return (
      <div className="d-flex w-100 activity-list mt-5">
        {activities.map((act) => {
          return (
            <ActivityRect
              title={act.title}
              imgPath={act.imgPath}
              date={act.date}
              badges={act.badges}
              signup={act.signup}
              className="activity-rect-home"
            />
          );
        })}
      </div>
    );
  };

  renderThemes = (siteList) => {
    return (
      <div className="d-flex justify-content-between align-items-center my-4">
        {siteList.map((site) => (
          <ThemeSite title={site.title} imgPath={site.imgPath} url={site.url} />
        ))}
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* start carousel */}
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/imgs/card1.png"
                  class="d-block w-100"
                  alt="..."
                  height="400"
                />
                <div className="d-flex carousel-title justify-content-between align-items-center p-4">
                  <div>
                    <h4>青年志工自組團隊等你報名！</h4>
                    <div>
                      我的青春，志己作主！想服務就服務！暑假出隊改為全年度！
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-normal">了解更多</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="/imgs/card2.png"
                  class="d-block w-100"
                  alt="..."
                  height="400"
                />
                <div className="d-flex carousel-title justify-content-between align-items-center p-4">
                  <div>
                    <h4>Title2</h4>
                    <div>
                      我的青春，志己作主！想服務就服務！暑假出隊改為全年度！
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-normal">了解更多</button>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="/imgs/card3.png"
                  class="d-block w-100"
                  alt="..."
                  height="400"
                />
                <div className="d-flex carousel-title justify-content-between align-items-center p-4">
                  <div>
                    <h4>Title3</h4>
                    <div>
                      我的青春，志己作主！想服務就服務！暑假出隊改為全年度！
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-normal">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          {/* end carousel */}

          {/* Activities List */}
          <div id="activities" className="">
            <h3>活動報名與預告</h3>
            {this.renderActivities(this.state.activities)}
          </div>
        </div>
        {/* Exploration */}
        <div className="exploration d-flex flex-column justify-content-center align-items-center py-5">
          <img src='/imgs/icons/explore.png'/>
          <h3>探索其他活動！</h3>
          <a href="/explore" className="btn btn-normal mt-3">
            立即前往
          </a>
        </div>

        {/* News */}
        <div className="bg-grey">
        <div className="container pt-5 mb-5">
          <h3 className="my-4">最新消息</h3>
          <NewsArea allnews={this.state.allnews} type='home'/>
        </div>
        </div>
        {/* Theme Sites */}
        <div className="mt-5 py-5">
          <div className="container">
            <h3>主題網站</h3>
            <div>
              {this.renderThemes(this.state.themesites[0])}
              {this.renderThemes(this.state.themesites[1])}
            </div>

            <div className="d-flex justify-content-around align-items-center py-5">
              <Service title="青年重大政策" imgPath="/imgs/icons/services/青年重大政策.png" />
              <Service title="法令規章" imgPath="/imgs/icons/services/法令規章.png" />
              <Service title="出版品及下載" imgPath="/imgs/icons/services/出版品及下載.png" />
              <Service title="政府公開資訊" imgPath="/imgs/icons/services/政府公開資訊.png" />
            </div>
          </div>
        </div>

        {/* Services */}

        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Home;
