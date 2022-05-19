import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme, } from '@vuepress/theme-default';
import { searchPlugin } from '@vuepress/plugin-search';
import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';
import { navbar, sidebar } from './configs';
//import { path } from '@vuepress/utils';
import { shikiPlugin } from '@vuepress/plugin-shiki'

const isProd = process.env.NODE_ENV === 'production';

export default defineUserConfig({
  base: '/',
  head: [
    [
      'link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`
      }
    ],
    [
      'link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`
      }
    ],
    [
      'link', {
        rel: 'manifest',
        href: '/manifest.webmanifest'
      }
    ],
    [
      'meta', {
        name: 'application-name',
        content: 'Blog'
      }
    ],
    [
      'meta', {
        name: 'apple-mobile-web-app-title',
        content: 'Blog'
      }
    ],
    [
      'meta', {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'link', {
        rel: 'apple-touch-icon',
        href: `/images/icons/apple-touch-icon.png`,
      }
    ],
    [
      'link', {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta', {
        name: 'msapplication-TileColor',
        content: '#3eaf7c'
      }
    ],
    [
      'meta', {
        name: 'theme-color',
        content: '#3eaf7c'
      }
    ]
  ],

  //站点层级语言环境配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '乌龙茶有点甜·博客',
      description: '写写记记...',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Ly2JR·Blog',
      description: 'note...',
    }
  },

  theme: defaultTheme({
    /**
     * logo
     */
    logo: "/images/favious.png",

    docsDir: 'docs',

    //主题层级语言配置
    locales: {
      // 中文语言配置
      '/': {
        /**
         * 菜单
         */
        navbar: navbar.zh,

        /**
         * 多语navbar
         */
        selectLanguageName: '简体中文',
        selectLanguageAriaLabel: "选择语言",
        selectLanguageText: '选择语言',

        /**
         * 边注栏
         */
        sidebar: sidebar.zh,

        editLinkText: '在GitHub上编辑此页',
        lastUpdatedText: '上次更新',
        contributors: false,
        contributorsText: '贡献者',

        tip: '提示',
        warning: '注意',
        danger: '警告',

        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个404页面',
          '看起来我们进入了错误的链接'
        ],

        backToHome: '返回首页',

        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',

        /**
         * Github
         */
        repo: 'https://github.com/TgT982474256/blog',
        repoLabel: 'Github'
      },
      // 英语资源
      '/en/': {

        navbar: navbar.en,

        selectLanguageName: 'English',
        selectLanguageAriaLabel: "Languages",
        selectLanguageText: 'Languages',

        sidebar: sidebar.en,

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
  // markdown: {
  //   importCode: {
  //     handleImportPath: (str) =>
  //       str.replace(/^@vuepress/, path.resolve(__dirname, '../../packages/@vuepress'))
  //   }
  // },
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

  /**
   * markdown扩展
   * @param md 
   */
  extendsMarkdown: md => {
    //支持latex
    let mathjax3 = require('markdown-it-mathjax3');
    //支持注脚
    let markdownItFootnote = require('markdown-it-footnote');
    //支持任务列表
    let markdownTaskList = require('markdown-it-task-lists');
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