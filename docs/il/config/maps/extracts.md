# extracts.yml

撤离点配置。

```yaml
extracts:
  main_exit:
    display: "主出口"
    type: permanent
    location: "50, 64, 100"
    radius: 3.0
    warmup: 8
    countdown: 0
    locked: false
    condition: 'all [ il-flag "power_on" il-has-key "office_key" ]'
    uses: 1
```

| 字段 | 说明 |
|------|------|
| `display` | 撤离点显示名 |
| `type` | 撤离点类型：`permanent`、`conditional`、`limited` |
| `location` | 中心位置 |
| `radius` | 检测半径 |
| `warmup` | 撤离读条时间 |
| `countdown` | 解锁前倒计时 |
| `locked` | 是否初始锁定 |
| `condition` | Kether 条件 |
| `uses` | 可使用次数 |
