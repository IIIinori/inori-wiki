# 职位与权限

文件：`plugins/InoriGuild/roles.yml`

## 字段说明

| 字段 | 说明 |
|------|------|
| `display` | 职位显示名 |
| `weight` | 职位权重，越大越高 |
| `permissions` | 公会内部权限列表，支持 `*` |

## 默认角色

| 角色ID | 默认显示 | 典型定位 |
|--------|----------|----------|
| `leader` | 会长 | 全权限 |
| `officer` | 副会长 | 管理与战局 |
| `elite` | 精英 | 协助管理 |
| `member` | 成员 | 基础交互 |

## 公会内部权限对照

| 权限 | 对应功能 |
|------|----------|
| `invite` | 邀请成员 |
| `kick` | 踢出成员 |
| `promote` / `demote` | 升降职 |
| `leader` | 转让会长 |
| `settag` / `desc` / `notice` | 修改公会资料 |
| `sethome` | 设置公会家 |
| `applications` | 审核入会申请 |
| `broadcast` | 公会广播 |
| `chat` | 公会聊天 |
| `home` | 使用公会家传送 |
| `sign` | 每日签到 |
| `donate` | 公会捐献 |
| `relation*` | 关系系统（同盟 / 敌对 / 中立） |
| `war` | 公会战管理 |
| `bank.open` | 打开仓库 |
| `bank.deposit` | 存入仓库 |
| `bank.withdraw` | 取出仓库 |
| `bank.manage` | 仓库管理（覆盖 bank 子权限） |
| `mail.view` | 查看邮件 |
| `mail.send` | 发送邮件 |
| `task.claim` | 领取公会任务奖励 |

> 职位操作遵循权重比较：低权重不能操作同级和高权重。
