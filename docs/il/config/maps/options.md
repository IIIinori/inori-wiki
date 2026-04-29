# options.yml

`options.yml` 是地图主配置。

## Raid 示例

```yaml
id: slums
display: "贫民区"
mode: solo
world: slums
duration: 900
last: 180

players:
  min: 1
  target: 1
  max: 1

spawns:
  - location: "0.5, 65, 0.5, 0, 0"
```

| 字段 | 说明 |
|------|------|
| `id` | 地图 ID |
| `display` | 显示名 |
| `mode` | 队列模式：`solo`、`duo`、`trio`、`squad` |
| `world` | 模板世界目录名 |
| `duration` | Raid 对局时长，单位秒 |
| `last` | 最后撤离阶段阈值，单位秒 |
| `players.min` | 最小开局人数 |
| `players.target` | 目标人数 |
| `players.max` | 最大人数 |
| `spawns` | 出生点列表 |

## 常驻示例

```yaml
id: outpost
display: "前哨站"
world: outpost

refresh:
  loot: 300
  mob: 180
  container: 300
  ground-loot: 180
  objective: 300
  airdrop: 300
  extract: 300

spawns:
  - location: "0.5, 65, 0.5, 0, 0"
```

| 字段 | 说明 |
|------|------|
| `refresh.loot` | 整图运行时刷新间隔 |
| `refresh.mob` | 怪物刷新间隔 |
| `refresh.container` | 容器刷新间隔 |
| `refresh.ground-loot` | 地面物资刷新间隔 |
| `refresh.objective` | 目标状态刷新间隔 |
| `refresh.airdrop` | 空投刷新间隔 |
| `refresh.extract` | 撤离点刷新间隔 |
