# Chemdah：奖励脚本

## 组合任务示例

```yaml
factory_contract:
  meta:
    name: 工厂合同
    type: main
  task:
    enter:
      objective: inoriloot raid start
      condition:
        game: factory
      goal:
        amount: 1
    generator:
      objective: inoriloot objective complete
      condition:
        game: factory
        objective: generator_a
      goal:
        amount: 1
    item:
      objective: inoriloot bringout item
      condition:
        game: factory
        loot: intel
      goal:
        amount: 1
    extract:
      objective: inoriloot raid extract
      condition:
        game: factory
      goal:
        amount: 1
```

## 任务奖励脚本

InoriLoot 会注册一组通用 Kether 共享动作。Chemdah 可以在 `agent.completed`、`agent.accepted` 等脚本中直接使用这些动作，不需要再绕命令。

```yaml
agent:
  completed: |-
    il-give-item "medkit" amount 3 to inventory
    il-give-key "office_key" amount 1 to stash
    il-give-pool "medical_pool" rolls 2 to safebox
```

| 动作 | 语法 | 返回值 |
|---|---|---|
| `il-give-item` | `il-give-item "medkit" amount 3 to stash` | 是否成功发放 |
| `il-give-key` | `il-give-key "office_key" amount 1 to safebox` | 是否成功发放 |
| `il-give-pool` | `il-give-pool "medical_pool" rolls 2 to stash` | 是否成功发放 |
| `il-has-item` | `il-has-item "intel" from all` | 玩家是否持有物品 |
| `il-has-key` | `il-has-key "office_key" from stash` | 玩家是否持有钥匙 |
| `il-team-has-item` | `il-team-has-item "intel"` | 队伍中任一在线成员是否持有物品 |
| `il-team-has-key` | `il-team-has-key "office_key"` | 队伍中任一在线成员是否持有钥匙 |
| `il-flag` | `il-flag "power_on"` | 地图目标 flag 是否已激活 |
| `il-defeated` | `il-defeated "boss_01"` | 刷怪点是否已清空 |
| `il-take-item` | `il-take-item "intel" amount 1 from all` | 是否成功扣除 |
| `il-take-key` | `il-take-key "office_key" amount 1 from stash` | 是否成功扣除 |
| `il-count-item` | `il-count-item "medkit" from all` | 指定来源内物品数量 |
| `il-count-key` | `il-count-key "office_key" from safebox` | 指定来源内钥匙数量 |
| `il-battle-value` | `il-battle-value` / `il-battle-value 1000` | 无参数返回数值，有参数返回是否达标 |
| `il-carry-value` | `il-carry-value` / `il-carry-value 500` | 无参数返回数值，有参数返回是否达标 |

示例：完成任务后发放奖励，同时扣除任务物品。

```yaml
agent:
  completed: |-
    il-take-item "intel" amount 1 from all
    il-give-item "advanced_medkit" amount 2 to stash
    il-give-key "lab_pass" amount 1 to safebox
```

支持的奖励落点 / 查询来源：

| 参数 | 说明 |
|---|---|
| `inventory` | 玩家背包，默认值 |
| `stash` | InoriLoot 仓库 |
| `safebox` | InoriLoot 保险箱 |
| `all` | 查询或扣除时表示背包 + 仓库 + 保险箱；发放时表示尝试找到一个可完整接收奖励的位置 |
