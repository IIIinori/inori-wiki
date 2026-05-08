# 指令

## 主命令

| 命令 | 别名 | 说明 |
|------|------|------|
| `/inoriguild ...` | `/ig ...` | InoriGuild 主命令 |

## 玩家基础

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig help [页码]` | `inoriguild.command.help` | 帮助页 |
| `/ig menu` / `/ig gui` | `inoriguild.command.menu` | 打开公会主菜单 |
| `/ig create <名称>` | `inoriguild.command.create` | 创建公会 |
| `/ig info [公会/玩家]` | `inoriguild.command.info` | 查看公会信息 |
| `/ig list [name/level/contribution/fund/members] [页码]` | `inoriguild.command.list` | 公会列表 |
| `/ig members [公会] [页码]` | `inoriguild.command.members` | 成员列表 |
| `/ig logs [公会] [页码]` | `inoriguild.command.logs` | 公会日志 |
| `/ig top [level/contribution/fund/members] [页码]` | `inoriguild.command.top` | 排行榜 |

## 成员流转

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig invite <玩家>` | `inoriguild.command.invite` | 邀请玩家 |
| `/ig accept [公会]` | `inoriguild.command.accept` | 接受邀请 |
| `/ig deny [公会]` | `inoriguild.command.deny` | 拒绝邀请 |
| `/ig apply <公会>` | `inoriguild.command.apply` | 申请入会 |
| `/ig applications [页码]` | `inoriguild.command.applications` | 查看申请 |
| `/ig acceptapply <玩家>` | `inoriguild.command.acceptapply` | 同意申请 |
| `/ig denyapply <玩家>` | `inoriguild.command.denyapply` | 拒绝申请 |
| `/ig leave` | `inoriguild.command.leave` | 退出公会 |
| `/ig disband [confirm]` | `inoriguild.command.disband` | 解散公会 |

## 职位与资料

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig kick <玩家>` | `inoriguild.command.kick` | 踢出成员 |
| `/ig promote <玩家>` | `inoriguild.command.promote` | 升职 |
| `/ig demote <玩家>` | `inoriguild.command.demote` | 降职 |
| `/ig leader <玩家>` | `inoriguild.command.leader` | 转让会长（需确认） |
| `/ig settag <标签>` | `inoriguild.command.settag` | 修改标签 |
| `/ig desc <内容>` | `inoriguild.command.desc` | 修改简介 |
| `/ig notice <内容>` | `inoriguild.command.notice` | 修改公告 |
| `/ig broadcast <内容>` | `inoriguild.command.broadcast` | 公会广播 |

## 互动与成长

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig chat [消息]` | `inoriguild.command.chat` | 公会频道切换/发言 |
| `/ig sethome` | `inoriguild.command.sethome` | 设置公会家 |
| `/ig home` | `inoriguild.command.home` | 传送公会家 |
| `/ig sign` | `inoriguild.command.sign` | 每日签到 |
| `/ig donate <金额>` | `inoriguild.command.donate` | 捐献并转化贡献 |
| `/ig bank` | `inoriguild.command.bank` | 打开公会仓库 |

## 关系与公会战

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig relation [页码]` | `inoriguild.command.relation` | 查看关系 |
| `/ig relation requests [页码]` | `inoriguild.command.relation` | 查看同盟申请 |
| `/ig relation ally/enemy/neutral <公会>` | `inoriguild.command.relation` | 修改关系 |
| `/ig relation accept/deny <公会>` | `inoriguild.command.relation` | 处理同盟申请 |
| `/ig war create <公会>` | `inoriguild.command.war` | 发起公会战 |
| `/ig war accept/deny <公会>` | `inoriguild.command.war` | 处理战局请求 |
| `/ig war status` | `inoriguild.command.war` | 查看战局状态 |
| `/ig war join/leave/end` | `inoriguild.command.war` | 加入/退出/结束战局 |

## 管理命令

| 指令 | 权限节点 | 用途 |
|------|----------|------|
| `/ig admin reload` | `inoriguild.admin.reload` | 重载配置与缓存 |
| `/ig admin migrate` | `inoriguild.admin.migrate` | 执行数据库迁移 |
| `/ig admin create <名称> <会长>` | `inoriguild.admin.create` | 管理创建公会 |
| `/ig admin delete <公会> confirm` | `inoriguild.admin.delete` | 删除公会 |
| `/ig admin region bind <公会> <world> <region>` | `inoriguild.admin.region` | 绑定 WG 区域 |
| `/ig admin region unbind <公会>` | `inoriguild.admin.region` | 解绑 WG 区域 |
| `/ig admin region info <公会>` | `inoriguild.admin.region` | 查询绑定信息 |
| `/ig admin setlevel <公会> <等级>` | `inoriguild.admin.setlevel` | 设置公会等级 |
| `/ig admin addexp <公会> <值>` | `inoriguild.admin.addexp` | 增加公会经验 |
| `/ig admin addfund <公会> <值>` | `inoriguild.admin.addfund` | 增加公会资金 |
| `/ig admin setrole <玩家> <职位>` | `inoriguild.admin.setrole` | 设置成员职位 |
| `/ig admin resetcooldown <玩家>` | `inoriguild.admin.resetcooldown` | 重置公会家冷却 |
| `/ig admin user <玩家>` | `inoriguild.admin.user` | 查询玩家公会状态 |

