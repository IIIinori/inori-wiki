# PlaceholderAPI

## 自定义货币

每个自定义货币都会自动注册两个变量：

```text
%inorilootshop_<id>%
%inorilootshop_<id>_pending%
```

示例：

```text
%inorilootshop_coin%
%inorilootshop_coin_pending%
```

| 变量 | 说明 |
|------|------|
| `%inorilootshop_coin%` | 玩家 `coin` 余额 |
| `%inorilootshop_coin_pending%` | 玩家 `coin` 待领取收益 |

## 商店文本占位符

商店标题、lore、消息支持：

| 占位符 | 说明 |
|--------|------|
| `%player%` / `%player_name%` | 玩家名 |
| `%uuid%` | 玩家 UUID |
| `%shop%` | 商店 ID |
| `%page%` | 当前页 |
| `%pages%` | 总页数 |
| `%icon%` | 当前图标字符 |
