# 物品配置

路径：`loot/items/*.yml`

## 基础格式

```yaml
scrap:
  material: IRON_NUGGET
  amount: 4
  value: 5
  rarity: common
  search: 2
  size: "1x1"
  name: "&7金属废料"
```

| 字段 | 说明 |
|------|------|
| `material` | 材质或外部物品引用 |
| `amount` | 生成数量 |
| `value` | 物品价值 |
| `rarity` | 稀有度 ID |
| `search` | 搜索耗时 |
| `size` | 网格尺寸 |
| `name` | 显示名 |
| `lore` | 描述 |
| `key` | 钥匙 ID |
| `key-durability` | 钥匙耐久（用于容器/空投/钥匙房消耗） |

## NBT 标记

外部插件可以通过以下 NBT 读取 InoriLoot 物品的价值和网格尺寸：

| NBT | 来源 | 用途 |
|-----|------|------|
| `inoriloot_battle_value` | `value` | 物品价值检测 |
| `inoriloot_grid_size` | `size` | 网格尺寸检测 |

## 钥匙

带 `key` 字段的物品会被识别为钥匙。

```yaml
office_key:
  material: TRIPWIRE_HOOK
  value: 90
  rarity: epic
  search: 4
  size: "1x2"
  key: "slums_office_key"
  key-durability: 5
  name: "&6办公室钥匙"
```

## 外部物品

| 写法 | 来源 |
|------|------|
| `mm:<物品ID>` | MythicMobs |
| `ni:<物品ID>` | NeigeItems |
| `af:<物品ID>` | AzureFlow |
| `bk:<物品ID>` | Baikiruto |
| `ce:<物品ID>` | CraftEngine |
| `<modid>:<物品ID>` | 模组物品 |

## TaCZ 枪械

TaCZ 枪械使用 `gun-id` 字段。

```yaml
ak47:
  material: IRON_HORSE_ARMOR
  gun-id: tacz:ak47
  name: "&fAK-47"
```
