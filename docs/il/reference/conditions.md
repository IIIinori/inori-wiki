# Kether 公有动作

## 条件与查询

| 动作 | 说明 |
|------|------|
| `il-has-item "<itemId>" [to <target>]` | 是否拥有指定物品 |
| `il-has-key "<keyId>" [to <target>]` | 是否拥有指定钥匙 |
| `il-team-has-item "<itemId>" [to <target>]` | 队伍任一在线成员是否拥有物品 |
| `il-team-has-key "<keyId>" [to <target>]` | 队伍任一在线成员是否拥有钥匙 |
| `il-count-item "<itemId>" [to <target>]` | 统计物品数量 |
| `il-count-key "<keyId>" [to <target>]` | 统计钥匙数量 |
| `il-battle-value [min]` | 战备价值（带参数时按阈值判断） |
| `il-carry-value [min]` | 当前携带价值（带参数时按阈值判断） |
| `il-flag "<flagId>"` | 当前副本中目标 flag 是否激活 |
| `il-defeated "<spawnerId>"` | 当前副本中刷怪点是否已击败 |

`to` 目标支持：`inventory`、`stash`、`safebox`、`all`。

## 物品与钥匙发放/扣除

| 动作 | 说明 |
|------|------|
| `il-give-item "<itemId>" [amount <n>] [to <target>]` | 发放物品 |
| `il-give-key "<keyId>" [amount <n>] [to <target>]` | 发放钥匙 |
| `il-give-pool "<poolId>" [rolls <n>] [to <target>]` | 按掉落池发放 |
| `il-take-item "<itemId>" [amount <n>] [to <target>]` | 扣除物品 |
| `il-take-key "<keyId>" [amount <n>] [to <target>]` | 扣除钥匙 |

## 解锁相关

| 动作 | 说明 |
|------|------|
| `il-stash-unlock <level>` | 设置仓库永久解锁等级 |
| `il-safebox-unlock-temp <level> [seconds <sec>]` | 设置保险箱临时解锁等级 |
| `il-safebox-unlock-clear` | 清除保险箱临时解锁 |
| `il-keybox-unlock-temp <level> [seconds <sec>]` | 设置钥匙箱临时解锁等级 |
| `il-keybox-unlock-clear` | 清除钥匙箱临时解锁 |

## 示例

```yaml
condition: 'il-has-key "office_key" to inventory'
condition: 'il-battle-value 1000'

agent:
  completed: |-
    il-give-item "medkit" amount 3 to stash
    il-give-key "office_key" amount 1 to safebox
    il-take-item "intel" amount 1 to all
    il-stash-unlock 3
    il-safebox-unlock-temp 2 seconds 1800
    il-keybox-unlock-temp 1 seconds 600
```
