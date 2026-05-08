# 快速开始

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
