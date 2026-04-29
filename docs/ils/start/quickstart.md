# 快速开始

## 1. 打开默认商店

```text
/ils open simple
```

默认商店文件：

```text
plugins/InoriLootShop/shops/simple.yml
```

## 2. 最小商店配置

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

## 3. 交易行

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

## 4. 余额

查看余额：

```text
/ils balance
```

给玩家加余额：

```text
/ils balance add <player> <currency> <amount>
```
