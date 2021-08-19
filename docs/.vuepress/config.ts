import { defineUserConfig } from "@vuepress/cli";
import { DefaultThemeOptions } from "@vuepress/theme-default";

export default defineUserConfig<DefaultThemeOptions>({
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Tg Blog',
        description: 'Blog...',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '乌龙茶有点甜·博客',
        description: '博客...',
      },
    },
    themeConfig:{
        locales: {
            '/': {
              selectLanguageName: 'English', 
              selectLanguageAriaLabel:"Languages",
              selectLanguageText:'Languages',
              navbar: [
                {
                  text:'guide',
                  link:'#'
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
                  text: 'Grocery store',
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
              ],
                // 你也可以直接将它设置为一个 URL
                repo: 'https://github.com/TgT982474256/blog',
                repoLabel:'Github'
            },
            '/zh/': {
              selectLanguageName: '简体中文',
              selectLanguageAriaLabel:"选择语言",
              selectLanguageText:'选择语言',
              navbar: [
                {
                  text:'指南',
                  link:'#'
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
              ],
              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
          },
    }
});