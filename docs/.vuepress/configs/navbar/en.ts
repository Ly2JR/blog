import { NavbarConfig } from '@vuepress/theme-default'

export const en:NavbarConfig=[
    {
        text:'guide',
        link:'/guide/readme.md'
      },
      {
        text: 'live',
        children: [
          {
            text: 'fish',
            link:''
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
            },{
              text:'Prism',
              link:'#'
            },{
              text:'materialdesigninxaml',
              link:'http://www.materialdesigninxaml.net/'
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
              link:'#'
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
        text: 'Variety Store',
        children: [
          {
            text: 'ERP',
            children:[{
              text:'yonyou U8+',
              link:'#'
            }]
          },
          {
            text:'DataBase',
            children:[{
              text:'Sql Server',
              link:'#'
            },
            {
              text:'MySql',
              link:'#'
            }]
          },
          {
            text: 'Github',
            link: '/',
            children:[]
          },
        ],
      },
]