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
        loot: medkit
      goal:
        amount: 3
```

配置说明：

| 字段 | 说明 |
|---|---|
| `find_medkit` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.search` | 任务条目 ID，可自定义 |
| `task.search.objective` | 固定填写 `inoriloot loot search` |
| `task.search.condition.type` | 外部网格类型，可选，例如 `raid_loot_container`、`persistent_loot_container` |
| `task.search.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.search.condition.session` | 对局或常驻 session ID，可选 |
| `task.search.condition.container` | 容器 ID，可选 |
| `task.search.condition.target` | 容器 ID 别名，可选，等同 `container` |
| `task.search.condition.slot` | 物品所在槽位，可选 |
| `task.search.condition.loot` | InoriLoot 物品 ID，可选 |
| `task.search.condition.key` | InoriLoot 钥匙 ID，可选 |
| `task.search.condition.rarity` | 物品品质 ID，可选 |
| `task.search.condition.amount` | 本堆数量，可选 |
| `task.search.condition.value` | 本堆价值，可选 |
| `task.search.goal.amount` | 需要累计搜索出的物品数量 |

## `inoriloot container open`

玩家打开战利品容器时计数。

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
        type: weapon_rack
      goal:
        amount: 5
```

配置说明：

| 字段 | 说明 |
|---|---|
| `open_weapon_crates` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.open` | 任务条目 ID，可自定义 |
| `task.open.objective` | 固定填写 `inoriloot container open` |
| `task.open.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.open.condition.game` | Raid 地图 ID，可选 |
| `task.open.condition.map` | 常驻地图 ID，可选 |
| `task.open.condition.session` | 对局或常驻 session ID，可选 |
| `task.open.condition.container` | 容器 ID，可选 |
| `task.open.condition.target` | 容器 ID 别名，可选，等同 `container` |
| `task.open.condition.type` | 容器类型，可选 |
| `task.open.condition.pool` | 掉落池 ID，可选 |
| `task.open.condition.key` | 所需钥匙 ID，可选 |
| `task.open.condition.airdrop` | 是否为空投容器，可选，`true` 或 `false` |
| `task.open.goal.amount` | 需要打开容器的次数 |

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
      goal:
        amount: 3
```

配置说明：

| 字段 | 说明 |
|---|---|
| `bringout_medkit` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.item` | 任务条目 ID，可自定义 |
| `task.item.objective` | 固定填写 `inoriloot bringout item` |
| `task.item.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.item.condition.game` | Raid 地图 ID，可选 |
| `task.item.condition.map` | 常驻地图 ID，可选 |
| `task.item.condition.session` | 对局或常驻 session ID，可选 |
| `task.item.condition.loot` | InoriLoot 物品 ID，可选 |
| `task.item.condition.key` | InoriLoot 钥匙 ID，可选 |
| `task.item.condition.rarity` | 品质 ID，可选 |
| `task.item.condition.amount` | 本堆数量，可选 |
| `task.item.condition.value` | 本堆价值，可选 |
| `task.item.condition.min-value` | 本堆最低价值，可选 |
| `task.item.condition.max-value` | 本堆最高价值，可选 |
| `task.item.goal.amount` | 需要累计带出的物品数量 |

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
        min-value: 10000
      goal:
        amount: 10000
```

配置说明：

| 字段 | 说明 |
|---|---|
| `high_value_extract` | 任务 ID，可自定义 |
| `meta.name` | 任务显示名 |
| `meta.type` | 任务类型 |
| `task.value` | 任务条目 ID，可自定义 |
| `task.value.objective` | 固定填写 `inoriloot bringout value` |
| `task.value.condition.scope` | `raid` 或 `persistent`，可选 |
| `task.value.condition.game` | Raid 地图 ID，可选 |
| `task.value.condition.map` | 常驻地图 ID，可选 |
| `task.value.condition.session` | 对局或常驻 session ID，可选 |
| `task.value.condition.value` | 总价值，可选 |
| `task.value.condition.stacks` | 带出格数，可选 |
| `task.value.condition.units` | 带出物品总数量，可选 |
| `task.value.condition.min-value` | 最低总价值，可选 |
| `task.value.condition.max-value` | 最高总价值，可选 |
| `task.value.goal.amount` | 需要累计的带出价值 |
