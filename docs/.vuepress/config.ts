import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme, } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { nvabarZh,nvarbarEn, sidebarZh,sidebarEn,head } from './configs';
import { getDirname,path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import mathjax3 from 'markdown-it-mathjax3';              //支持latex
import markdownItFootnote from 'markdown-it-footnote';    //支持注脚
import markdownTaskList from 'markdown-it-task-lists';    //支持任务列表

const __dirname = getDirname(import.meta.url);
const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  base: '/',
  // extra tags in `<head>`
  head:head,
  //站点层级语言环境配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '乌龙茶有点甜·博客',
      description: 'NAS-Neverland',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Neverland',
      description: 'NAS',
    }
  },

  /**
   * 配置默认主题
   */
  theme: defaultTheme({
    /**
     * logo
     */
    logo: "favious.png",

    docsDir: 'docs',

    //主题层级语言配置
    locales: {
      // 中文语言配置
      '/': {
        /**
         * 菜单
         */
        navbar: nvabarZh,

        /**
         * 多语navbar
         */
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: "选择语言",
        selectLanguageText: '选择语言',

        /**
         * 边注栏
         */
        sidebar: sidebarZh,
        /**
         * 页元数据
         */
        editLinkText: '在GitHub上编辑此页',
        lastUpdatedText: '上次更新',
        contributors: false,
        contributorsText: '贡献者',
        /**
         * 自定义容器
         */
        tip: '提示',
        warning: '注意',
        danger: '警告',
        /**
         * 404页
         */
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个404页面',
          '看起来我们进入了错误的链接'
        ],

        backToHome: '返回首页',
        /**
         * a11y
         */
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',

        /**
         * Github
         */
        repo: 'https://github.com/Ly2JR/blog',
        repoLabel: 'Github'
      },
      // 英语资源
      '/en/': {

        navbar: nvarbarEn,

        selectLanguageName: 'English',
        selectLanguageAriaLabel: "Languages",
        selectLanguageText: 'Languages',

        sidebar: sidebarEn,

        repo: 'https://github.com/Ly2JR/blog',
        repoLabel: 'Github'
      },
    },
    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'Search',
        },
      },
    }),
    pwaPlugin({
      skipWaiting: false
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新'
        },
        '/en/': {
          message: 'New content is available.',
          buttonText: 'Refresh'
        },
      }
    }),
    // only enable shiki plugin in production mode
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
    // configure markdown
   markdown: {
      importCode: {
        handleImportPath: (str) =>
          str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
      },
    },

  /**
   * markdown扩展
   * @param md 
   */
  extendsMarkdown: md => {
    md.use(mathjax3);
    md.use(markdownItFootnote);
    md.use(markdownTaskList);
  },
  /**
  * 打包配置
  */
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith("mjx-")
        }
      }
    }
  })
});