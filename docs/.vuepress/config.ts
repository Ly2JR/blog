import { defineUserConfig } from "@vuepress/cli";
import { DefaultThemeOptions } from "@vuepress/theme-default";
import {navbar,sidebar} from './configs'

const isProd=process.env.NODE_ENV==='production'

export default defineUserConfig<DefaultThemeOptions>({
    base:'/',
    head:[
      [
        'link',{
          rel:'icon',
          type:'image/png',
          sizes:'16x16',
          href:`/images/icons/favicon-16x16.png`
        }
      ],
      [
        'link',{
          rel:'icon',
          type:'image/png',
          sizes:'32x32',
          href:`/images/icons/favicon-32x32.png`
        }
      ],
      [
        'link',{
          rel:'manifest',
          href:'/manifest.webmanifest'
        }
      ],
      [
        'meta',{
          name:'application-name',
          content:'TGL2 Blog'
        }
      ],
      [
        'meta',{
          name:'apple-mobile-web-app-title',
          content:'TGL2 Blog'
        }
      ],
      [
        'meta',{
          name:'apple-mobile-web-app-status-bar-style',
          content:'black'
        }
      ],
      [
        'link',{
          rel:'apple-touch-icon',
          href:`/images/icons/apple-touch-icon.png`,
        }
      ],
      [
        'link',{
          rel:'mask-icon',
          href:'/images/icons/safari-pinned-tab.svg',
          color:'#3eaf7c'
        }
      ],
      [
        'meta',{
          name:'msapplication-TileColor',
          content:'#3eaf7c'
        }
      ],
      [
        'meta',{
          name:'theme-color',
          content:'#3eaf7c'
        }
      ]
    ],

    //站点层级语言环境配置
    locales: {
      '/': {
        lang: 'en-US',
        title: 'TGL2 Blog',
        description: 'Daily record',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '乌龙茶有点甜·博客',
        description: '日常记录...',
      },
    },
    
    themeConfig:{

        /**
         * logo
         */
        logo:"/images/favious.png",

        docsDir:'docs',

        //主题层级语言配置
        locales: {
            /**
             * 英语资源
             * 默认的
             */
            '/': {

              navbar:navbar.en,

              selectLanguageName: 'English', 
              selectLanguageAriaLabel:"Languages",
              selectLanguageText:'Languages',

              sidebar:sidebar.en,

              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
            /**
             * 中文语言配置
             */
            '/zh/': {
              /**
               * 菜单
               */
              navbar:navbar.zh,

              /**
               * 多语navbar
               */
              selectLanguageName: '简体中文',
              selectLanguageAriaLabel:"选择语言",
              selectLanguageText:'选择语言',

              /**
               * 边注栏
               */
              sidebar:sidebar.zh,

              editLinkText:'在GitHub上编辑此页',
              lastUpdatedText:'上次更新',
              contributorsText:'贡献者',
             
              tip:'提示',
              warning:'注意',
              danger:'警告',

              notFound:[
                '这里什么都没有',
                '我们怎么到这来了？',
                '这是一个404页面',
                '看起来我们进入了错误的链接'
              ],

              backToHome:'返回首页',

              openInNewWindow:'在新窗口打开',
              toggleDarkMode:'切换夜间模式',
              toggleSidebar:'切换侧边栏',

              /**
               * Github
               */
              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
          },
    },
    plugins: [
      [
        '@vuepress/plugin-search',
        {
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
      [
        '@vuepress/plugin-pwa',{
          skipWaiting:true
        }
      ],
      [
        '@vuepress/plugin-pwa-popup',{
          locales:{
            '/':{
              message:'New content is available.',
              buttonText:'Refresh'
            },
            '/zh/':{
              message:'发现新内容可用',
              buttonText:'刷新'
            }
          }
        }
      ]
     ],
});