import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Inori Wiki',
  description: 'Inori 系列插件文档入口',
  lang: 'zh-CN',
  base: '/inori-wiki/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'InoriLoot', link: 'https://iiiinori.github.io/inori-loot-wiki/' },
      { text: 'InoriLootShop', link: 'https://iiiinori.github.io/inori-lootshop-wiki/' }
    ],
    sidebar: [],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/IIIinori/inori-wiki' }
    ]
  }
})
