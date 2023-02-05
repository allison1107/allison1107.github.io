function sortList(list) {
  let result = _.reverse(
    _.sortBy(Object.entries(list), [
      function (o) {
        return;
      },
    ])
  );
  return result;
}

// 工作經驗
let workExperence = {
  2022: [
    {
      date: '2020-Now',
      company: '中佑資訊',
      title: '工程師',
    },
  ],
  2020: [
    {
      date: '2018-2019',
      company: '有秀傳媒',
      title: '動畫師',
    },
  ],
  2019: [
    {
      date: '2018-2018',
      company: '崛影數位特效',
      title: 'VFX特效師',
    },
  ],
  2017: [
    {
      date: '2017-2017',
      company: 'HFOXCONN鴻海科技集團 人力資源服務總處',
      title: '實習、進行動畫專案製作',
    },
  ],
  2013: [
    {
      date: '2013-2013',
      company: 'Xanthus冉色斯動畫股份有限公司',
      title: '實習、擔任3D美術以及合成',
    },
  ],
};

let sortWorkExperence = sortList(workExperence);

for (const [key, value] of sortWorkExperence) {
  $('#work-exp-wrap').append(
    ` <li class="timeline-event">
      <span class="timeline-circle"></span>
         ${value
           .map((item) => {
             return `<div class="timeline-event-content job-wrap">
                  <b>${item.date}</b> ${item.company}
                  <br><span class="work-content"> ${item.title} </span>
                  </div>`;
           })
           .join('<br>')}
      <div class="timeline-event-date">${key}</div>
    </li>`
  );
}

let webProjectList = {
  2022: [
    {
      type: 'Web / H5',
      title: '體育遊戲 - 用戶端',
      work: '各版本畫面及功能製作、Api串接、WebSocket串接、訊源串接',
    },
    {
      type: 'Web',
      title: '體育遊戲 - 管理員端',
      work: '畫面及功能製作、Api串接',
    },

  ],
  2021: [
    {
      type: 'Flutter H5',
      title: '直播平台 - 用戶端 (復刻)',
      work: '畫面及功能製作、Api串接',
    },
    {
      type: 'H5',
      title: '直播平台 - 用戶端',
      work: '畫面及功能製作、Api串接、WebSocket串接、訊源串接',
    },
    {
      type: 'H5',
      title: '直播平台 - 主播端',
      work: '畫面及功能製作、Api串接',
    },
    {
      type: 'H5',
      title: '直播平台 - 管理員端',
      work: '畫面及功能製作、Api串接、WebSocket串接、訊源串接',
    },
  ],
  2020: [
    {
      type: 'H5',
      title: '實況聊天室 - 管理員端',
      work: '畫面及功能製作、Api串接、WebSocket串接、訊源串接',
    },
  ],
};

let sortWebProjectList = sortList(webProjectList);

for (const [key, value] of sortWebProjectList) {
  $('#web-project-wrap').append(
    `<li class="timeline-event">
      <span class="timeline-circle ${key}"></span>
         ${value
           .map((item) => {
             return `<div class="timeline-event-content job-wrap">
                  <b>[ ${item.type} ]</b> ${item.title} 
                  <br><span class="work-content"> ${item.work} </span>
                  </div>`;
           })
           .join('<br>')}
      <div class="timeline-event-date">${key}</div>
    </li>`
  );
}

let designProjectList = {
  2019: [
    {
      title: '鴻海科技集團',
      work: '2019集團簡介影片製作',
    },
    {
      title: '星球特派員',
      work: '模型製作、骨架綁定、後期合成',
    },
  ],
  2018: [
    {
      title: 'TURN UP轉轉南港 東區門戶顧景展',
      work: '展覽概念動畫製作',
    },
    {
      title: '2018臺灣燈會在嘉義 交通部觀光局',
      work: '概念影片製作',
    },
  ],
  2017: [
    {
      title: '基隆永恆文創園區《豬哥亮永恆時代展》',
      work: '人物骨架與模型綁定',
    },
    {
      title: 'Blay Station臺灣航班管家《Blay-航班資訊旅遊小幫手》App',
      work: '機場地圖製作',
    },
  ],
  2016: [
    {
      title: '2017臺灣燈會在雲林 交通部觀光局',
      work: '概念影片製作',
    },
  ],
  2015: [
    {
      title: '茉莉二手書店',
      work: '社會企業宣導動畫製作',
    },
    {
      title: '104年度新北市原住民表演藝術產業輔導計畫',
      work: '海報及網頁設計',
    },
    {
      title: '張恩光個人展覽《Alisu》',
      work: '合成及算圖',
    },
  ],
};

let sortDesignProjectList = sortList(designProjectList);

for (const [key, value] of sortDesignProjectList) {
  $('#design-project-wrap').append(
    `<li class="timeline-event">
      <span class="timeline-circle ${key}"></span>
         ${value
           .map((item) => {
             return `<div class="timeline-event-content job-wrap">
                  ${item.title} 
                  <br><span class="work-content"> ${item.work} </span>
                  </div>`;
           })
           .join('<br>')}
      <div class="timeline-event-date">${key}</div>
    </li>`
  );
}
