import { NavbarConfig } from "@vuepress/theme-default";

export const nvabarZh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '生活',
    children: [
      {
        text: '影院',
        link: '/',
      },
      {
        text: '音乐',
        link: '/',
      }, {
        text: '书籍',
        link: '/'
      }
    ],
  },
  {
    text: '编程',
    children: [
      {
        text: 'WPF',
        link: '/dotnet/wpf'
      },
      {
        text: 'MAUI',
        link: '#'
      },{
        text: 'ASP.NET',
        link: '#'
      },{
        text: 'Unity',
        link: '#'
      }]
  }
];