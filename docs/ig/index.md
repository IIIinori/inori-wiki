# 快速开始

InoriGuild（主命令 `/inoriguild`，别名 `/ig`）是 Inori 系列的公会插件，提供公会管理、关系、公会战、仓库、GUI、PAPI 与外部 API。

## 安装

| 插件 | 是否必需 | 说明 |
|------|----------|------|
| Vault | 可选 | 使用 `vault:*` 经济时需要 |
| PlayerPoints | 可选 | 使用 `playerpoints:*` 经济时需要 |
| PlaceholderAPI | 可选 | 使用 `%inoriguild_*%` 变量时需要 |
| LuckPerms | 可选 | 启用后自动同步公会角色组/Meta |
| WorldGuard | 可选 | 启用后可绑定区域并进行公会区域保护 |
| AttributePlus | 可选 | `levels.yml` 中启用 `level-buffs` 时需要 |

### 安装步骤

| 步骤 | 说明 |
|------|------|
| 1 | 将 `InoriGuild` 放入 `plugins/` |
| 2 | 按需安装上面的联动插件 |
| 3 | 启动服务器，生成默认配置 |
| 4 | 修改 `config.yml`、`levels.yml`、`roles.yml`、`messages.yml` 与 `gui/*.yml` |
| 5 | 执行 `/ig admin reload` 重载 |

### 默认目录

```text
plugins/InoriGuild/
├── config.yml
├── levels.yml
├── roles.yml
├── messages.yml
├── guilds.db
└── gui/
    ├── main.yml
    ├── members.yml
    ├── applications.yml
    ├── top.yml
    ├── logs.yml
    ├── war.yml
    └── war-detail.yml
```

## 最小流程

```text
创建公会 -> 邀请/申请入会 -> 设置公会资料与公会家 -> 签到/捐献成长 -> 关系与公会战
```

## 首次验证命令

```text
/ig create 测试公会
/ig info
/ig menu
/ig relation
/ig war status
```

