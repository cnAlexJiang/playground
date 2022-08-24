export default {
  title: 'alex-test', //站点标题
  description: '一个vitepress测试',//mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.png",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://gitee.com/geeksdidi" },
      { icon: "twitter", link: "..." },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
        },
        link: "...",
      },
    ],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },

  },
}