# Chemdah：搜索与带出

## `inoriloot loot search`

玩家搜索出一个战利品物品堆时触发。计数值为该物品堆数量，例如搜出 `medkit x3` 会增加 3 进度。

```yaml
find_loot:
  meta:
    name: 搜索战利品
    type: daily
  task:
    search:
      objective: inoriloot loot search
      condition:
        scope: raid
        loot: medkit
        key: office_key
      goal:
        amount: 3
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |

## `inoriloot container open`

玩家打开战利品容器。

```yaml
open_container:
  meta:
    name: 搜索容器
    type: daily
  task:
    open:
      objective: inoriloot container open
      condition:
        scope: raid
        game: factory
        map: outpost
        container: weapon_box
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `container` | 容器 ID |

## `inoriloot bringout item`

玩家成功从 Raid 撤离或离开常驻地图时，对携带物品逐堆统计。计数值为物品堆数量。

```yaml
bringout_item:
  meta:
    name: 物资带出
    type: daily
  task:
    item:
      objective: inoriloot bringout item
      condition:
        scope: raid
        game: factory
        map: outpost
        loot: medkit
        key: office_key
      goal:
        amount: 3
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |

## `inoriloot bringout value`

玩家成功从 Raid 撤离或离开常驻地图时，按本次携带物资总价值计数。

```yaml
bringout_value:
  meta:
    name: 物资价值带出
    type: weekly
  task:
    value:
      objective: inoriloot bringout value
      condition:
        scope: raid
        game: lab
        map: outpost
        min-value: 10000
      goal:
        amount: 10000
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `min-value` | 最低总价值 |
