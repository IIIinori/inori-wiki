# 公会战

## 开战前提

1. 双方公会关系需为敌对（`enemy`）。
2. 发起方与应答方需要有公会内部 `war` 权限成员操作。
3. 满足冷却与人数上限等配置限制。

## 指令

```text
/ig war create <公会>
/ig war accept <公会>
/ig war deny <公会>
/ig war status
/ig war join
/ig war leave
/ig war end
```

## 战局状态

| 状态 | 说明 |
|------|------|
| `PENDING` | 待应答（超时自动取消） |
| `ACTIVE` | 进行中（到时自动结算） |
| `ENDED` | 已结束 |
| `CANCELLED` | 超时或取消 |
| `REJECTED` | 被拒绝 |

## 计分与奖励配置

文件：`config.yml` -> `war`

```yml
war:
  pending-timeout-seconds: 600
  duration-seconds: 900
  cooldown-seconds: 1800
  max-participants-per-guild: 10
  score:
    kill: 3
    death: -1
  rewards:
    enabled: true
```

| 字段 | 说明 |
|------|------|
| `pending-timeout-seconds` | 待应答超时 |
| `duration-seconds` | 战斗持续时间 |
| `cooldown-seconds` | 同公会两次战局冷却 |
| `max-participants-per-guild` | 每公会参战人数上限 |
| `score.kill` / `score.death` | 击杀/死亡积分变更 |
| `rewards.*` | 结算后公会与成员奖励 |

## GUI 操作要点

| 页面 | 用途 |
|------|------|
| `gui/war.yml` | 战局总览、我方/敌方参战列表、接受/拒绝、加入/退出/结束 |
| `gui/war-detail.yml` | 单个参战成员详情、刷新、移出参战 |
