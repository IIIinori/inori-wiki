# 指令

## 基础指令

| 指令 | 权限 | 用途 |
|------|------|------|
| `/ils open <shop>` | `inorilootshop.use` | 打开商店 |
| `/ils open <shop> <player>` | `inorilootshop.admin` 或目标为自己 | 为指定玩家打开商店 |
| `/ils list` | `inorilootshop.use` | 查看商店列表 |
| `/ils reload` | `inorilootshop.admin` | 重载配置和商店 |

## 交易行

| 指令 | 权限 | 用途 |
|------|------|------|
| `/ils market` | 无 | 打开交易行 |
| `/ils market sell <price> [amount]` | 无 | 上架主手物品 |
| `/ils market claim` | 无 | 领取交易行收益 |
| `/ils market my` | 无 | 查看自己的挂单 |

## 余额

| 指令 | 权限 | 用途 |
|------|------|------|
| `/ils balance` | 无 | 查看自己的余额和待领取收益 |
| `/ils balance <player>` | `inorilootshop.market.admin` | 查看指定玩家余额 |
| `/ils balance add <player> <currency> <amount>` | `inorilootshop.market.admin` | 增加指定货币余额 |
| `/ils balance take <player> <currency> <amount>` | `inorilootshop.market.admin` | 扣除指定货币余额 |
| `/ils balance set <player> <currency> <amount>` | `inorilootshop.market.admin` | 设置指定货币余额 |
