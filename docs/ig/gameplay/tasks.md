# 公会任务

## 结构总览

| 文件 | 作用 |
|------|------|
| `tasks.yml` | 任务系统全局设置（刷新时间、抽取策略、数量） |
| `tasks/*.yml` | 任务模板，每个文件顶层是 `任务ID -> 任务定义` 的 map |

模板文件可以按主题分组（如 `combat.yml`、`mining.yml`），开启 `scan-subdirectories` 后还可放到子目录。

## 全局设置（tasks.yml）

```yml
settings:
  daily-refresh: "04:00"
  weekly-refresh: "MON 04:00"
  daily-count: 3
  weekly-count: 2
  once-count: 0
  season-count: 0
  season-hours: 720
  pick-strategy: by-level     # random / by-level / sequential
  claim-timeout-hours: 48
  contribution-weighted: true
  auto-claim: false
  scan-subdirectories: false
```

| 字段 | 说明 |
|------|------|
| `daily-refresh` / `weekly-refresh` | 按服务器时区刷新时刻 |
| `*-count` | 每次刷新为每个公会生成的任务数量，`0` 不生成 |
| `season-hours` | 赛季任务默认过期时长（小时） |
| `pick-strategy` | 抽取策略：随机 / 按等级门槛 / 按文件顺序 |
| `claim-timeout-hours` | 完成后未领取的保留小时数 |
| `contribution-weighted` | `true` 按贡献比例分配奖励，`false` 参与即等额 |
| `auto-claim` | 完成时是否自动领取 |
| `scan-subdirectories` | 是否递归扫描 `tasks/` 子目录 |

## 任务模板字段

```yml
kill-zombie:
  period: daily
  display: "&a[每日] 清理僵尸"
  icon: ZOMBIE_HEAD
  lore:
    - "&7击杀 &e{target} &7只僵尸"
    - "&7进度: &a{progress}&7/{target}"
  trigger: KILL_ENTITY
  conditions:
    entity: ZOMBIE
  target: 100
  min-level: 1
  rewards:
    fund: 200
    exp: 150
    contribution-per-member: 10
    commands: []
    broadcast: false
```

| 字段 | 说明 |
|------|------|
| `period` | 任务周期：`daily` / `weekly` / `once` / `season` |
| `display` | 菜单与聊天提示的显示名 |
| `icon` | GUI 中使用的材质 |
| `lore` | 物品 lore，支持 `{progress}` / `{target}` 等占位符 |
| `trigger` | 触发器类型，见下表 |
| `conditions` | 触发条件，键名由触发器决定（如 `entity` / `material`） |
| `target` | 完成所需进度 |
| `min-level` | 该任务对公会等级的最低要求 |
| `rewards.fund` / `rewards.exp` | 公会整体奖励（资金 / 经验） |
| `rewards.contribution-per-member` | 每个成员的贡献奖励基数 |
| `rewards.commands` | 发奖时执行的控制台命令 |
| `rewards.broadcast` | 是否全服广播 |

## 触发器一览

| 类型 | 含义 | 常用条件键 |
|------|------|-----------|
| `KILL_ENTITY` | 击杀普通生物 | `entity`, `spawner` |
| `KILL_PLAYER` | 击杀玩家 | `same_guild`, `in_war` |
| `DEAL_DAMAGE` | 造成伤害 | `target_type`, `amount` |
| `TAKE_DAMAGE` | 受到伤害 | `cause`, `amount` |
| `BREAK_BLOCK` | 破坏方块 | `material`, `natural` |
| `PLACE_BLOCK` | 放置方块 | `material` |
| `HARVEST_CROP` | 收获作物 | `material`, `mature` |
| `CRAFT_ITEM` | 合成物品 | `material`, `amount` |
| `SMELT_ITEM` | 冶炼产出 | `material`, `amount` |
| `ENCHANT_ITEM` | 附魔物品 | `level` |
| `FISH_CATCH` | 钓上物品 | `material` |
| `TAME` / `BREED` | 驯服 / 繁殖 | `entity` |
| `CONSUME_ITEM` | 消耗食物 / 药水 | `material` |
| `ENTER_DIMENSION` | 跨维度 | `world`, `dimension` |
| `VISIT_BIOME` | 进入新群系 | `biome` |
| `REACH_LEVEL` | 玩家经验等级 | `level` |
| `LOGIN_DAYS` | 每日首次登录 | — |
| `WALK_DISTANCE` | 累计位移（米） | `world`, `amount` |
| `SIGN_COUNT` | 签到次数 | — |
| `DONATE_FUND` | 捐献金额 | `amount` |
| `CONTRIBUTION_TOTAL` | 贡献累计（非 task-reward） | `amount` |
| `BANK_DEPOSIT` / `BANK_WITHDRAW` | 仓库操作 | `amount` |
| `MEMBER_JOIN` | 公会成员加入 | — |
| `GUILD_LEVEL_UP` | 公会升级 | `new_level` |
| `DAILY_ONLINE_MEMBERS` | 每分钟在线成员阈值 | `online` |
| `PLAY_TIME` | 在线时长（分钟） | `amount` |
| `WAR_KILL` / `WAR_WIN` / `WAR_SCORE` / `WAR_PARTICIPATE` | 公会战相关 | — |
| `MYTHIC_KILL` | MythicMobs 击杀 | `mob_id` |
| `PLACEHOLDER_COMPARE` | 按 PAPI 变量比对 | `placeholder`, `op`, `threshold` |
| `CUSTOM_SCRIPT` | 自定义脚本扩展 | 视实现而定 |

## 玩家指令

| 指令 | 说明 |
|------|------|
| `/ig task list` | 列出进行中 / 可领取的任务 |
| `/ig task info <id>` | 详情与贡献榜（支持短 ID 前缀） |
| `/ig task claim <id>` | 领取奖励（需 `task.claim` 权限） |
| `/ig task history [页码]` | 历史任务 |
| `/ig task top [页码]` | 任务贡献排行 |

## 管理员指令

| 指令 | 说明 |
|------|------|
| `/ig admin task refresh <公会> <daily/weekly/once/season>` | 手动刷新某公会某周期的任务 |
| `/ig admin task list <公会>` | 查看公会全部任务 |

## 常见排查

| 现象 | 检查项 |
|------|--------|
| 任务不刷新 | `settings.daily-refresh` / `weekly-refresh` 格式，以及对应周期是否设置了 `*-count` |
| 模板不加载 | 文件是否在 `tasks/` 下，子目录模板需要 `scan-subdirectories: true` |
| 完成不发奖励 | 确认 `rewards.contribution-per-member / fund / exp` 是否大于 0，或 `auto-claim` 与 `/ig task claim` 是否被拦截 |
| `MYTHIC_KILL` 不生效 | 服务器是否启用 MythicMobs，事件类路径是否被识别 |
