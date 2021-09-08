import { NavbarConfig } from "@vuepress/theme-default";

export const zh:NavbarConfig=[
    {
        text:'指南',
        link:'/zh/guide/readme.md',
      },
      {
        text: '生活',
        children: [
          {
            text: '鱼',
            link:'/',
          },
        ],
      },
      {
        text: '编程',
        children: [
          {
            text: '.NET',
            children:[{
              text:'ABP',
              link:'https://www.abp.io/'
            },{
              text:'WPF',
              link:'https://docs.microsoft.com/zh-cn/dotnet/desktop/wpf/getting-started/?view=netframeworkdesktop-4.8'
            },{
              text:'Prism',
              link:'https://github.com/PrismLibrary/Prism'
            },{
              text:'materialdesigninxaml',
              link:'http://www.materialdesigninxaml.net/'
            }]
          },
          {
            text: '移动端',
            children:[{
              text:'kotlin',
              link:'https://kotlinlang.org/'
            },{
              text:'uni-app',
              link:'https://uniapp.dcloud.io/'
            },{
              text:'MAUI',
              link:'https://github.com/dotnet/maui'
            }]
          },
          {
            text: 'Web',
            children:[{
              text:'Vue',
              link:'https://cn.vuejs.org/',
            },{
              text:'Jquery',
              link:'https://jquery.com/',
            },{
              text:'TypeScript',
              link:'https://www.typescriptlang.org/'
            }]
          }
        ],
      },
      {
        text: '杂货铺',
        children: [
          {
            text:'数据库',
            children:[{
              text:'Sql Server',
              link:'/zh/database/sqlserver/README.md'
            },
            {
              text:'MySql',
              link:'/'
            }]
          },
          {
            text: 'Office',
            children:[
              {
                text:'Excel',
                link:'/zh/varietystore/office/excel/README.md'
              }]
          },
          {
            text: 'ERP',
            children:[{
              text:'用友U8+',
              link:'/zh/varietystore/erp/yonyou/README.md'
            }]
          },
          {
            text: '数据交换格式',
            children:[
              {
                text:'JSON',
                link:'/zh/varietystore/data-exchange-format/json/README.md'
              },
              {
                text:'XML',
                link:'/zh/varietystore/data-exchange-format/xml/README.md'
              }
            ]
          },
          {
            text: 'CLI',
            children:[
              {
                text:'Github',
                link:'/zh/varietystore/cli/github/README.md'
              },
              {
                text:'YARN',
                link:'/'
              },
              {
                text:'NPM',
                link:'/'
              }
            ]
          },
        ],
      },
];