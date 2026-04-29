# 动态价值

动态价值用于交易行参考价和系统回收估值。

## 分类物品价格

价格写在 `categories.*.items`：

```yml
categories:
  materials:
    name: '&f材料'
    icon: IRON_INGOT
    priority: 20
    items:
      - scrap 100 0.15
      - battery 300 0.20

  keys:
    name: '&6钥匙'
    icon: TRIPWIRE_HOOK
    priority: 30
    items:
      - key:slums_office_key 3000 0.10
```

格式：

```text
<物品ID> <参考价值> <浮动比例>
```

示例：

```text
scrap 100 0.15
```

表示 `loot:scrap` 的参考价值为 `100`，动态价值按 `±15%` 浮动。

钥匙需要写完整前缀：

```text
key:slums_office_key 3000 0.10
```

## 动态设置

```yml
price:
  min: 1
  max: 99999999
  buckets: 5
  dynamic:
    enabled: true
    update-days: 3
    history-window-hours: 72
    random-range: 0.15
    max-step: 0.25
    min-multiplier: 0.7
    max-multiplier: 1.3
    history-weight: 0.25
    listing-weight: 0.15
    random-weight: 0.60
```

动态价值只影响新上架参考、价格统计和 quick-sell 估值。旧挂单价格不会被刷新影响。

交易行 GUI 会显示当前动态价值、上期价值和涨跌百分比。
