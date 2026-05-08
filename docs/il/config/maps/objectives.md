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
| `preset` | 继承的预设 ID（可选） |
| `type` | 目标类型 |
| `flag` | 完成后激活的 flag |
| `display` | 显示名 |
| `location` | 目标位置 |
| `activate` | 交互读条时间 |
| `announce` | 广播文本（`generator` / `terminal` / `defense` / `multi-stage` 阶段可用） |
| `radius` | 防守半径（`defense`，防守时需有人留在该半径内） |
| `complete` | 防守持续秒数（`defense`） |
| `success` | 防守成功广播（`defense`） |
| `fail` | 防守失败广播（`defense`） |
| `triggers` | 触发刷怪点 ID 列表（`terminal` / `defense`） |
| `unlocks` | 解锁撤离点 ID 列表（`generator` / `defense`） |
| `instant` | 刷怪是否立即触发（`terminal` / `defense`，默认 `true`） |
| `item` | 提交目标需求物品 ID（`submit`） |
| `amount` | 提交需求数量（`submit`） |
| `waves` | 防守波次列表（`defense`，按 `second` 到点触发） |
| `stages` | 多阶段配置（`multi-stage`，按顺序逐阶段推进） |

目标类型：

| 类型 | 说明 |
|------|------|
| `switch` | 基础目标：完成后仅激活 `flag`，不附带额外事件 |
| `terminal` | 终端目标：完成后激活 `flag`，并可通过 `triggers` 调度刷怪（支持 `instant`） |
| `generator` | 发电机目标：完成后激活 `flag`，并可通过 `unlocks` 解锁撤离点 |
| `submit` | 提交物品 |
| `defense` | 区域防守：读条成功后进入防守状态，需在 `radius` 范围内坚守 `complete` 秒；中途无人留守即失败 |
| `multi-stage` | 多阶段目标：每次交互推进一个阶段，阶段可独立触发 `unlocks/triggers/announce`，最后阶段完成才激活 `flag` |

## defense 机制说明

| 阶段 | 行为 |
|------|------|
| 开始防守 | 目标读条完成后进入防守计时；可按 `triggers + instant` 启动刷怪，并触发 `announce` |
| 防守进行中 | 每秒检查 `radius` 范围内是否仍有队伍活跃玩家；无人留守则防守立即失败 |
| 波次触发 | `waves` 按 `second` 到点触发；每波可配置 `triggers / instant / msg` |
| 防守成功 | 持续到 `complete` 秒后成功，激活 `flag`，并执行 `unlocks`、`success` |

## multi-stage 机制说明

| 阶段 | 行为 |
|------|------|
| 交互点 | 当前可交互位置始终是“当前阶段”的 `location` |
| 推进规则 | 每次完成交互只推进 1 个阶段，并立即执行该阶段的 `unlocks / triggers / announce` |
| 完成条件 | 只有最后一个阶段完成后，目标才会最终完成并激活 `flag` |
| 进度反馈 | 局内会显示阶段进度（已完成/总阶段）与下一阶段名称 |

## submit 示例

```yaml
objectives:
  deliver_docs:
    type: submit
    flag: docs_done
    display: "上交情报"
    location: "30, 65, 40"
    activate: 2
    item: intel_docs
    amount: 2
```

## terminal 示例

```yaml
objectives:
  alarm_terminal:
    type: terminal
    flag: alarm_on
    display: "警报终端"
    location: "120, 70, 88"
    activate: 4
    triggers:
      - patrol_a
      - patrol_b
    instant: true
    announce: "&c{player} 触发了 {objective}！"
```

## generator 示例

```yaml
objectives:
  backup_power:
    type: generator
    flag: power_ready
    display: "备用电源"
    location: "66, 64, 102"
    activate: 6
    unlocks:
      - north_extract
    announce: "&a电源恢复，撤离点已开放。"
```

## defense 示例（含 waves）

```yaml
objectives:
  hold_room:
    type: defense
    flag: hold_done
    display: "坚守控制室"
    location: "210, 66, 300"
    activate: 3
    complete: 90
    radius: 5
    triggers:
      - wave_spawner_main
    unlocks:
      - final_extract
    instant: true
    announce: "&e防守开始！"
    success: "&a防守成功！"
    fail: "&c防守失败！"
    waves:
      - second: 30
        triggers:
          - wave_spawner_side
        instant: false
        msg: "&6增援来袭！"
```

## multi-stage 示例

```yaml
objectives:
  restore_network:
    type: multi-stage
    flag: net_online
    display: "恢复网络"
    activate: 4
    stages:
      - display: "接通电源"
        location: "40, 65, 40"
        activate: 3
        unlocks:
          - east_extract
      - display: "重启主机"
        location: "44, 65, 44"
        activate: 5
        triggers:
          - boss_spawn
        instant: true
        announce: "&d阶段推进：{objective}"
```
