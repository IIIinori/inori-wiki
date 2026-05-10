# 公会邮件

公会内部的异步信息 / 物品传送通道，支持系统邮件与玩家邮件两种来源。

## 发送方式

| 方式 | 指令 |
|------|------|
| 纯文本 | `/ig mail send <标题> <内容...>` |
| 主手物品为附件 | `/ig mail sendhand <标题> <内容...>` |
| 多物品草稿箱 | `/ig mail compose <标题> [内容...]`，打开 GUI 放入附件后关闭自动发送 |

> 发送需要公会内部权限 `mail.send`（见 `roles.yml`）。

## 接收 / 查看 / 领取

| 指令 | 用途 |
|------|------|
| `/ig mail list` | 列出邮件，自动标注未读 / 可领取 / 已读 / 已领取 |
| `/ig mail read <id>` | 查看单封邮件并自动标记已读，`<id>` 支持短 ID |
| `/ig mail claim <id>` | 领取邮件附件到玩家背包 |

查看邮件需要公会内部权限 `mail.view`。

## 菜单入口

| GUI | 用途 |
|-----|------|
| `gui/mail.yml` | 邮件列表页，可翻页、标记已读、进入详情 |
| `gui/mail-detail.yml` | 单封邮件详情 / 领取附件 |

## 配置

文件：`config.yml` 中的 `mail` 段（见 [主配置](../config/main.md#mail-公会邮件)）

```yml
mail:
  capacity-per-guild: 30
  expire-hours: 168
  max-attachments: 9
  cleanup-interval-minutes: 10
```

| 字段 | 说明 |
|------|------|
| `capacity-per-guild` | 每公会保留邮件上限，超出删最旧（`0` 不限） |
| `expire-hours` | 邮件过期时长，`0` 不过期 |
| `max-attachments` | 单封邮件最大附件槽数 |
| `cleanup-interval-minutes` | 过期清理调度间隔 |

## 状态流转

| 状态 | 触发 |
|------|------|
| 未读 | 邮件被发送给公会，每位成员各自未读 |
| 已读 | 第一次 `/ig mail read` 或在 GUI 打开详情 |
| 可领取 | 邮件包含附件且玩家未领取 |
| 已领取 | 玩家成功调用 `/ig mail claim` |
| 过期 | 超过 `expire-hours`，下一次清理扫描时删除 |

## 占位符（messages.yml）

| 占位符 | 说明 |
|--------|------|
| `{title}` | 邮件标题 |
| `{player}` | 发件人名字 |
| `{guild}` | 公会名 |
