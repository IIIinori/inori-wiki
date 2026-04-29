# 掉落池配置

路径：`loot/pools/*.yml`

## 基础格式

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

| 字段 | 说明 |
|------|------|
| `rolls` | 抽取次数，可写固定数值或范围 |
| `items` | 物品权重表 |

## rolls

固定次数：

```yaml
rolls: 4
```

范围次数：

```yaml
rolls: 2-5
```

范围表示每次生成时在区间内随机取一个抽取次数。

## 权重

`items` 中的数值是权重，不要求总和为 100。

```yaml
items:
  scrap: 45
  battery: 25
  intel: 10
```

权重越高，被抽中的概率越高。每次 `roll` 都是独立抽取，同一个物品可能被重复抽中。
