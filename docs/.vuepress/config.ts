import { defineUserConfig } from "@vuepress/cli";
import { DefaultThemeOptions } from "@vuepress/theme-default";
import {navbar,sidebar} from './configs'

const isProd=process.env.NODE_ENV==='production'

export default defineUserConfig<DefaultThemeOptions>({
    base:'/',
    locales: {
      '/': {
        lang: 'en-US',
        title: 'Tg Blog',
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
        logo:'https://v2.vuepress.vuejs.org/images/hero.png',

        docsDir:'docs',

        locales: {
            '/': {

              navbar:navbar.en,

              selectLanguageName: 'English', 
              selectLanguageAriaLabel:"Languages",
              selectLanguageText:'Languages',

              sidebar:sidebar.en,

              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
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
    }
});