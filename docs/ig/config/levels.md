# 等级与 Buff

文件：`plugins/InoriGuild/levels.yml`

## 等级配置

```yml
level:
  1:
    required-exp: 0
    max-members: 20
  2:
    required-exp: 1000
    max-members: 25
```

| 字段 | 说明 |
|------|------|
| `required-exp` | 到达该等级所需总经验 |
| `max-members` | 该等级成员上限 |

## 升级奖励

```yml
level-rewards:
  2:
    broadcast: true
    commands:
      - 'say 公会 {guild} 升到了 {level} 级！'
```

| 占位符 | 说明 |
|--------|------|
| `{guild}` | 公会名 |
| `{level}` | 新等级 |
| `{leader}` | 会长名 |
| `{leader_uuid}` | 会长 UUID |

## 公会 Buff（AttributePlus）

```yml
level-buffs:
  enabled: false
  cumulative: true
  source: "INORIGUILD_LEVEL_BUFF"
  levels:
    2:
      - "物理伤害: 5"
    3:
      - "物理伤害: 10"
      - "生命力: 20"
```

| 字段 | 说明 |
|------|------|
| `enabled` | 是否启用公会 Buff |
| `cumulative` | `true`=累加等级；`false`=仅当前等级 |
| `source` | AttributePlus 属性源名 |
| `levels` | 各等级属性列表 |


