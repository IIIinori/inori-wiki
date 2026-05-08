# 快速开始

## 前置说明

- 主命令：`/inoriguild`（别名：`/ig`）
- 数据库：`sqlite`（默认）或 `mysql`
- 经济来源：直接在 `config.yml` 中用 `vault:金额` / `playerpoints:金额` 配置

## 基础配置建议

```yml
storage:
  type: sqlite

guild:
  create-cost: vault:1000

contribution:
  daily-sign: 10
  donate-ratio: vault:1
```

## 第一套可用流程

### 1) 创建公会

```text
/ig create 星穹
```

### 2) 邀请或申请

```text
/ig invite 玩家A
/ig apply 星穹
/ig accept 星穹
```

### 3) 打开菜单与管理

```text
/ig menu
/ig settag SG
/ig desc 我们是测试公会
/ig notice 今晚活动集合
```

### 4) 成长

```text
/ig sign
/ig donate 100
/ig top level
```

### 5) 关系与公会战

```text
/ig relation enemy 对方公会
/ig war create 对方公会
/ig war status
```

## 常见检查

| 现象 | 检查项 |
|------|--------|
| 无法扣费创建/捐献 | `create-cost` / `donate-ratio` 的 provider 与已安装经济插件是否一致 |
| 公会 Buff 不生效 | `levels.yml` 的 `level-buffs.enabled` 是否开启，且服务器是否安装 AttributePlus |
| 关系/战局按钮灰色 | 当前角色是否具备对应公会内部权限（见 `roles.yml`） |
| 区域保护不生效 | 服务器是否启用 WorldGuard，且是否已执行 `/ig admin region bind` |

