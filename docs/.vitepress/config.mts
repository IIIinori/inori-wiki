import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Inori Wiki',
  description: 'Inori 系列插件文档',
  lang: 'zh-CN',
  base: '/inori-wiki/',
  cleanUrls: true,
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: 'InoriLoot',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/il/' },
          { text: '主配置', link: '/il/config/main' },
          { text: '玩家资产', link: '/il/config/profile' },
          {
            text: '物品',
            collapsed: true,
            items: [
              { text: '物品配置', link: '/il/config/loot/items' },
              { text: '掉落池配置', link: '/il/config/loot/pools' },
            ]
          },
          {
            text: '地图',
            collapsed: true,
            items: [
              { text: '地图概览', link: '/il/config/maps/overview' },
              { text: 'options.yml', link: '/il/config/maps/options' },
              { text: 'extracts.yml', link: '/il/config/maps/extracts' },
              { text: 'containers.yml', link: '/il/config/maps/containers' },
              { text: 'airdrops.yml', link: '/il/config/maps/airdrops' },
              { text: 'ground-loot.yml', link: '/il/config/maps/ground-loot' },
              { text: 'mobs.yml', link: '/il/config/maps/mobs' },
              { text: 'objectives.yml', link: '/il/config/maps/objectives' },
              { text: 'npc.yml', link: '/il/config/maps/npc' },
              { text: 'preset 继承', link: '/il/config/maps/presets' },
            ]
          },
          { text: '命令', link: '/il/reference/commands' },
          { text: 'Kether', link: '/il/reference/conditions' },
          { text: 'PlaceholderAPI', link: '/il/reference/placeholders' },
          { text: '开发者 API', link: '/il/reference/api' },
        ]
      },
      {
        text: 'InoriLootShop',
        collapsed: false,
        items: [
          { text: '快速开始', link: '/ils/' },
          { text: '安装', link: '/ils/start/install' },
          { text: '主配置', link: '/ils/config/main' },
          { text: '商店配置', link: '/ils/config/shop' },
          { text: '交易表达式', link: '/ils/config/trade' },
          { text: '交易行配置', link: '/ils/config/market' },
          { text: '交易行说明', link: '/ils/market/overview' },
          { text: '动态价值', link: '/ils/market/price' },
          { text: '自定义货币', link: '/ils/market/currency' },
          { text: '指令', link: '/ils/reference/commands' },
          { text: 'PlaceholderAPI', link: '/ils/reference/placeholders' },
        ]
      }
    ],
    socialLinks: [],
    search: {
      provider: 'local'
    },
    outline: {
      label: '目录'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
