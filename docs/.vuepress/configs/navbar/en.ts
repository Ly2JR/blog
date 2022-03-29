import { NavbarConfig } from '@vuepress/theme-default'

export const en:NavbarConfig=[
    {
        text:'Guide',
        link:'/guide/readme.md'
      },
      {
        text: 'Live',
        children: [
          {
            text: 'Books',
            link:'/'
          },
          {
            text: 'Music',
            link:'/'
          },
        ],
      },
      {
        text: 'Programming',
        children: [
          {
            text: '.NET',
            children:[{
              text:'ABP',
              link:'https://www.abp.io/'
            },{
              text:'WPF',
              link:'https://docs.microsoft.com/zh-cn/dotnet/desktop/wpf/getting-started/?view=netframeworkdesktop-4.8'
            }]
          },
          {
            text: 'Mobile',
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
              text:'Blazor',
              link:'https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/intro',
            }]
          },
          {
            text:'DataBase',
            children:[
              {
                  text:'SQL Server',
                  link:'/'            
              }
            ]
          }
        ],
      },
      {
        text: 'Variety Store',
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
                link:'https://yarnpkg.com/'
              }
            ]
          },
          {
            text: 'Data-Exchange-Format',
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
              text:'yonyouU8+',
              link:'/zh/varietystore/erp/yonyou/README.md'
            }]
          },
          {
            text: 'Ladder',
            children:[{
              text:'tiyunzong',
              link:'/varietystore/ladder/README.md'
            }]
          }
        ],
      },
]