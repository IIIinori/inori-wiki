# 主配置

文件：`plugins/InoriGuild/config.yml`

## settings / storage

```yml
settings:
  debug: false

storage:
  type: sqlite
  sqlite:
    file: guilds.db
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
| `storage.type` | `sqlite` / `mysql` |
| `storage.sqlite.file` | SQLite 文件名 |
| `storage.mysql.*` | MySQL 连接信息 |

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
| `blocked-words` | 名称/标签/简介/公告敏感词 |
| `leave-cooldown-seconds` | 离会后加入/创建冷却 |
| `create-cost` | 创建费用，格式 `vault:1000` 或 `playerpoints:1000` |

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
```

| 字段 | 说明 |
|------|------|
| `home.*` | 公会家前摇、冷却与中断条件 |
| `daily-sign` | 每日签到贡献（同量加公会经验） |
| `donate-ratio` | 捐献换算，`贡献 = 捐献金额 * 倍率` |

> `donate-ratio` 里的 `vault/playerpoints` 同时决定捐献时使用的经济来源。

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
```

| 字段 | 说明 |
|------|------|
| `relation.max-allies` | 同盟上限，`0` 为不限 |
| `war.pending-timeout-seconds` | 待应答超时 |
| `war.duration-seconds` | 战斗时长 |
| `war.cooldown-seconds` | 战局冷却 |
| `war.max-participants-per-guild` | 每公会参战上限 |

## pagination

```yml
pagination:
  list-page-size: 8
  members-page-size: 10
  applications-page-size: 8
  logs-page-size: 8
  top-page-size: 10
  relations-page-size: 8
```

用于命令与 GUI 的分页容量控制。

