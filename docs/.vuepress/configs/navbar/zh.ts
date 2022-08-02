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
        link: '/life/books',
      }, {
        text: '写作',
        link: '/life/literature/markdown/overview/philosophy.md'
      }, {
        text: '音乐',
        link: '/life/music',
      },
    ],
  },
  {
    text: '编程',
    children: [
      {
        text: 'C# Design Patterns',
        link: '/dotnet/design-pattern'
      }, {
        text: 'Abp.Zero',
        link: '/dotnet/abp.zero'
      }, {
        text: 'Xamarin.Forms',
        link: '/dotnet/xamarin.forms'
      }, {
        text: 'WPF',
        link: '/dotnet/wpf'
      }, {
        text: 'Web端',
        children: [{
          text: 'Vue',
          link: '/web/vue3',
        }, {
          text: 'JQuery',
          link: '/web/jquery'
        }]
      },
      {
        text: '数据库',
        children: [
          {
            text: 'SQL Server',
            link: '/database/sqlserver'
          }, {
            text: 'Oracle',
            link: '/database/oracle/installer.md'
          }, {
            text: 'MySql',
            link: '/database/mysql'
          }
        ]
      }, {
        text: '其他',
        children: [
          {
            text: 'MqttNet',
            link: '/dotnet/lot/mqtt/home'
          },
          {
            text:'PLC',
            link:'/dotnet/plc'
          },
          {
            text:'Robot',
            link:'/dotnet/robot'
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
        link: '/varietystore/ladder'
      }, {
        text: 'CLI',
        link: '/varietystore/cli/github'
      }, {
        text: '数据交换格式',
        children: [
          {
            text: 'JSON',
            link: '/varietystore/data-exchange-format/json'
          }, {
            text: 'XML',
            link: '/varietystore/data-exchange-format/xml'
          }
        ]
      },
      {
        text: 'Office',
        children: [
          {
            text: 'Excel',
            link: '/varietystore/office/excel'
          }]
      },
      {
        text: 'ERP',
        children: [{
          text: '用友U8+',
          link: '/varietystore/yonyou'
        }]
      }
    ]
  },
];