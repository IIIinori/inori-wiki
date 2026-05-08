# 快速开始

## 安装

InoriLootShop 是 InoriLoot 的商店与交易行附属插件。

### 前置

| 插件 | 是否必需 | 说明 |
|------|----------|------|
| InoriLoot | 必需 | 提供物品、钥匙、奖池、仓库、保险箱 |
| PlaceholderAPI | 可选 | 用于文本变量和交易表达式变量 |
| Vault | 可选 | 商店交易中使用 `vault:` 时需要 |
| PlayerPoints | 可选 | 商店交易中使用 `playerpoints:` 时需要 |

### 安装步骤

| 步骤 | 说明 |
|------|------|
| 1 | 将插件 jar 放入服务器 `plugins/` 目录 |
| 2 | 确认已安装 InoriLoot |
| 3 | 启动服务器生成默认配置 |
| 4 | 修改 `config.yml`、`market.yml` 和 `shops/*.yml` |
| 5 | 使用 `/ils reload` 重载配置 |

### 默认文件

```text
plugins/InoriLootShop/
├── config.yml
├── market.yml
├── data.db
└── shops/
    ├── simple.yml
    ├── example.yml
    └── advanced.yml
```

## 最小流程

```text
打开商店 → 配置一个图标交易 → 测试交易行 → 检查余额与收益
```

## 打开默认商店

```text
/ils open simple
```

默认商店文件：`plugins/InoriLootShop/shops/simple.yml`

## 第一个商店配置

```yml
title: '&8简单商店'
permission: inorilootshop.use
denied: '&c你没有权限打开该商店。'

layout:
  - '#########'
  - '#   A   #'
  - '####X####'

icons:
  '#': GRAY_STAINED_GLASS_PANE

  X:
    material: BARRIER
    name: '&c关闭'
    click: close

  A:
    material: PAPER
    name: '&f绷带包'
    auto-lore: true
    buy: loot:scrap*3 -> loot:bandage*5
```

## 交易行测试

打开交易行：

```text
/ils market
```

上架主手物品：

```text
/ils market sell <price> [amount]
```

领取收益：

```text
/ils market claim
```

## 余额命令

查看余额：

```text
/ils balance
```

给玩家加余额：

```text
/ils balance add <player> <currency> <amount>
```
