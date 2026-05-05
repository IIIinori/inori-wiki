# 快速开始

## 安装

| 步骤 | 说明 |
|------|------|
| 1 | 将 InoriLoot 放入 `plugins/` 目录 |
| 2 | 安装必需依赖：PlaceholderAPI、ProtocolLib |
| 3 | 启动服务器生成配置 |
| 4 | 修改配置后重启或重载 |

## 目录

```text
plugins/InoriLoot/
├── config.yml
├── profile.yml
├── lang/
├── loot/
│   ├── items/
│   └── pools/
├── raid/
│   ├── world/
│   └── games/
├── persistent/
│   ├── world/
│   └── games/
├── raid-worlds/
├── persistent-worlds/
└── edit-worlds/
```

## 最小流程

```text
配置物品 → 配置掉落池 → 准备地图 → 配置撤离点和容器 → 进入游戏测试
```

## 第一个物品

```yaml
bandage:
  material: PAPER
  amount: 2
  value: 6
  rarity: common
  search: 2
  name: "&f绷带"
```

## 第一个掉落池

```yaml
scav_common:
  rolls: 4
  items:
    scrap: 45
    battery: 25
    intel: 10
    bandage: 15
    office_key: 5
```

## 第一个 Raid 地图

```text
raid/
├── world/slums/
└── games/slums/
    ├── options.yml
    ├── key-room.yml
    ├── extracts.yml
    ├── containers.yml
    ├── airdrops.yml
    ├── ground-loot.yml
    ├── mobs.yml
    ├── objectives.yml
    └── npc.yml
```

`options.yml`：

```yaml
id: slums
display: "贫民区"
mode: solo
world: slums
duration: 900
last: 180
players:
  min: 1
  target: 1
  max: 1
spawns:
  - location: "0.5, 65, 0.5, 0, 0"
```
