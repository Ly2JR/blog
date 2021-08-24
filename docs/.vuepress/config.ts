import { defineUserConfig } from "@vuepress/cli";
import { DefaultThemeOptions } from "@vuepress/theme-default";
import {navbar} from './configs'

export default defineUserConfig<DefaultThemeOptions>({
    base:'/',
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
              logo:'https://v2.vuepress.vuejs.org/images/hero.png',
              /**
               * 多语
               */
              selectLanguageName: 'English', 
              selectLanguageAriaLabel:"Languages",
              selectLanguageText:'Languages',
              /**
               * 菜单
               */
              navbar:navbar.en,
              /**
               * Github
               */
              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
            '/zh/': {
              /**
               * logo
               */
              logo:'https://v2.vuepress.vuejs.org/images/hero.png',
              /**
               * 多语navbar
               */
              selectLanguageName: '简体中文',
              selectLanguageAriaLabel:"选择语言",
              selectLanguageText:'选择语言',

              editLinkText:'在GitHub上编辑此页',
              lastUpdatedText:'上次更新',
              contributorsText:'贡献者',

              /**
               * 菜单
               */
              navbar:navbar.zh,
              /**
               * Github
               */
              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
          },
    }
});