# key-room.yml

`key-room.yml` 用于配置副本钥匙房交互点、钥匙消耗与清障区域。

## 示例

```yaml
pos1: "120, 64, 210"
pos2: "124, 68, 214"
interact: "122.5, 65, 212.5, 0, 0"
key: slums_gate_key
key-consume: 1
```

| 字段 | 说明 |
|------|------|
| `pos1` | 清障区域角点 1 |
| `pos2` | 清障区域角点 2 |
| `interact` | 交互坐标（发包 marker 展示点） |
| `key` | 交互所需钥匙 ID |
| `key-consume` | 每次交互消耗的钥匙耐久 |

## 行为说明

玩家在交互点触发后，系统会先校验并扣除钥匙耐久，再清除 `pos1-pos2` 区域内所有非空气方块。

`key-room` 已从 `options.yml` 拆分到独立文件，不再使用 `clear-materials`。
