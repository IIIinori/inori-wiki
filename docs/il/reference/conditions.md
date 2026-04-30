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
| `il-count-item "medkit" from all` | 返回指定来源的物品数量 |
| `il-count-key "office_key" from safebox` | 返回指定来源的钥匙数量 |
| `not <条件>` | 条件取反 |
| `all [ ... ]` | 全部条件满足 |
| `any [ ... ]` | 任意条件满足 |

## 示例

```yaml
condition: 'il-has-key "office_key"'
condition: 'all [ il-flag "power_on" il-has-key "office_key" ]'
condition: 'any [ il-team-has-key "vip_pass" il-team-has-item "intel" ]'
condition: 'il-battle-value 1000'
condition: 'il-carry-value 500'
condition: 'il-has-key "office_key" from all'
condition: 'not il-has-item "contraband"'
```

## 通用奖励动作

以下动作注册为 Kether shared action，Chemdah 等插件也可以解析。

```yaml
agent:
  completed: |-
    il-give-item "medkit" amount 3 to stash
    il-give-key "office_key" amount 1 to safebox
    il-give-pool "medical_pool" rolls 2 to inventory
    il-take-item "intel" amount 1 from all
    il-take-key "office_key" amount 1 from stash
```

`to` / `from` 支持：`inventory`、`stash`、`safebox`、`all`。

