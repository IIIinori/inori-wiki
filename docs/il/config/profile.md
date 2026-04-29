# 玩家资产配置

文件：`plugins/InoriLoot/profile.yml`

## 仓库

```yaml
stash:
  size: 108
  unlock:
    default: 27
    steps:
      - 9
      - 18
      - 27
  enabled: true
  title: "仓库"
  raid: false
```

| 字段 | 说明 |
|------|------|
| `size` | 仓库最大格数 |
| `unlock.default` | 默认解锁格数 |
| `unlock.steps` | 每级额外解锁格数 |
| `enabled` | 是否启用仓库 |
| `title` | 仓库标题 |
| `raid` | 是否允许 Raid 中打开 |

## 保险箱

```yaml
safebox:
  size: 54
  unlock:
    default:
      - "1x2"
    steps:
      - "2x4"
      - "3x6"
  enabled: true
  title: "保险箱"
  raid: true
```

| 字段 | 说明 |
|------|------|
| `size` | 保险箱最大格数 |
| `unlock.default` | 默认解锁区域 |
| `unlock.steps` | 每级额外解锁区域 |
| `enabled` | 是否启用保险箱 |
| `title` | 保险箱标题 |
| `raid` | 是否允许 Raid 中打开 |

## 解锁区域

| 格式 | 示例 | 说明 |
|------|------|------|
| `宽x高` | `3x2` | 从左上角解锁矩形区域 |
| `x,y,宽,高` | `2,1,3,2` | 从指定坐标解锁矩形区域 |
