import { NavbarConfig } from "@vuepress/theme-default";

export const nvabarZh: NavbarConfig = [
  // {
  //   text: '指南',
  //   link: '/guide/readme.md',
  // },
  {
    text: '生活',
    children: [
      {
        text: '书籍',
        link: '/life/books/README.md',
      }, {
        text: '写作',
        link: '/life/literature/markdown/overview/philosophy.md'
      }, {
        text: '音乐',
        link: '/life/music/README.md',
      },
    ],
  },
  {
    text: '编程',
    children: [
      {
        text: 'C# Design Patterns',
        link: '/dotnet/design-pattern/README.md'
      }, {
        text: 'Abp.Zero',
        link: '/dotnet/abp.zero/README.md'
      }, {
        text: 'Xamarin.Forms',
        link: '/dotnet/xamarin.forms/README.md'
      }, {
        text: 'WPF',
        link: '/dotnet/wpf/README.md'
      }, {
        text: 'Web端',
        children: [{
          text: 'Vue',
          link: '/web/vue3/README.md',
        }, {
          text: 'JQuery',
          link: '/web/jquery/README.md'
        }]
      },
      {
        text: '数据库',
        children: [
          {
            text: 'SQL Server',
            link: '/database/sqlserver/README.md'
          }, {
            text: 'Oracle',
            link: '/database/oracle/installer.md'
          }, {
            text: 'MySql',
            link: '/database/mysql/README.md'
          }
        ]
      }, {
        text: '其他',
        children: [
          {
            text: 'MqttNet',
            link: '/dotnet/lot/mqtt/home/README.md'
          }
        ]
      }
    ],
  },
  {
    text: '杂货铺',
    children: [
      {
        text: 'C#面试宝典',
        link: '/dotnet/interview.md'
      }, {
        text: '梯云纵',
        link: '/varietystore/ladder/README.md'
      }, {
        text: 'CLI',
        link: '/varietystore/cli/github/README.md'
      }, {
        text: '数据交换格式',
        children: [
          {
            text: 'JSON',
            link: '/varietystore/data-exchange-format/json/README.md'
          }, {
            text: 'XML',
            link: '/varietystore/data-exchange-format/xml/README.md'
          }
        ]
      },
      {
        text: 'Office',
        children: [
          {
            text: 'Excel',
            link: '/varietystore/office/excel/README.md'
          }]
      },
      {
        text: 'ERP',
        children: [{
          text: '用友U8+',
          link: '/varietystore/yonyou/README.md'
        }]
      }
    ]
  },
];