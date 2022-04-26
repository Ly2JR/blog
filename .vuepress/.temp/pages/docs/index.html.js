export const data = {
  "key": "v-147825fb",
  "path": "/docs/",
  "title": "主页",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "title": "主页",
    "actions": [
      {
        "text": "开始",
        "link": "/life/books/",
        "type": "primary"
      }
    ],
    "features": [
      {
        "title": "日常学习、生活记录",
        "details": "这是由VuePress搭建的博客"
      },
      {
        "title": ".Net",
        "details": ".NET Core、ABP"
      },
      {
        "title": "移动端",
        "details": "Kotlin,Xamarin,Maui、Uni-App..."
      },
      {
        "title": "前端",
        "details": "WPF、Vue、Blazor..."
      },
      {
        "title": "数据库",
        "details": "Sql Server..."
      },
      {
        "title": "杂货铺",
        "details": "很多好的开源的框架及解决方案，如ABP、Dapper、Quartz.Net、NLog.."
      }
    ],
    "footerHtml": true,
    "footer": "Copyright © 2021-现在 ilyl.life 版权所有 </br><a href=\"http://beian.miit.gov.cn\" target=\"_blank\">苏ICP备2021053735号-1</a>&nbsp;&nbsp;<img src=\"备案图标.png\" alt=\"公网备案\"/>&nbsp;&nbsp;<a href=\"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32118302000302\" target=\"_blank\">苏公网安备32118302000302号</a>"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "赞赏码",
      "slug": "赞赏码",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1650941659000,
    "contributors": [
      {
        "name": "Lyl",
        "email": "982474256@qq.com",
        "commits": 15
      },
      {
        "name": "luoyilei",
        "email": "982474256@qq.com",
        "commits": 2
      }
    ]
  },
  "filePathRelative": "docs/README.md"
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
