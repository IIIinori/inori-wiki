# mobs.yml

刷怪点配置。

```yaml
mobs:
  guard_01:
    type: mythic
    mob: SkeletonGuard
    display: "骷髅巡逻兵"
    location: "60, 65, 170"
    mode: repeating
    interval: 30
    delay: 8
    alive: 1
    count: 1
    pool: scav_common
    rolls: 3
```

| 字段 | 说明 |
|------|------|
| `mob` | 怪物 ID |
| `display` | 显示名 |
| `location` | 刷怪位置 |
| `mode` | 刷新模式：`repeating` 或 `once` |
| `interval` | 重复刷新间隔 |
| `delay` | 首次刷新延迟 |
| `alive` | 最大存活数 |
| `count` | 每次生成数量 |
| `pool` | 击败奖励池 |
| `rolls` | 奖励抽取次数 |
