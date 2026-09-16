// 依年份由新到舊排序
function sortList(list) {
  return Object.entries(list).sort(([a], [b]) => b - a);
}

function renderTimeline(selector, list, renderItem) {
  const html = sortList(list)
    .map(
      ([year, items]) => `<li class="timeline-event">
      <span class="timeline-circle"></span>
      ${items.map((item) => `<div class="timeline-event-content job-wrap">${renderItem(item)}</div>`).join('<br>')}
      <div class="timeline-event-date">${year}</div>
    </li>`
    )
    .join('');
  $(selector).html(html);
}

// 工作經驗
const workExperence = {
  2026: [
    {
      date: '2023-2026',
      company: '軒昂有限公司',
      title: '全端工程師',
    },
  ],
  2023: [
    {
      date: '2020-2023',
      company: '中佑資訊',
      title: '前端工程師',
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

renderTimeline(
  '#work-exp-wrap',
  workExperence,
  (item) => `<b>${item.date}</b> ${item.company}<br><span class="work-content">${item.title}</span>`
);

const webProjectList = {
  2026: [
    {
      type: 'Web',
      title: '線上抽卡&一番賞網站',
      work: '打造即時開籤與流暢抽卡動畫的沉浸式互動介面，並以透明機率機制確保抽獎過程公平可信。搭配完善的即時庫存扣減、線上虛擬賞盒與物流兌換系統，提供玩家無縫的一條龍抽獎體驗。',
    },
    {
      type: 'AWS / AI',
      title: 'AWS 架構的 AI 全自動內容站',
      work: '透過 AWS Route 53 完成自訂網域採購與 DNS 智慧代管，打造穩定、安全且高可用的全站基礎架構。結合大語言模型自動生成精準產業文章，並串接 CI/CD 流程實現從內容產出、靜態編譯到自動部署上線的一站式自動化營運。',
    },
    {
      type: 'Web',
      title: 'CRM 系統',
      work: '整合全方位顧客互動軌跡與交易數據，實現多管道客群的精準分群與自動化行銷追蹤。搭配視覺化商機管線（Pipeline）與業績分析看板，助團隊大幅提升銷售轉換率與顧客終身價值。',
    },
  ],
  2025: [
    {
      type: 'AI / Web',
      title: 'AI膚質檢測系統',
      work: '整合電腦視覺與深層影像分析技術，精準辨識毛孔、細紋、斑點與油水分佈等多項肌膚指標。系統能依據即時檢測數據生成個人化分析報告，並智慧推薦最適保養方案與產品組合。',
    },
  ],
  2024: [
    {
      type: 'Web / RWD',
      title: '企業官方網站製作',
      work: '打造兼具企業識別與流暢互動的高效能響應式（RWD）前台介面，確保跨裝置的最佳瀏覽體驗。同時導入直覺的視覺化後台編輯器，讓團隊免打程式碼即可輕鬆自訂排版、即時預覽並自主更新全站內容。',
    },
  ],
  2023: [
    {
      type: 'Vue.js',
      title: '前端開發與體驗優化',
      work: [
        '模組化架構：使用 Vue.js 建立高複用性 UI 元件，搭配 Pinia/Vuex 控管跨元件複雜狀態，提升代碼可維護性。',
        '效能與跨端適配：實作路由懶加載 (Lazy Loading) 與打包優化；落實 RWD 響應式設計，確保跨裝置瀏覽流暢度。',
      ],
    },
    {
      type: 'C# / .NET Core',
      title: '中繼層後端與 API 整合',
      work: [
        'API Gateway 串接：使用 ASP.NET Core 打造中繼服務，整合多方資料來源並統一輸出規格。',
        '資安與快取效能：導入 JWT/OAuth2 實作身分認證授權；針對高頻請求導入 Redis 快取，大幅減輕資料庫負擔。',
      ],
    },
    {
      type: 'CMS',
      title: 'CMS 後台管理系統',
      work: [
        '權限與營運工具：設計 RBAC 角色權限機制動態控管功能；開發富文本編輯、檔案上傳與完整 CRUD 營運功能。',
        '數據與日誌監控：串接資料庫產製營運視覺化報表，並建置系統 Log 查詢介面輔助內部查核。',
      ],
    },
    {
      type: 'App',
      title: '跨端 (App) 資料介接與同步',
      work: [
        'API 規格制定：使用 Swagger/OpenAPI 定義 RESTful API 規範，配合 App 端需求設計客製化接入點（如分頁、推播 Token）。',
        '多端資料一致性：維護 Web、CMS 與 App 間的資料流同步，確保多端業務邏輯與數據精準無落差。',
      ],
    },
  ],
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

renderTimeline(
  '#web-project-wrap',
  webProjectList,
  (item) =>
    `<b>[ ${item.type} ]</b> ${item.title}<br><span class="work-content">${[].concat(item.work).join('<br>')}</span>`
);

const designProjectList = {
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

renderTimeline(
  '#design-project-wrap',
  designProjectList,
  (item) => `${item.title}<br><span class="work-content">${item.work}</span>`
);
