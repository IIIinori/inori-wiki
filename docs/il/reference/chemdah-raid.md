# Chemdah：副本与常驻

## `inoriloot raid start`

玩家进入 Raid 对局。

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
        world: factory_live_01
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `world` | 对局世界名 |

## `inoriloot raid extract`

玩家成功撤离。

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

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |

## `inoriloot raid end`

玩家参与的 Raid 结束。

```yaml
raid_end_factory:
  meta:
    name: 工厂战局结束
    type: daily
  task:
    end:
      objective: inoriloot raid end
      condition:
        game: factory
        reason: timeout
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `reason` | 结束原因文本 |

## `inoriloot persistent enter`

玩家进入常驻地图。

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
        world: outpost_live
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `map` | 常驻地图 ID |
| `world` | 常驻地图世界名 |

## `inoriloot persistent leave`

玩家离开常驻地图。

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
        world: outpost_live
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `map` | 常驻地图 ID |
| `world` | 常驻地图世界名 |
