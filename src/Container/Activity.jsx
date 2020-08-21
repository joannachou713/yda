import React, { Component } from "react";
import NewsArea from '../Components/home/NewsArea'

class Activity extends Component {
    state = {
        title: '青年志工自組團隊',
        visual: '/imgs/temp.jpg',
        description:<div>教育部青年發展署 (以下簡稱本署) 為鼓勵青年參與教育志工服務，引導青年結合所學，<br/>
        發揮志願服務的影響力，以實際行動關懷社會，特訂定本服務計畫。於評估服務需求及<br/>
        活動安全、整合資源，研提具可行性及學習性之服務方案，每個服務方案至少服務十二小時。</div>,
        targetDescription: '團隊人數須為6人以上，每一位青年以參加兩個團隊為限。',
        date: '全年度活動',
        contact: {
            name: '黃小姐',
            phone: '02-1234-5678',
            mail:'12345678@mail.yda.gov.tw',
            time:'每周一至周五 上午9點至下午6點',
        },
        allnews: [],
    }
  render() {
    return (
      <>
        <div className="container">
          <h3>{this.state.title}</h3>
        </div>
        <div className="full-width visual">
          {/* <img src={this.state.visual}/> */}
          <div>
            前往主題網站
            <br />
            <b>看更多報名資訊</b>
            <button>立即前往</button>
          </div>
        </div>
        <div>
          <h4>什麼是{this.state.title}？</h4>
          {this.state.description}
        </div>

        <div className='full-width bg-light'>
          <h4>我們正在找</h4>
          <span>{this.state.targetDescription}</span>
          {/* {this.renderTargetIcons()} */}
        </div>

        <div className='full-width bg-light'>
          <h4>活動期程</h4>
          <span>活動時間：{this.state.date}</span>
        </div>

        <div className="container">
          <div className="d-flex">
            {/* 相關附件 */}
            <div className="col-6">
              <h4>相關附件</h4>
              {/* <div>{this.renderAttachments()}</div> */}
            </div>
            {/* 填入活動聯絡人 */}
            <div className="col-6">
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

          {/* 最新消息 */}
          <div>
            <h4>最新消息</h4>
            <NewsArea allnews={this.state.allnews} />
          </div>
        </div>
      </>
    );
  }
}

export default Activity;
