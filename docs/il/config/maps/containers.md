# containers.yml

搜索容器配置。

```yaml
containers:
  crate_01:
    type: med_box
    location: "90, 65, 180"
    pool: scav_common
    size: 27
    key: slums_office_key
    key-consume: 1
```

| 字段 | 说明 |
|------|------|
| `type` | 容器类型，对应 `config.yml -> loot.types` |
| `location` | 容器位置 |
| `pool` | 掉落池 ID |
| `size` | 容器 GUI 格数 |
| `key` | 打开所需钥匙 ID，可选 |
| `key-consume` | 每次开启消耗的钥匙耐久，默认 `1` |
