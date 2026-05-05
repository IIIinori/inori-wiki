# 主配置

文件：`plugins/InoriLoot/config.yml`

## options

```yaml
options:
  lang: zh_CN.yml
  mode: InoriLoot
  debug: false
```

| 字段 | 说明 |
|------|------|
| `lang` | 语言文件 |
| `mode` | 界面模式：`InoriLoot`、`DragonCore`、`ArcartX` |
| `debug` | 调试模式 |

## database

```yaml
database:
  mode: sqlite
  mysql:
    host: 127.0.0.1
    port: 3306
    user: root
    password: root
    database: minecraft
```

| 字段 | 说明 |
|------|------|
| `mode` | `sqlite` 或 `mysql` |
| `mysql.*` | MySQL 连接信息 |

## return

```yaml
return:
  world: world
  location: 0.5, 100, 0.5, 0, 0
```

玩家失败、离开或管理员强制结束时会回到这里。

## queue / team

```yaml
queue:
  countdown: 30
  reconnect: 60
team:
  invite: 60
```

| 字段 | 说明 |
|------|------|
| `queue.countdown` | 满足人数后的开局倒计时 |
| `queue.reconnect` | Raid 断线重连宽限时间 |
| `team.invite` | 组队邀请有效期 |

## rescue

```yaml
rescue:
  downed: 25
  revive: 8
  revives: 1
  health: 0.3
  bandage: true
```

Raid 倒地和扶起配置。

## persistent

```yaml
persistent:
  corpse-protection: 300
  corpse-expiration: 1800
  downed:
    enabled: true
    seconds: 25
    revive: 8
    health: 0.3
    max-revives: 3
    bandage: false
```

常驻地图遗留物和倒地配置。

## loot

```yaml
loot:
  rarities:
    common: "&7普通"
    uncommon: "&a进阶"
    rare: "&9稀有"
    epic: "&5高危"
  item-lore:
    rarity:
      - "&8品质: {0}"
    value:
      - "&8价值: &6{0}"
    key-durability:
      - "&8耐久: &f{0}&8/&f{1}"
  types:
    crate:
      name: "补给木箱"
      mult: 1.0
      keep: false
      hidden: ORANGE_STAINED_GLASS_PANE
      search: YELLOW_STAINED_GLASS_PANE
```

| 节点 | 说明 |
|------|------|
| `rarities` | 稀有度显示名 |
| `item-lore` | 物品 Lore 模板（品质、价值、钥匙耐久） |
| `types` | 搜索容器类型 |

## raid

```yaml
raid:
  duration: 900
  last: 180
  prefix: "raid_active"
```

Raid 默认时长、最后阶段和运行时世界前缀。

## bungeecord

```yaml
bungeecord:
  enable: false
  config-path: ""
  lobby-server: "lobby"
  raid-server-prefix: "raid-"
  persistent-server-prefix: "persistent-"
```

跨服模式配置。
