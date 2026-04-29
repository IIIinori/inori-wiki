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
        game: factory
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
