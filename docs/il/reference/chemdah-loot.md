# Chemdah：搜索与带出

## `inoriloot loot search`

玩家搜索出一个战利品物品堆时触发。计数值为该物品堆数量，例如搜出 `medkit x3` 会增加 3 进度。

```yaml
find_medkit:
  meta:
    name: 医疗物资回收
    type: daily
  task:
    search:
      objective: inoriloot loot search
      condition:
        type: raid_loot_container
        scope: raid
        container: medical_box
        target: medical_box
        slot: 0
        loot: medkit
        rarity: common
        amount: 3
        value: 30
      goal:
        amount: 3

find_office_key:
  meta:
    name: 搜索办公室钥匙
    type: daily
  task:
    search:
      objective: inoriloot loot search
      condition:
        type: raid_loot_container
        scope: raid
        container: key_box
        target: key_box
        slot: 0
        key: office_key
        amount: 1
        value: 100
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `type` | 外部网格类型，例如 `raid_loot_container`、`persistent_loot_container` |
| `scope` | `raid` 或 `persistent` |
| `container` | 容器 ID |
| `target` | 容器 ID 别名 |
| `slot` | 物品所在槽位 |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |
| `rarity` | 物品品质 ID |
| `amount` | 本堆数量 |
| `value` | 本堆价值 |

## `inoriloot container open`

玩家打开战利品容器。

```yaml
open_weapon_crates:
  meta:
    name: 搜索军火箱
    type: daily
  task:
    open:
      objective: inoriloot container open
      condition:
        scope: raid
        game: factory
        container: weapon_box
        target: weapon_box
        type: weapon_rack
        pool: weapon_pool
        key: office_key
        airdrop: false
      goal:
        amount: 5

open_outpost_cache:
  meta:
    name: 搜索哨站补给箱
    type: daily
  task:
    open:
      objective: inoriloot container open
      condition:
        scope: persistent
        map: outpost
        container: supply_cache
        target: supply_cache
        type: cache
        pool: supply_pool
        key: cache_key
        airdrop: false
      goal:
        amount: 3
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `container` | 容器 ID |
| `target` | 容器 ID 别名 |
| `type` | 容器类型 |
| `pool` | 掉落池 ID |
| `key` | 所需钥匙 ID |
| `airdrop` | 是否为空投容器，`true` 或 `false` |

## `inoriloot bringout item`

玩家成功从 Raid 撤离或离开常驻地图时，对携带物品逐堆统计。计数值为物品堆数量。

```yaml
bringout_medkit:
  meta:
    name: 医疗物资带出
    type: daily
  task:
    item:
      objective: inoriloot bringout item
      condition:
        scope: raid
        game: factory
        loot: medkit
        rarity: common
        amount: 3
        value: 30
        min-value: 10
        max-value: 100
      goal:
        amount: 3

bringout_office_key:
  meta:
    name: 钥匙回收
    type: daily
  task:
    item:
      objective: inoriloot bringout item
      condition:
        scope: persistent
        map: outpost
        key: office_key
        amount: 1
        value: 100
        min-value: 50
        max-value: 200
      goal:
        amount: 1
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |
| `rarity` | 品质 ID |
| `amount` | 本堆数量 |
| `value` | 本堆价值 |
| `min-value` | 本堆最低价值 |
| `max-value` | 本堆最高价值 |

## `inoriloot bringout value`

玩家成功从 Raid 撤离或离开常驻地图时，按本次携带物资总价值计数。

```yaml
high_value_extract:
  meta:
    name: 高价值撤离
    type: weekly
  task:
    value:
      objective: inoriloot bringout value
      condition:
        scope: raid
        game: lab
        value: 10000
        stacks: 8
        units: 32
        min-value: 10000
        max-value: 50000
      goal:
        amount: 10000

outpost_supply_value:
  meta:
    name: 哨站物资价值
    type: weekly
  task:
    value:
      objective: inoriloot bringout value
      condition:
        scope: persistent
        map: outpost
        value: 3000
        stacks: 4
        units: 16
        min-value: 3000
        max-value: 20000
      goal:
        amount: 3000
```

配置说明：

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `value` | 总价值 |
| `stacks` | 带出格数 |
| `units` | 带出物品总数量 |
| `min-value` | 最低总价值 |
| `max-value` | 最高总价值 |
