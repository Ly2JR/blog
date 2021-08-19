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
                  text: 'fish and life',
                  children: [
                    {
                      text: 'SubGroup',
                      children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                  ],
                },
                {
                  text: 'Programming',
                  children: [
                    {
                      text: 'SubGroup',
                      children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                  ],
                },
                {
                  text: 'Grocery store',
                  children: [
                    {
                      text: 'Always active',
                      link: '/',
                    },
                    {
                      text: 'Active on /foo/',
                      link: '/not-foo/',
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
                      text: 'SubGroup',
                      children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                  ],
                },
                {
                  text: '编程',
                  children: [
                    {
                      text: 'SubGroup',
                      children: ['/group/sub/foo.md', '/group/sub/bar.md'],
                    },
                  ],
                },
                // 控制元素何时被激活
                {
                  text: '杂货铺',
                  children: [
                    {
                      text: 'Always active',
                      link: '/',
                    },
                    {
                      text: 'Active on /foo/',
                      link: '/not-foo/',
                    },
                  ],
                },
              ],
              // 你也可以直接将它设置为一个 URL
              repo: 'https://github.com/TgT982474256/blog',
              repoLabel:'Github'
            },
          },
    }
});