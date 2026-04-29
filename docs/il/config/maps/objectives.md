# objectives.yml

任务目标配置。

```yaml
objectives:
  power_switch:
    type: switch
    flag: power_on
    display: "电源开关"
    location: "80, 65, 150"
    activate: 3
    radius: 2.0
```

| 字段 | 说明 |
|------|------|
| `type` | 目标类型 |
| `flag` | 完成后激活的 flag |
| `display` | 显示名 |
| `location` | 目标位置 |
| `activate` | 交互读条时间 |
| `radius` | 交互半径 |

常见目标类型：

| 类型 | 说明 |
|------|------|
| `switch` | 普通开关 |
| `terminal` | 终端 |
| `generator` | 发电机 |
| `submit` | 提交物品 |
| `defense` | 区域防守 |
| `multi-stage` | 多阶段目标 |
