# 交易行配置

文件：`plugins/InoriLootShop/market.yml`

## 自定义货币

```yml
currency:
  coin: '&e哈夫币'
```

每个键名都是一个自定义货币 ID。

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

| 字段 | 说明 |
|------|------|
| `tax-rate` | 成交税率 |
| `listing-fee-rate` | 上架手续费率 |
| `listing-fee-return-on-sold` | 成交后是否返还上架手续费 |

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

| 字段 | 说明 |
|------|------|
| `enabled` | 是否开启系统回收 |
| `multiplier` | 回收系数（基于参考价） |
| `allow.loot` | 是否允许回收普通物品 |
| `allow.key` | 是否允许回收钥匙 |
| `deny.loot` | 禁止回收的物品 ID 列表 |
| `deny.key` | 禁止回收的钥匙 ID 列表 |

## 可交易设置

```yml
tradeable:
  default: true
  deny:
    loot: []
    key: []
```

| 字段 | 说明 |
|------|------|
| `default` | 默认是否可交易 |
| `deny.loot` | 不可交易的物品 ID 列表 |
| `deny.key` | 不可交易的钥匙 ID 列表 |
