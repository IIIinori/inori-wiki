# airdrops.yml

空投配置。

```yaml
airdrops:
  military_drop:
    display: "军用空投"
    announce: 300
    travel: 45
    unlock: 20
    despawn: 360
    type: airdrop
    pool: military_high
    size: 27
    title: "Military Airdrop"
    points:
      - location: "80.5, 66, 120.5"
      - location: "20.5, 66, 220.5"
```

| 字段 | 说明 |
|------|------|
| `announce` | 提前预告时间 |
| `travel` | 飞行或落地等待时间 |
| `unlock` | 落地后锁定时间 |
| `despawn` | 解锁后存在时间 |
| `type` | 空投容器类型 |
| `pool` | 掉落池 ID |
| `points` | 落点列表（`- location: "x, y, z"`） |
