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
    default: "1x2"
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

## 钥匙箱

```yaml
keybox:
  size: 54
  unlock:
    default: 4
    steps:
      - 6
      - 9
  enabled: true
  title: "钥匙箱"
  raid: true
```

| 字段 | 说明 |
|------|------|
| `size` | 钥匙箱总格数 |
| `unlock.default` | 默认解锁格数（int） |
| `unlock.steps` | 每级额外解锁格数（int 列表） |
| `enabled` | 是否启用钥匙箱 |
| `title` | 钥匙箱标题 |
| `raid` | 是否允许 Raid 中打开 |

## 解锁区域

| 格式 | 示例 | 说明 |
|------|------|------|
| `宽x高` | `3x2` | 从左上角解锁矩形区域 |
| `x,y,宽,高` | `2,1,3,2` | 从指定坐标解锁矩形区域 |

## 临时解锁

保险箱和钥匙箱都支持临时解锁等级（到期自动恢复为永久等级）。

```text
/ila profile safeboxunlocktemp <玩家> <等级> <秒数>
/ila profile keyboxunlocktemp <玩家> <等级> <秒数>
```

仓库、保险箱、钥匙箱支持以下 Kether 动作：

```text
il-stash-unlock <level>
il-safebox-unlock-temp <level> seconds <sec>
il-safebox-unlock-clear
il-keybox-unlock-temp <level> seconds <sec>
il-keybox-unlock-clear
```
