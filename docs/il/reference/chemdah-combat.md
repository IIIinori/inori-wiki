# Chemdah：战斗与目标

## `inoriloot mob kill`

玩家击杀 InoriLoot 刷怪点产生的实体。Raid 和常驻地图都支持。

```yaml
kill_mob:
  meta:
    name: 清理敌人
    type: daily
  task:
    kill:
      objective: inoriloot mob kill
      condition:
        scope: raid
        game: factory
        map: outpost
        mob: scav
      goal:
        amount: 20
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `mob` | 怪物 ID |

## `inoriloot spawner defeat`

一次性刷怪点被完全清空，适合 Boss 或精英事件任务。

```yaml
defeat_spawner:
  meta:
    name: 清除据点
    type: main
  task:
    boss:
      objective: inoriloot spawner defeat
      condition:
        scope: raid
        game: factory
        map: outpost
        spawner: factory_boss
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `spawner` | 刷怪点 ID |

## `inoriloot objective complete`

玩家完成地图机关目标。

```yaml
complete_objective:
  meta:
    name: 完成地图目标
    type: main
  task:
    objective:
      objective: inoriloot objective complete
      condition:
        scope: raid
        game: factory
        map: outpost
        objective: generator_a
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `objective` | 地图目标 ID |
