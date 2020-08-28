import React, { Component } from "react";
import NewsArea from "../Components/home/NewsArea";
import Service from "../Components/home/Service";
import Share from "../Components/activity/Share";
import Photo from "../Components/activity/Photo";

class Activity extends Component {
  state = {
    currenState: "活動介紹",
    title: "青年志工自組團隊",
    visual: "/imgs/活動主視覺/志工自組.png",
    description: (
      <div className="text-center">
        教育部青年發展署 (以下簡稱本署)
        為鼓勵青年參與教育志工服務，引導青年結合所學，
        <br />
        發揮志願服務的影響力，以實際行動關懷社會，特訂定本服務計畫。於評估服務需求及
        <br />
        活動安全、整合資源，研提具可行性及學習性之服務方案，每個服務方案至少服務十二小時。
      </div>
    ),
    targetDescription: "團隊人數須為6人以上，每一位青年以參加兩個團隊為限。",
    targets: ["18-35青年", "高級中等以上學校", "社會團體或財團法人",],
    date: "全年度活動",
    contact: {
      name: "黃小姐",
      phone: "02-1234-5678",
      mail: "12345678@mail.yda.gov.tw",
      time: "每周一至周五 上午9點至下午6點",
    },
    allnews: [
      {
        date: "2020-07-20",
        tag: "名單公告",
        title: "名單公告名單公告1",
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
    ],
    attachments: [
      {
        name: "附件一＿獎勵青年自組團隊參與志工行動計畫",
        route: "/imgs/temp.jpg",
      },
    ],
    faq: [
      {
        title: "一、如何登入系統報名活動？",
        content: (
          <div>
            點選「註冊」進入會員管理系統申請帳號，
            <br />
            再登入網站點選要報名的活動資訊。
          </div>
        ),
      },
      {
        title: "二、無法登入會員？",
        content: (
          <div>
            若您要加入會員、忘記密碼等相關帳密問題須請您電洽【研培中心：03－5302255
            分機5153】
            <br />
            並請您與客服人員說明您的帳號狀態以協助您將此問題排除。
          </div>
        ),
      },
      {
        title: "三、是否有操作說明資料？",
        content: (
          <div>
            目前青年教育志工網站有提供志工手冊，
            <br />
            放置於「登入」內有詳盡的圖文解說，歡迎您參閱。
          </div>
        ),
      },
      {
        title: "四、想查詢個人曾報名的活動，可以從哪裡看到？",
        content: (
          <div>
            登入「會員管理系統」，畫面進入後可查詢志工個人資訊(活動報名清冊、訓練課程與時數統
            <br />
            計、服務時數統計、得獎紀錄、活動成果統計個人資料更新、服務紀錄、志工心語分享、數位
            <br />
            學習平台等資料)。
          </div>
        ),
      },
      {
        title: "五、如果活動已經報名，但想要課程取消，要怎麼做？",
        content: (
          <div>
            1.若遇不可抗力因素(如天災)，我們將主動取消活動或課程，
            <br />
            將於網路及現場公告，並電話通知已報名的學員。
            <br />
            2.若因個人因素欲取消，請撥打電話或E-mail向承辦單位取消報名。
          </div>
        ),
      },
    ],
    shares: [
      {
        name: "黃同學",
        description:
          "心得文字心得文字心得文字心得文字心得card-text字心得文字心得文字心得文心得文字心得文字",
        imgPath: "/imgs/temp.jpg",
      },
      {
        name: "黃同學",
        description:
          "心得文字心得文字心得文字心得文字心得文字心得文字心card-textcard-text得文字",
        imgPath: "/imgs/temp.jpg",
      },
      {
        name: "黃同學",
        description:
          "心得文字心得文字心得文字心得文字心card-text字",
        imgPath: "/imgs/temp.jpg",
      },
    ],
    photos: [
      {name:'2020年',imgPath:'/imgs/temp.jpg'},
      {name:'2019年',imgPath:'/imgs/temp.jpg'},
      {name:'2018年',imgPath:'/imgs/temp.jpg'},
    ]
  };

  renderTargetIcons = (targets) => {
    return targets.map((target) => (
      <Service title={target} imgPath={`/imgs/icons/target/${target}.png`} />
    ));
  };

  renderAttachments = (attachments) => {
    return attachments.map((attachment) => (
      <a href={attachment.route} download>
        {attachment.name}
      </a>
    ));
  };

  renderFaq = (faqlist) => {
    return faqlist.map((faq) => (
      <div className="mt-5 middle-padding">
        <h4 className="mb-3">{faq.title}</h4>
        <div>{faq.content}</div>
      </div>
    ));
  };

  renderShares = (shares)=>{
    return shares.map((share)=><Share name={share.name} imgPath={share.imgPath} description={share.description}/>)
  }

  renderPhotos = (photos)=>{
    return photos.map((photo)=><Photo name={photo.name} imgPath={photo.imgPath}/>)
  }

  render() {
    const description = (
      <>
        <div className="wide-padding d-flex flex-column justify-content-center align-items-center">
          <h4>什麼是{this.state.title}？</h4>
          {this.state.description}
        </div>

        <div className="bg-grey wide-padding d-flex flex-column justify-content-center align-items-center">
          <h4>我們正在找</h4>
          <span>{this.state.targetDescription}</span>
          <div class="d-flex mt-4 justify-content-around align-items-center w-50">
            {this.renderTargetIcons(this.state.targets)}
          </div>
        </div>

        <div className="wide-padding  d-flex flex-column justify-content-center align-items-center">
          <h4>活動期程</h4>
          <span>活動時間：{this.state.date}</span>
        </div>

        <div className="bg-grey wide-padding">
          {/* 相關附件 */}
          <div className="container">
            <div className="row">
              <div className="col">
                <h4>相關附件</h4>
                <div>{this.renderAttachments(this.state.attachments)}</div>
              </div>
              {/* 填入活動聯絡人 */}
              <div className="col">
                <h4>活動聯絡人</h4>
                <div>
                  <div>{this.state.contact.name}</div>
                  <div>
                    電話：{this.state.contact.name}
                    <br />
                    Email：{this.state.contact.mail}
                    <br />
                    聯絡時間：{this.state.contact.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 前往報名 */}
        <div className="gosignact d-flex flex-column justify-content-center align-items-center py-5">
          <img src="/imgs/icons/我要報名.png" />
          <h3>前往報名</h3>
          <a href="/explore" className="btn btn-normal mt-3">
            立即前往
          </a>
        </div>
        <div className="act-moreinfo-block d-flex flex-column justify-content-center align-items-center">
          <h4>了解更多</h4>
          <div className="d-flex w-50 justify-content-around align-items-center mt-3">
            <div onClick={() => this.setState({ currenState: "歷屆分享" })}>
              <img className="act-moreinfo" src="/imgs/icons/歷屆分享.png" />
            </div>
            <div onClick={() => this.setState({ currenState: "活動 Q&A" })}>
              <img className="act-moreinfo" src="/imgs/icons/活動Q_A.png" />
            </div>
          </div>
        </div>

        {/* 最新消息 */}
        <div className="bg-grey">
          <div className="container wide-padding">
            <h4 className="mb-4">最新消息</h4>
            <NewsArea allnews={this.state.allnews} />
          </div>
        </div>
      </>
    );

    const share = (
      <div className="container wide-padding">
        <h4 className="text-center">學長姊分享</h4>
        <div className='middle-padding d-flex w-100 justify-content-between align-items-center'>{this.renderShares(this.state.shares)}</div>
        <h4 className="text-center mt-5">活動花絮</h4>
        <div className='middle-padding d-flex w-100 justify-content-between align-items-center'>{this.renderPhotos(this.state.photos)}</div>
      </div>
    );
    const faq = (
      <div className="container wide-padding">
        <h3 className="mt-5">活動 Q&A</h3>
        <div className="mb-5 mt-3">{this.renderFaq(this.state.faq)}</div>
      </div>
    );

    return (
      <>
        <div className="container py-5">
          <h3 className="">
            {this.state.title}
            <span
              className="bread"
              onClick={() => this.setState({ currenState: "活動介紹" })}
            >
              活動介紹
            </span>
            {this.state.currenState === "活動介紹" ? (
              ""
            ) : (
              <span>
                {" "}
                > <span className="bread">{this.state.currenState}</span>
              </span>
            )}
          </h3>
        </div>
        <div
          className="visual"
          style={{ background: `url("${this.state.visual}") no-repeat` }}
        >
          <div className="visual-cover w-100 h-100 d-flex flex-column align-items-start justify-content-center">
            <div className="container">
              <h3>前往主題網站</h3>

              <h3>看更多報名資訊</h3>
              <button className="btn btn-normal mt-3">立即前往</button>
            </div>
          </div>
        </div>

        {this.state.currenState === "活動介紹" ? description : ""}
        {this.state.currenState === "歷屆分享" ? share : ""}
        {this.state.currenState === "活動 Q&A" ? faq : ""}
      </>
    );
  }
}

export default Activity;
