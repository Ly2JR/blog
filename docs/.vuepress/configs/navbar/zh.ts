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
          {
            text: '音乐',
            link:'/zh/life/music/README.md',
          },
        ],
      },
      {
        text: '编程',
        children: [
          {
            text: '.NET',
            link:'/zh/dotnet/design-pattern.md'
          },
          {
            text:'客户端',
            children:[
              {
                text:'WPF',
                link:'/zh/dotnet/wpf/README.md'
              }
            ]
          },
          {
            text: 'Web端',
            children:[{
              text:'Vue',
              link:'/zh/web/vue3/README.md',
            }]
          },
          {
            text:'数据库',
            children:[
               {
                 text:'SQL Server',
                 link:'/zh/database/sqlserver/README.md'
               }
            ]
          }
        ],
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