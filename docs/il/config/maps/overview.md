# 地图配置概览

InoriLoot 有两类地图。

| 类型 | 目录 | 说明 |
|------|------|------|
| Raid | `raid/games/<id>/` | 每次开局复制一个独立副本世界 |
| 常驻 | `persistent/games/<id>/` | 长期运行的 live 世界，按周期刷新 |

每张地图由多个配置文件组成，插件会把这些文件合并成一张地图配置读取。

## Raid 目录

```text
raid/games/slums/
├── options.yml
├── extracts.yml
├── containers.yml
├── airdrops.yml
├── ground-loot.yml
├── mobs.yml
├── objectives.yml
└── npc.yml
```

## 常驻目录

```text
persistent/games/outpost/
├── options.yml
├── extracts.yml
├── containers.yml
├── airdrops.yml
├── ground-loot.yml
├── mobs.yml
├── objectives.yml
└── npc.yml
```

## 坐标格式

常见位置字段支持：

```yaml
location: "world, x, y, z, yaw, pitch"
location: "x, y, z, yaw, pitch"
location: "x, y, z"
```

地图内部配置通常可以省略世界名，插件会使用当前地图世界。
