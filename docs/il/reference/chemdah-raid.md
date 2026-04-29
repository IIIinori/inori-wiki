# Chemdah：副本与常驻

## `inoriloot raid start`

玩家进入 Raid 对局时计数。

```yaml
enter_factory:
  meta:
    name: 进入工厂
    type: daily
  task:
    start:
      objective: inoriloot raid start
      condition:
        game: factory
      goal:
        amount: 1
```

配置说明：

| 字段 | 说明 |
|---|---|
| `enter_factory` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型，可用于 Chemdah 分类 |
| `task.start` | 任务条目 ID，可自定义 |
| `task.start.objective` | 固定填写 `inoriloot raid start` |
| `task.start.condition.game` | Raid 地图 ID |
| `task.start.condition.session` | 对局 ID，可选 |
| `task.start.condition.world` | 对局世界名，可选 |
| `task.start.goal.amount` | 需要进入 Raid 的次数 |

## `inoriloot raid extract`

玩家成功撤离时计数。

```yaml
daily_extract_factory:
  meta:
    name: 每日撤离：工厂
    type: daily
  task:
    extract:
      objective: inoriloot raid extract
      condition:
        game: factory
      goal:
        amount: 1
```

配置说明：

| 字段 | 说明 |
|---|---|
| `daily_extract_factory` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.extract` | 任务条目 ID，可自定义 |
| `task.extract.objective` | 固定填写 `inoriloot raid extract` |
| `task.extract.condition.game` | Raid 地图 ID |
| `task.extract.condition.session` | 对局 ID，可选 |
| `task.extract.goal.amount` | 需要成功撤离的次数 |

## `inoriloot raid end`

玩家参与的 Raid 结束时计数。

```yaml
raid_finished_factory:
  meta:
    name: 工厂战局结束
    type: daily
  task:
    end:
      objective: inoriloot raid end
      condition:
        game: factory
      goal:
        amount: 1
```

配置说明：

| 字段 | 说明 |
|---|---|
| `raid_finished_factory` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.end` | 任务条目 ID，可自定义 |
| `task.end.objective` | 固定填写 `inoriloot raid end` |
| `task.end.condition.game` | Raid 地图 ID |
| `task.end.condition.session` | 对局 ID，可选 |
| `task.end.condition.reason` | 结束原因文本，可选 |
| `task.end.goal.amount` | 需要 Raid 结束触发的次数 |

## `inoriloot persistent enter`

玩家进入常驻地图时计数。

```yaml
enter_outpost:
  meta:
    name: 前往哨站
    type: main
  task:
    enter:
      objective: inoriloot persistent enter
      condition:
        map: outpost
      goal:
        amount: 1
```

配置说明：

| 字段 | 说明 |
|---|---|
| `enter_outpost` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.enter` | 任务条目 ID，可自定义 |
| `task.enter.objective` | 固定填写 `inoriloot persistent enter` |
| `task.enter.condition.map` | 常驻地图 ID |
| `task.enter.condition.world` | 常驻地图世界名，可选 |
| `task.enter.goal.amount` | 需要进入常驻地图的次数 |

## `inoriloot persistent leave`

玩家离开常驻地图时计数。

```yaml
leave_outpost:
  meta:
    name: 离开哨站
    type: daily
  task:
    leave:
      objective: inoriloot persistent leave
      condition:
        map: outpost
      goal:
        amount: 1
```

配置说明：

| 字段 | 说明 |
|---|---|
| `leave_outpost` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.leave` | 任务条目 ID，可自定义 |
| `task.leave.objective` | 固定填写 `inoriloot persistent leave` |
| `task.leave.condition.map` | 常驻地图 ID |
| `task.leave.condition.world` | 常驻地图世界名，可选 |
| `task.leave.goal.amount` | 需要离开常驻地图的次数 |
