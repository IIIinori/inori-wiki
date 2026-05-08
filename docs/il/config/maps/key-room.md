# key-room.yml

## 示例

```yaml
key-rooms:
  default:
    pos1: "120, 64, 210"
    pos2: "124, 68, 214"
    interact: "122.5, 65, 212.5, 0, 0"
    key: slums_gate_key
    key-consume: 1
  room_b:
    pos1: "220, 64, 310"
    pos2: "224, 68, 314"
    interact: "222.5, 65, 312.5, 0, 0"
    key: lab_key
    key-consume: 2
```

| 字段 | 说明 |
|------|------|
| `key-rooms.<id>.pos1` | 清障区域角点 1 |
| `key-rooms.<id>.pos2` | 清障区域角点 2 |
| `key-rooms.<id>.interact` | 交互坐标 |
| `key-rooms.<id>.key` | 交互所需钥匙 ID |
| `key-rooms.<id>.key-consume` | 每次交互消耗的钥匙耐久 |
