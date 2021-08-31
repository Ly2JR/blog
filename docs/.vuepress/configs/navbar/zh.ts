import { NavbarConfig } from "@vuepress/theme-default";

export const zh:NavbarConfig=[
    {
        text:'指南',
        link:'/guide/readme.md',
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
              link:'#'
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
        text: '杂货铺',
        children: [
          {
            text: 'Excel',
            children:[{
              text:'考勤统计示例',
              link:'/zh/varietystore/excel.md'
            },
            {
              text:'函数',
              link:'/zh/varietystore/excelfun.md'
            }]
          },
          {
            text: 'ERP',
            children:[{
              text:'用友 U8+',
              link:'#'
            }]
          },
          {
            text:'数据库',
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
          },
        ],
      },
];