import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer full-width">
          <div className="container">
            <div className="d-flex justify-content-around align-items-center py-5 w-100 float-left">
              <div>青年署簡介</div>
              <div>活動時間軸</div>
              <div>探索活動</div>
              <div>活動報名</div>
              <div>最新消息</div>
              <div>青年重大政策</div>
              <div>法令規章</div>
              <div>出版品及下載</div>
              <div>政府公開資訊</div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className='my-3'>
            政府網站資料開放宣告 ｜ 無障礙使用說明 ｜ 青年署在哪裡 ｜
            網站隱私權及資訊安全
          </div>

          <div className='mb-5'>
            建議瀏覽器：Chrome, Firefox, IE10(含)以上 ｜ 瀏覽人次： 4242922
            <br />
            版權所有 Copyright C 2013教育部青年發展署
            <br />
            100218台北市中正區徐州路5號14樓 電話：(02)7736-5111
            傳真：(02)2356-6307
          </div>

          <div className='mb-5'>
              <a href='https://www.edu.tw/'><img src='/imgs/logo_edu.png' height='40' className='mr-5'/></a>
              <a href='https://www.sa.gov.tw/wSite/mp?mp=11'><img src='/imgs/logo_sa.jpg' height='40' className='mr-5'/></a>
              <a href='https://www.k12ea.gov.tw/ap/index.aspx'><img src='/imgs/logo_k12ea.png' height='40' className='mr-5'/></a>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
