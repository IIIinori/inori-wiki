# PlaceholderAPI

前提：服务器已安装 PlaceholderAPI，且 InoriGuild 成功注册扩展。

统一前缀：`%inoriguild_*%`

## 基础变量

| 变量 | 说明 |
|------|------|
| `%inoriguild_name%` | 公会名称 |
| `%inoriguild_tag%` | 公会标签 |
| `%inoriguild_role%` | 玩家职位显示名 |
| `%inoriguild_level%` | 公会等级 |
| `%inoriguild_leader_name%` | 会长名字 |
| `%inoriguild_leader%` | 会长 UUID |
| `%inoriguild_description%` | 公会简介 |
| `%inoriguild_notice%` | 公会公告 |

## 数值变量

| 变量 | 说明 |
|------|------|
| `%inoriguild_contribution%` | 玩家贡献 |
| `%inoriguild_members%` | 当前成员数 |
| `%inoriguild_max_members%` | 当前等级成员上限 |
| `%inoriguild_exp%` | 公会经验 |
| `%inoriguild_fund%` | 公会资金/点数池 |

## 排名变量

| 变量 | 说明 |
|------|------|
| `%inoriguild_rank_level%` | 等级排行 |
| `%inoriguild_rank_fund%` | 资金排行 |
| `%inoriguild_rank_money%` | 同 `rank_fund` |
| `%inoriguild_rank_contribution%` | 贡献排行 |
| `%inoriguild_rank_members%` | 人数排行 |

## 关系变量

| 变量 | 说明 |
|------|------|
| `%inoriguild_relations%` | 关系总数 |
| `%inoriguild_allies%` | 同盟数 |
| `%inoriguild_relation_allies%` | 同盟数（别名） |
| `%inoriguild_enemies%` | 敌对数 |
| `%inoriguild_relation_enemies%` | 敌对数（别名） |

## 公会战变量

| 变量 | 说明 |
|------|------|
| `%inoriguild_war_status%` | 战局状态（无/待应答/进行中等） |
| `%inoriguild_war_enemy%` | 当前对手公会名 |
| `%inoriguild_war_score%` | 当前比分（我方:敌方） |
| `%inoriguild_war_joined%` | 玩家是否已参战（`true/false`） |
| `%inoriguild_war_remaining%` | 当前战局剩余秒数 |
| `%inoriguild_war_joined_count%` | 当前公会参战人数 |

