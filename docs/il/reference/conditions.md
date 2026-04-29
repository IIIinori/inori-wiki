# Kether 条件

InoriLoot 的进入条件和撤离条件使用 Kether 表达式。

## 基础语法

| 语法 | 说明 |
|------|------|
| `has-key "office_key"` | 玩家持有指定钥匙 |
| `has-item "intel"` | 玩家持有指定物品 |
| `team-has-key "office_key"` | 队伍中任一在线成员持有指定钥匙 |
| `team-has-item "intel"` | 队伍中任一在线成员持有指定物品 |
| `flag "power_on"` | 指定 flag 已激活 |
| `defeated "boss_01"` | 指定刷怪点已被击败 |
| `not <条件>` | 条件取反 |
| `all [ ... ]` | 全部条件满足 |
| `any [ ... ]` | 任意条件满足 |

## 示例

```yaml
condition: 'has-key "office_key"'
condition: 'all [ flag "power_on" has-key "office_key" ]'
condition: 'any [ team-has-key "vip_pass" team-has-item "intel" ]'
condition: 'not has-item "contraband"'
```
