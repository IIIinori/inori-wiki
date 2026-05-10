# 主配置

文件：`plugins/InoriGuild/config.yml`

## settings / storage

```yml
settings:
  debug: false

storage:
  type: yaml          # yaml / mysql
  yaml:
    folder: data
    flush-interval-seconds: 60
  mysql:
    host: localhost
    port: 3306
    database: minecraft
    username: root
    password: password
    use-ssl: false
```

| 字段 | 说明 |
|------|------|
| `storage.type` | `yaml`（默认）或 `mysql`。切换后需要重启 |
| `storage.yaml.folder` | YAML 存储子目录，相对 `plugins/InoriGuild/` |
| `storage.yaml.flush-interval-seconds` | 批量刷盘间隔，0 = 每次写入立即刷盘 |
| `storage.mysql.*` | MySQL 连接信息，用户需具备建表权限 |

## guild（公会基础）

```yml
guild:
  name-min-length: 2
  name-max-length: 12
  tag-min-length: 2
  tag-max-length: 5
  unique-tag: false
  blocked-words: []
  max-members-base: 20
  invite-expire-seconds: 120
  leave-cooldown-seconds: 600
  disband-confirm-seconds: 30
  create-cost: vault:1000
```

| 字段 | 说明 |
|------|------|
| `blocked-words` | 名称 / 标签 / 简介 / 公告敏感词 |
| `leave-cooldown-seconds` | 离会后加入 / 创建冷却 |
| `create-cost` | 创建费用，格式 `vault:1000` 或 `playerpoints:1000` |

## bank（公会仓库）

```yml
bank:
  enabled: true
  size: 27
```

| 字段 | 说明 |
|------|------|
| `enabled` | 是否启用公会仓库，关闭后 `/ig bank` 不可用 |
| `size` | 仓库格数，必须为 9 的倍数，最大 54 |

> 仓库权限在 `roles.yml` 中通过 `bank.open / deposit / withdraw / manage` 控制。

## home / contribution

```yml
home:
  teleport-delay-seconds: 3
  teleport-cooldown-seconds: 60
  cancel-on-move: true
  cancel-on-damage: true

contribution:
  daily-sign: 10
  donate-ratio: vault:1
  streak-rewards:
    3:
      contribution: 20
    7:
      contribution: 50
      vault: 500
    14:
      contribution: 100
      commands:
        - "give {player} minecraft:golden_apple 1"
    30:
      contribution: 300
      vault: 5000
      broadcast: true
```

| 字段 | 说明 |
|------|------|
| `home.*` | 公会家前摇、冷却与中断条件 |
| `daily-sign` | 每日签到贡献（同量加公会经验） |
| `donate-ratio` | 捐献换算，格式 `vault:倍率` 或 `playerpoints:倍率` |
| `streak-rewards.<N>.contribution` | 连签到第 N 天的额外贡献 |
| `streak-rewards.<N>.vault` / `playerpoints` | 连签奖励的货币 |
| `streak-rewards.<N>.commands` | 控制台命令，占位符 `{player} / {player_uuid} / {streak}` |
| `streak-rewards.<N>.broadcast` | `true` 时在公会内广播 `sign-streak-broadcast` |

> `donate-ratio` 里的 `vault / playerpoints` 同时决定捐献所用经济来源。连签到达最高档后 streak 自动归零。

## relation / war

```yml
relation:
  change-cooldown-seconds: 120
  request-expire-seconds: 300
  max-allies: 0

war:
  pending-timeout-seconds: 600
  duration-seconds: 900
  auto-check-interval-seconds: 5
  cooldown-seconds: 1800
  memory-keep-ended-seconds: 3600
  max-participants-per-guild: 10
  score:
    kill: 3
    death: -1
  rewards:
    enabled: true
    winner:
      fund: 100
      exp: 100
      contribution-per-participant: 20
    loser:
      exp: 30
      contribution-per-participant: 8
```

| 字段 | 说明 |
|------|------|
| `relation.max-allies` | 同盟上限，`0` 为不限 |
| `war.pending-timeout-seconds` | 待应答超时 |
| `war.duration-seconds` | 战斗时长 |
| `war.cooldown-seconds` | 战局冷却 |
| `war.max-participants-per-guild` | 每公会参战上限 |
| `war.score.*` | 击杀 / 死亡积分变化 |
| `war.rewards.*` | 结算奖励，`enabled=false` 仅记录日志 |

## mail（公会邮件）

```yml
mail:
  capacity-per-guild: 30
  expire-hours: 168
  max-attachments: 9
  cleanup-interval-minutes: 10
```

| 字段 | 说明 |
|------|------|
| `capacity-per-guild` | 每公会最多保留邮件数，`0` 不限（超出删最旧） |
| `expire-hours` | 邮件过期小时数，`0` 表示不过期 |
| `max-attachments` | 单封邮件最多附件槽数 |
| `cleanup-interval-minutes` | 过期清理调度间隔 |

> 查看 / 发送权限由 `roles.yml` 的 `mail.view` / `mail.send` 控制。

## confirm / top / pagination / social

```yml
confirm:
  expire-seconds: 10

top:
  cache-seconds: 5

pagination:
  list-page-size: 8
  members-page-size: 10
  applications-page-size: 8
  logs-page-size: 8
  top-page-size: 10
  relations-page-size: 8

social:
  member-online-notify: true
  member-offline-notify: true
  show-guild-notice-on-join: true
```

| 字段 | 说明 |
|------|------|
| `confirm.expire-seconds` | 解散 / 转让等二次确认超时 |
| `top.cache-seconds` | 排行缓存秒数，0 为每次重算 |
| `pagination.*` | 各分页命令与 GUI 的每页条数 |
| `social.*` | 上 / 下线通知、加入服务器时显示公告 |
