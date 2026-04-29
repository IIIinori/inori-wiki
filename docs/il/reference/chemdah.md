# Chemdah 任务接入

## Objective 列表

| Objective | 说明 |
|---|---|
| `inoriloot raid start` | 玩家进入 Raid 对局 |
| `inoriloot raid extract` | 玩家成功撤离 |
| `inoriloot raid end` | 玩家参与的 Raid 结束 |
| `inoriloot persistent enter` | 玩家进入常驻地图 |
| `inoriloot persistent leave` | 玩家离开常驻地图 |
| `inoriloot loot search` | 玩家搜索出战利品 |
| `inoriloot bringout item` | 玩家从 Raid 或常驻地图带出指定物品 |
| `inoriloot bringout value` | 玩家从 Raid 或常驻地图带出指定价值 |
| `inoriloot mob kill` | 玩家击杀 InoriLoot 刷怪点实体 |
| `inoriloot spawner defeat` | 玩家清空一次性刷怪点 |
| `inoriloot objective complete` | 玩家完成地图目标 |
| `inoriloot container open` | 玩家打开战利品容器 |

## 基础副本目标

### `inoriloot raid start`

玩家进入 Raid 对局时计数。

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `session` | 对局 ID |
| `world` | 对局世界名 |

```yaml
enter_factory:
  meta:
    name: 进入工厂
    type: daily
  task:
    start:
      objective: inoriloot raid start
      condition:
        game: factory
      goal:
        amount: 1
```

### `inoriloot raid extract`

玩家成功撤离时计数。

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `session` | 对局 ID |

```yaml
daily_extract_factory:
  meta:
    name: 每日撤离：工厂
    type: daily
  task:
    extract:
      objective: inoriloot raid extract
      condition:
        game: factory
      goal:
        amount: 1
```

### `inoriloot raid end`

玩家参与的 Raid 结束时计数。

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `session` | 对局 ID |
| `reason` | 结束原因文本 |

## 常驻地图目标

### `inoriloot persistent enter`

玩家进入常驻地图时计数。

| 条件 | 说明 |
|---|---|
| `map` | 常驻地图 ID |
| `world` | 常驻地图世界名 |

```yaml
enter_outpost:
  meta:
    name: 前往哨站
    type: main
  task:
    enter:
      objective: inoriloot persistent enter
      condition:
        map: outpost
      goal:
        amount: 1
```

### `inoriloot persistent leave`

玩家离开常驻地图时计数。

| 条件 | 说明 |
|---|---|
| `map` | 常驻地图 ID |
| `world` | 常驻地图世界名 |

## 搜索与容器

### `inoriloot loot search`

玩家搜索出一个战利品物品堆时触发。计数值为该物品堆数量，例如搜出 `medkit x3` 会增加 3 进度。

| 条件 | 说明 |
|---|---|
| `type` | 外部网格类型，例如 `raid_loot_container`、`persistent_loot_container` |
| `scope` | `raid` 或 `persistent` |
| `session` | 对局或常驻 session ID |
| `container` | 容器 ID |
| `target` | 容器 ID 别名 |
| `slot` | 物品所在槽位 |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |
| `rarity` | 物品品质 ID |
| `amount` | 本堆数量 |
| `value` | 本堆价值 |

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

### `inoriloot container open`

玩家打开战利品容器时计数。

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `session` | 对局或常驻 session ID |
| `container` | 容器 ID |
| `target` | 容器 ID 别名 |
| `type` | 容器类型 |
| `pool` | 掉落池 ID |
| `key` | 所需钥匙 ID |
| `airdrop` | 是否为空投容器，`true` 或 `false` |

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

## 带出任务

### `inoriloot bringout item`

玩家成功从 Raid 撤离或离开常驻地图时，对携带物品逐堆统计。计数值为物品堆数量。

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `session` | 对局或常驻 session ID |
| `loot` | InoriLoot 物品 ID |
| `key` | InoriLoot 钥匙 ID |
| `rarity` | 品质 ID |
| `amount` | 本堆数量 |
| `value` | 本堆价值 |
| `min-value` | 本堆最低价值 |
| `max-value` | 本堆最高价值 |

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

### `inoriloot bringout value`

玩家成功从 Raid 撤离或离开常驻地图时，按本次携带物资总价值计数。

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `session` | 对局或常驻 session ID |
| `value` | 总价值 |
| `stacks` | 带出格数 |
| `units` | 带出物品总数量 |
| `min-value` | 最低总价值 |
| `max-value` | 最高总价值 |

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

## 击杀任务

### `inoriloot mob kill`

玩家击杀 InoriLoot 刷怪点产生的实体时计数。Raid 和常驻地图都支持。

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `session` | 对局或常驻 session ID |
| `spawner` | 刷怪点 ID |
| `mob` | 怪物 ID |
| `backend` | 刷怪后端，例如 `mythic` |
| `mode` | 刷怪模式，例如 `once`、`repeating` |

