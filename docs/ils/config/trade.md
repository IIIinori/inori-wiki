# 交易表达式

商品交易写在 `buy` 字段中。

```yml
buy: 成本 -> 奖励
```

## 基础示例

```yml
buy: loot:scrap*3 -> loot:bandage*5
buy: key:slums_office_key*1 -> loot:bandage*5
buy: loot:scrap*3 -> pool:medical*2
```

## Vault / PlayerPoints

```yml
buy: vault:100 -> loot:bandage*5
buy: playerpoints:10 -> loot:bandage*5
buy: loot:scrap*3 -> vault:100
buy: loot:scrap*3 -> playerpoints:10
```

## 成本类型

| 写法 | 说明 |
|------|------|
| `loot:<id>*<数量>` | 扣除 InoriLoot 物品 |
| `key:<id>*<数量>` | 扣除钥匙 |
| `vault:<金额>` | 扣除 Vault 金币 |
| `playerpoints:<数量>` | 扣除 PlayerPoints |

`loot` 和 `key` 会检测并扣除：背包、副手、盔甲栏、stash。不检测 safebox。

## 奖励类型

| 写法 | 说明 |
|------|------|
| `loot:<id>*<数量>` | 给予 InoriLoot 物品 |
| `key:<id>*<数量>` | 给予钥匙 |
| `pool:<id>*<数量>` | 抽取奖池 |
| `vault:<金额>` | 给予 Vault 金币 |
| `playerpoints:<数量>` | 给予 PlayerPoints |

## 运算占位符

使用 `{}` 编写安全四则运算。表达式会先解析 PlaceholderAPI，再计算结果。

```yml
buy: loot:scrap*{%player_level%+1} -> loot:bandage*{%player_level%/2}
buy: vault:{%player_level%*100+50} -> loot:bandage*5
buy: playerpoints:{%some_points%/2} -> loot:bandage*5
buy: loot:scrap*3 -> vault:{%player_level%*50}
```

支持：

```text
+ - * / ()
```

| 类型 | 规则 |
|------|------|
| `loot` / `key` / `pool` | 向下取整，最低 1 |
| `playerpoints` | 向下取整，最低 1 |
| `vault` | 支持小数 |

## 对象写法

对象写法可以配置冷却和限购。

```yml
A:
  material: PAPER
  name: '&f限购绷带包'
  buy:
    deal: loot:scrap*3 -> loot:bandage*5
    cooldown: 10s
    limit: 5
    reset: daily
```

| 字段 | 说明 |
|------|------|
| `deal` | 交易表达式 |
| `success` | 成功提示 |
| `fail` | 失败提示 |
| `cooldown` | 每次购买后的冷却，支持 `ms/s/m/h/d` |
| `limit` | 每个玩家在周期内最多购买次数 |
| `reset` | 限购周期，支持 `never` / `daily` |
