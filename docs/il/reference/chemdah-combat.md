# Chemdah：战斗与目标

## `inoriloot mob kill`

玩家击杀 InoriLoot 刷怪点产生的实体时计数。Raid 和常驻地图都支持。

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

| 字段 | 说明 |
|---|---|
| `kill_scav` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.kill` | 任务条目 ID，可自定义 |
| `task.kill.objective` | 固定填写 `inoriloot mob kill` |
| `task.kill.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.kill.condition.game` | Raid 地图 ID，可选 |
| `task.kill.condition.map` | 常驻地图 ID，可选 |
| `task.kill.condition.session` | 对局或常驻 session ID，可选 |
| `task.kill.condition.spawner` | 刷怪点 ID，可选 |
| `task.kill.condition.mob` | 怪物 ID，可选 |
| `task.kill.condition.backend` | 刷怪后端，可选，例如 `mythic` |
| `task.kill.condition.mode` | 刷怪模式，可选，例如 `once`、`repeating` |
| `task.kill.goal.amount` | 需要击杀的数量 |

## `inoriloot spawner defeat`

一次性刷怪点被完全清空时计数，适合 Boss 或精英事件任务。

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

| 字段 | 说明 |
|---|---|
| `defeat_factory_boss` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.boss` | 任务条目 ID，可自定义 |
| `task.boss.objective` | 固定填写 `inoriloot spawner defeat` |
| `task.boss.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.boss.condition.game` | Raid 地图 ID，可选 |
| `task.boss.condition.map` | 常驻地图 ID，可选 |
| `task.boss.condition.session` | 对局或常驻 session ID，可选 |
| `task.boss.condition.spawner` | 刷怪点 ID，可选 |
| `task.boss.condition.mob` | 怪物 ID，可选 |
| `task.boss.condition.backend` | 刷怪后端，可选 |
| `task.boss.condition.mode` | 刷怪模式，可选 |
| `task.boss.goal.amount` | 需要清空刷怪点的次数 |

## `inoriloot objective complete`

玩家完成地图机关目标时计数。

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

| 字段 | 说明 |
|---|---|
| `start_generator` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.objective` | 任务条目 ID，可自定义 |
| `task.objective.objective` | 固定填写 `inoriloot objective complete` |
| `task.objective.condition.game` | Raid 地图 ID，可选 |
| `task.objective.condition.session` | 对局 ID，可选 |
| `task.objective.condition.objective` | 地图目标 ID，可选 |
| `task.objective.condition.type` | 目标类型，可选，例如 `generator`、`terminal`、`submit`、`defense` |
| `task.objective.condition.flag` | 完成 flag，可选 |
| `task.objective.goal.amount` | 需要完成地图目标的次数 |
