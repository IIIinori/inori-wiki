# 商店配置

商店文件放在：

```text
plugins/InoriLootShop/shops/
```

## 顶层字段

| 字段 | 说明 |
|------|------|
| `title` | 菜单标题，支持字符串或字符串列表 |
| `title-update` | 标题轮播周期，单位 tick |
| `permission` | 打开权限 |
| `denied` | 无权限提示 |
| `open` | 打开商店时发送的消息或动作 |
| `close` | 关闭商店时发送的消息或动作 |
| `layout` | 菜单布局，每行 9 个字符 |
| `icons` | 图标配置 |

## 布局

```yml
layout:
  - '#########'
  - '#   A   #'
  - '####X####'
```

空格代表空槽，其他字符对应 `icons` 中的图标。

## 图标

```yml
icons:
  '#': GRAY_STAINED_GLASS_PANE

  X:
    material: BARRIER
    name: '&c关闭'
    click: close

  A:
    material: PAPER
    name: '&f绷带包'
    auto-lore: true
    buy: loot:scrap*3 -> loot:bandage*5
```

## 图标字段

| 字段 | 说明 |
|------|------|
| `material` | 材质或展示物品 |
| `name` | 显示名 |
| `lore` | 描述 |
| `amount` | 数量 |
| `custom-model-data` | CustomModelData |
| `glow` | 发光 |
| `flags` | ItemFlag |
| `unbreakable` | 不可破坏 |
| `click` | 点击动作 |
| `buy` | 商品交易 |
| `auto-lore` | 自动生成交易说明 |

## material 写法

| 写法 | 说明 |
|------|------|
| `PAPER` | Bukkit 材质 |
| `loot:<id>` | 展示 InoriLoot 物品 |
| `key:<id>` | 展示 InoriLoot 钥匙 |
| `player:%player_name%` | 玩家头颅 |
| `head:<player>` | 指定玩家头颅 |
| `base64:<value>` | Base64 头颅 |
| `skull:<url>` | texture URL |

## 点击动作

```yml
click: close
```

```yml
click:
  left: stash
  right: safebox
```

```yml
click:
  - '&a商店: &f%shop%'
  - '&a页码: &f%page%/%pages%'
```

| 动作 | 说明 |
|------|------|
| `close` | 关闭菜单 |
| `next` | 下一页 |
| `prev` | 上一页 |
| `stash` | 打开 InoriLoot 仓库 |
| `safebox` | 打开 InoriLoot 保险箱 |
| 普通字符串 | 发送消息 |

## 自动交易 Lore

```yml
auto-lore: true
```

启用后，插件会根据 `buy` 自动追加消耗、获得、冷却、限购说明。
