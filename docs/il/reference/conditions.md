# Kether 条件

InoriLoot 的进入条件和撤离条件使用 Kether 表达式。

## 基础语法

| 语法 | 说明 |
|------|------|
| `il-has-key "office_key"` | 玩家持有指定钥匙 |
| `il-has-item "intel"` | 玩家持有指定物品 |
| `il-team-has-key "office_key"` | 队伍中任一在线成员持有指定钥匙 |
| `il-team-has-item "intel"` | 队伍中任一在线成员持有指定物品 |
| `il-flag "power_on"` | 指定 flag 已激活 |
| `il-defeated "boss_01"` | 指定刷怪点已被击败 |
| `il-battle-value 1000` | 玩家战备价值达到 1000 |
| `il-carry-value 500` | 玩家当前携带价值达到 500 |
| `il-count-item "medkit" to all` | 返回指定位置的物品数量 |
| `il-count-key "office_key" to safebox` | 返回指定位置的钥匙数量 |

## 示例

```yaml
condition: 'il-has-key "office_key"'
condition: 'il-battle-value 1000'
condition: 'il-carry-value 500'
condition: 'il-has-key "office_key" to all'
```

## 通用奖励动作

以下动作注册为 Kether shared action，Chemdah 等插件也可以解析。

```yaml
agent:
  completed: |-
    il-give-item "medkit" amount 3 to stash
    il-give-key "office_key" amount 1 to safebox
    il-give-pool "medical_pool" rolls 2 to inventory
    il-take-item "intel" amount 1 to all
    il-take-key "office_key" amount 1 to stash
```

`to` 支持：`inventory`、`stash`、`safebox`、`all`。

## 解锁动作

```yaml
agent:
  completed: |-
    il-stash-unlock 3
    il-safebox-unlock-temp 2 seconds 1800
```

| 动作 | 说明 |
|------|------|
| `il-stash-unlock <level>` | 设置仓库永久解锁等级 |
| `il-safebox-unlock-temp <level> seconds <sec>` | 设置保险箱临时解锁等级（持续指定秒数） |
| `il-safebox-unlock-clear` | 清除当前玩家保险箱临时解锁 |
