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
            text: '书籍',
            link:'/zh/life/books/README.md',
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
              link:'/zh/web/vue3/README.md',
            },{
              text:'JQuery',
              link:'/zh/jquery/README.md',
            },{
              text:'TypeScript',
              link:'https://www.typescriptlang.org/'
            }]
          }
        ],
      },
      {
        text:'数据库',
        children:[
           {
             text:'Sql Server',
             link:'/zh/database/sqlserver/README.md'
           },
           {
             text:'MySql',
             link:'/'
           },
           {
             text:'Sqlite',
             link:'/'
           }
        ]
      },
      {
        text: '杂货铺',
        children: [
          {
            text: 'CLI',
            children:[
              {
                text:'Github',
                link:'/zh/varietystore/cli/github/README.md'
              },
              {
                text:'YARN',
                link:'/zh/varietystore/cli/yarn/README.md'
              },
              {
                text:'NPM',
                link:'/'
              }
            ]
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
            text: '梯子',
            children:[
              {
                text:'梯云纵',
                link:'/zh/varietystore/ladder/README.md'
              }
            ]
          },
        ]
      },
];