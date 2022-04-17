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
            link:'/zh/dotnet/design-pattern.md'
          },
          {
            text: 'Client Server',
            children:[{
              text:'WPF',
              link:'/zh/dotnet/wpf/README.md',
            }]
          },
          {
            text: 'Web',
            children:[{
              text:'Vue',
              link:'/zh/web/vue3/README.md',
            }]
          },
          {
            text:'DataBase',
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
        text: 'Variety Store',
        children: [
          {
            text:'MarkDown',
            children:[
              {
                text:'Latex',
                link:'/zh/varietystore/markdown/latex/README.md'
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
                link:'/zh/varietystore/cli/yarn/README.md'
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
              link:'/zh/varietystore/ladder/README.md'
            }]
          }
        ],
      },
]