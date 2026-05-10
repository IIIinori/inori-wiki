# API

## 获取 API

```java
RegisteredServiceProvider<InoriGuildAPI> provider =
    Bukkit.getServicesManager().getRegistration(InoriGuildAPI.class);
if (provider != null) {
    InoriGuildAPI api = provider.getProvider();
}
```

## 入口接口

| 接口 | 说明 |
|------|------|
| `InoriGuildAPI#guilds()` | 公会维度 API |
| `InoriGuildAPI#members()` | 成员维度 API |
| `InoriGuildAPI#getVersion()` | 插件版本 |

## GuildApi 常用方法

| 方法 | 说明 |
|------|------|
| `getGuildById / getGuildByName / getGuildByPlayer` | 查询公会 |
| `getGuilds()` | 全部公会视图 |
| `getTopGuilds(type, limit)` | 排行查询 |
| `addGuildExp / addGuildFund` | 增加经验 / 资金 |
| `getRelationType / countRelations` | 关系查询 |
| `getIncomingRelationRequestsByPlayer` | 玩家可见同盟申请 |

## MemberApi 常用方法

| 方法 | 说明 |
|------|------|
| `getMember(UUID)` | 查询成员视图 |
| `hasGuild / isSameGuild` | 公会归属判断 |
| `hasGuildPermission` | 职位权限判断 |
| `getRole / getRoles` | 角色信息 |
| `addContribution` | 增加成员贡献 |

## 视图对象

| 视图 | 关键字段 |
|------|----------|
| `GuildView` | `id / name / tag / level / exp / money / memberCount / maxMembers` |
| `GuildMemberView` | `playerUuid / playerName / guildId / roleId / roleName / contribution` |
| `GuildRoleView` | `id / displayName / weight / permissions` |
| `GuildRelationRequestView` | `sourceGuild / targetGuild / relationTypeId / remainingSeconds` |

## API 事件（`inori.inoriguild.api.event`）

所有对外事件统一在此包下，参数为只读视图对象（`GuildView` / `GuildMemberView` 等）。

| 事件 | 可取消 | 字段 |
|------|--------|------|
| `GuildCreateEvent` | 是 | `guild`, `creator` |
| `GuildDisbandEvent` | 是 | `guild`, `actorUuid` |
| `GuildMemberJoinEvent` | 是 | `guild`, `member` |
| `GuildMemberKickEvent` | 是 | `guild`, `member`, `actorUuid` |
| `GuildMemberLeaveEvent` | 否 | `guild`, `member` |
| `GuildRoleChangeEvent` | 是 | `guild`, `member`, `oldRoleId`, `newRoleId`, `actorUuid` |
| `GuildRelationChangeEvent` | 是 | `sourceGuild`, `targetGuild`, `oldRelationId`, `newRelationId`, `actorUuid` |
| `GuildHomeTeleportEvent` | 是 | `guild`, `member`, `location` |
| `GuildChatEvent` | 是（异步） | `guild`, `member`, `message` |
| `GuildLevelUpEvent` | 否 | `guild`, `oldLevel`, `newLevel` |
| `GuildContributionChangeEvent` | 否 | `guild`, `member`, `amount`, `reason` |
| `GuildTaskCompleteEvent` | 否 | `guild`, `taskId`, `templateId` |

## 写操作返回

`addGuildExp`、`addGuildFund`、`addContribution` 返回 `GuildOperationResult`：

| 字段 | 说明 |
|------|------|
| `isSuccess()` | 是否成功 |
| `getMessage()` | 结果消息键（如 `admin-done`、`guild-not-found`） |
