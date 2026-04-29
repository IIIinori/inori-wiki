# 交易行配置

文件：

```text
plugins/InoriLootShop/market.yml
```

## 自定义货币

```yml
currency:
  coin: '&e哈夫币'
```

每个 key 都是一个自定义货币 ID。

自动注册 PlaceholderAPI：

```text
%inorilootshop_coin%
%inorilootshop_coin_pending%
```

## 挂单

```yml
listing:
  expire-hours: 24
  base-slots: 3
  max-slots: 30
  permission-slots:
    inorilootshop.market.slots.5: 5
    inorilootshop.market.slots.10: 10
```

| 字段 | 说明 |
|------|------|
| `expire-hours` | 挂单过期时间，单位小时 |
| `base-slots` | 默认上架槽位 |
| `max-slots` | 最大上架槽位 |
| `permission-slots` | 权限对应槽位 |

## 手续费

```yml
fee:
  tax-rate: 0.05
  listing-fee-rate: 0.01
  listing-fee-return-on-sold: false
```

## 系统回收

```yml
quick-sell:
  enabled: true
  multiplier: 0.75
  allow:
    loot: true
    key: true
  deny:
    loot:
      - quest_item
    key: []
```

## 可交易设置

```yml
tradeable:
  default: true
  deny:
    loot: []
    key: []
```
