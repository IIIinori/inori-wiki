# npc.yml

Raid 地图 NPC 配置。NPC 只会在 Raid 对局中生成。

## Adyeshach

```yaml
npcs:
  trader_01:
    mode: adyeshach
    id: trader_template
    location: "100.5, 65, 200.5, 180, 0"
    visible-distance: 48
```

`id` 填 Adyeshach 中已有的实体 ID。

## Citizens

```yaml
npcs:
  guide_01:
    mode: citizens
    id: "12"
    location: "110.5, 65, 210.5, 90, 0"
    visible-distance: 32
```

`id` 必须是 Citizens 的整数 NPC ID，建议加引号避免 YAML 类型问题。

## 字段

| 字段 | 说明 |
|------|------|
| `mode` | NPC 后端，支持 `adyeshach`、`citizens` |
| `id` | 源 NPC ID |
| `location` | 生成位置 |
| `visible-distance` | 可见距离，可选 |
