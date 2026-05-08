# 自定义货币

InoriLootShop 支持多个内部自定义货币。

## 配置

```yml
currency:
  coin: '&e哈夫币'
  token: '&b代币'
```

每个键名都是一个货币 ID。

## 变量

```text
%inorilootshop_coin%
%inorilootshop_coin_pending%
%inorilootshop_token%
%inorilootshop_token_pending%
```

| 变量 | 说明 |
|------|------|
| `%inorilootshop_coin%` | `coin` 余额 |
| `%inorilootshop_coin_pending%` | `coin` 待领取收益 |

## 余额命令

```text
/ils balance
/ils balance <player>
/ils balance add <player> <currency> <amount>
/ils balance take <player> <currency> <amount>
/ils balance set <player> <currency> <amount>
```

## 默认交易货币

交易行默认货币取 `currency` 下第一个 ID。
