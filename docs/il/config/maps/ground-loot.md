# ground-loot.yml

地面物资配置。

```yaml
ground-loot:
  ground_01:
    location: "70, 64, 160"
    pool: medical_basic
    rolls: 2
    chance: 0.8
    display: "散落物资"
```

| 字段 | 说明 |
|------|------|
| `location` | 生成位置 |
| `pool` | 掉落池 ID |
| `rolls` | 抽取次数，可选 |
| `chance` | 生成概率 |
| `display` | 显示名 |