```yaml
kill_scav:
  meta:
    name: 清理游荡者
    type: daily
  task:
    kill:
      objective: inoriloot mob kill
      condition:
        scope: raid
        game: factory
        mob: scav
      goal:
        amount: 20
```

### `inoriloot spawner defeat`

一次性刷怪点被完全清空时计数，适合 Boss 或精英事件任务。

| 条件 | 说明 |
|---|---|
| `scope` | `raid` 或 `persistent` |
| `game` | Raid 地图 ID |
| `map` | 常驻地图 ID |
| `session` | 对局或常驻 session ID |
| `spawner` | 刷怪点 ID |
| `mob` | 怪物 ID |
| `backend` | 刷怪后端 |
| `mode` | 刷怪模式 |

```yaml
defeat_factory_boss:
  meta:
    name: 清除工厂主管
    type: main
  task:
    boss:
      objective: inoriloot spawner defeat
      condition:
        game: factory
        spawner: factory_boss
      goal:
        amount: 1
```

## 地图目标任务

### `inoriloot objective complete`

玩家完成地图机关目标时计数。

| 条件 | 说明 |
|---|---|
| `game` | Raid 地图 ID |
| `session` | 对局 ID |
| `objective` | 地图目标 ID |
| `type` | 目标类型，例如 `generator`、`terminal`、`submit`、`defense` |
| `flag` | 完成 flag |

```yaml
start_generator:
  meta:
    name: 启动备用电源
    type: main
  task:
    objective:
      objective: inoriloot objective complete
      condition:
        game: factory
        objective: generator_a
      goal:
        amount: 1
```

## 组合任务示例

```yaml
factory_contract:
  meta:
    name: 工厂合同
    type: main
  task:
    enter:
      objective: inoriloot raid start
      condition:
        game: factory
      goal:
        amount: 1
    generator:
      objective: inoriloot objective complete
      condition:
        game: factory
        objective: generator_a
      goal:
        amount: 1
    item:
      objective: inoriloot bringout item
      condition:
        game: factory
        loot: intel
      goal:
        amount: 1
    extract:
      objective: inoriloot raid extract
      condition:
        game: factory
      goal:
        amount: 1
```

## 任务奖励脚本

InoriLoot 会注册一组通用 Kether 共享动作。Chemdah 可以在 `agent.completed`、`agent.accepted` 等脚本中直接使用这些动作，不需要再绕命令。

```yaml
agent:
  completed: |-
    il-give-item "medkit" amount 3 to inventory
    il-give-key "office_key" amount 1 to stash
    il-give-pool "medical_pool" rolls 2 to safebox
```

| 动作 | 语法 | 返回值 |
|---|---|---|
| `il-give-item` | `il-give-item "medkit" amount 3 to stash` | 是否成功发放 |
| `il-give-key` | `il-give-key "office_key" amount 1 to safebox` | 是否成功发放 |
| `il-give-pool` | `il-give-pool "medical_pool" rolls 2 to stash` | 是否成功发放 |
| `il-has-item` | `il-has-item "intel" from all` | 玩家是否持有物品 |
| `il-has-key` | `il-has-key "office_key" from stash` | 玩家是否持有钥匙 |
| `il-take-item` | `il-take-item "intel" amount 1 from all` | 是否成功扣除 |
| `il-take-key` | `il-take-key "office_key" amount 1 from stash` | 是否成功扣除 |
| `il-count-item` | `il-count-item "medkit" from all` | 指定来源内物品数量 |
| `il-count-key` | `il-count-key "office_key" from safebox` | 指定来源内钥匙数量 |
| `il-battle-value` | `il-battle-value` / `il-battle-value 1000` | 无参数返回数值，有参数返回是否达标 |
| `il-carry-value` | `il-carry-value` / `il-carry-value 500` | 无参数返回数值，有参数返回是否达标 |

示例：完成任务后发放奖励，同时扣除任务物品。

```yaml
agent:
  completed: |-
    il-take-item "intel" amount 1 from all
    il-give-item "advanced_medkit" amount 2 to stash
    il-give-key "lab_pass" amount 1 to safebox
```

支持的奖励落点 / 查询来源：

| 参数 | 说明 |
|---|---|
| `inventory` | 玩家背包，默认值 |
| `stash` | InoriLoot 仓库 |
| `safebox` | InoriLoot 保险箱 |
| `all` | 查询或扣除时表示背包 + 仓库 + 保险箱；发放时表示尝试找到一个可完整接收奖励的位置 |


## 注意事项

| 项目 | 说明 |
|---|---|
| 任务配置位置 | 任务本体仍写在 Chemdah 的任务配置目录中 |
| 物品识别 | `loot` 和 `key` 使用 InoriLoot 物品/钥匙 ID |
| 价值统计 | 价值来自 InoriLoot 物品配置或物品价值标签 |
| 常驻地图 | 使用 `scope: persistent` 和 `map: <地图ID>` 过滤 |
| Raid 地图 | 使用 `scope: raid` 和 `game: <地图ID>` 过滤 |
| 空投容器 | 可以通过 `inoriloot container open` 的 `airdrop: true` 过滤 |
