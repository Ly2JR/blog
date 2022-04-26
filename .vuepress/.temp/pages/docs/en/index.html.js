export const data = {
  "key": "v-09cd5ccb",
  "path": "/docs/en/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "Home",
    "actions": [
      {
        "text": "Quick Start ->",
        "link": "/en/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "Daily learning and life records",
        "details": "The Blog Built Using VurePress"
      },
      {
        "title": ".Net",
        "details": ".NET Core、WPF..."
      },
      {
        "title": "Mobile",
        "details": "Kotlin、Xamarin、Maui、Uni-App..."
      },
      {
        "title": "Web",
        "details": "Vue、Blazor..."
      },
      {
        "title": "DataBase",
        "details": "Sql Server..."
      },
      {
        "title": "Other",
        "details": "Many Open source framework in Github，e.g ABP、Dapper、Quartz.Net、NLog.."
      }
    ],
    "footerHtml": true,
    "footer": "Copyright © 2021-present ilyl.life All Rights Reserved. </br><a href=\"http://beian.miit.gov.cn\" target=\"_blank\">苏ICP备2021053735号-1</a>&nbsp;&nbsp;<img  src=\"备案图标.png\" alt=\"公网备案\"/>&nbsp;&nbsp;<a href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32118302000302\" target=\"_blank\">苏公网安备32118302000302号</a>"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Reward Code",
      "slug": "reward-code",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650941659000,
    "contributors": [
      {
        "name": "Lyl",
        "email": "982474256@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "docs/en/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
