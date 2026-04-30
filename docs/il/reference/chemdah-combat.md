# Chemdah：战斗与目标

## `inoriloot mob kill`

玩家击杀 InoriLoot 刷怪点产生的实体。Raid 和常驻地图都支持。

```yaml
kill_scav:
  meta:
    name: 清理游荡者
    type: daily
  task:
    kill:
      objective: inoriloot mob kill
      condition:
        scope: raid
        game: factory
        spawner: factory_scav
        mob: scav
        backend: mythic
        mode: repeating
      goal:
        amount: 20

kill_outpost_guard:
  meta:
    name: 清理哨站守卫
    type: daily
  task:
    kill:
      objective: inoriloot mob kill
      condition:
        scope: persistent
        map: outpost
        spawner: outpost_guard
        mob: guard
        backend: mythic
        mode: repeating
      goal:
        amount: 10
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `spawner` | 刷怪点 ID |
| `mob` | 怪物 ID |
| `backend` | 刷怪后端，例如 `mythic` |
| `mode` | 刷怪模式，例如 `once`、`repeating` |

## `inoriloot spawner defeat`

一次性刷怪点被完全清空，适合 Boss 或精英事件任务。

```yaml
defeat_factory_boss:
  meta:
    name: 清除工厂主管
    type: main
  task:
    boss:
      objective: inoriloot spawner defeat
      condition:
        scope: raid
        game: factory
        spawner: factory_boss
        mob: factory_chief
        backend: mythic
        mode: once
      goal:
        amount: 1

defeat_outpost_elite:
  meta:
    name: 清除哨站精英点
    type: main
  task:
    boss:
      objective: inoriloot spawner defeat
      condition:
        scope: persistent
        map: outpost
        spawner: outpost_elite
        mob: elite_guard
        backend: mythic
        mode: once
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
| `mob` | 怪物 ID |
| `backend` | 刷怪后端 |
| `mode` | 刷怪模式 |

## `inoriloot objective complete`

玩家完成地图机关目标。

```yaml
start_generator:
  meta:
    name: 启动备用电源
    type: main
  task:
    objective:
      objective: inoriloot objective complete
      condition:
        game: factory
        objective: generator_a
        type: generator
        flag: power_on
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `objective` | 地图目标 ID |
| `type` | 目标类型，例如 `generator`、`terminal`、`submit`、`defense` |
| `flag` | 完成 flag |
