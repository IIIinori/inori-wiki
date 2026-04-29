# containers.yml

搜索容器配置。

```yaml
containers:
  crate_01:
    type: crate
    location: "90, 65, 180"
    pool: scav_common
    size: 27
    title: "补给箱"
    key: slums_office_key
```

| 字段 | 说明 |
|------|------|
| `type` | 容器类型，对应 `config.yml -> loot.types` |
| `location` | 容器位置 |
| `pool` | 掉落池 ID |
| `size` | 容器 GUI 格数 |
| `title` | 容器标题 |
| `key` | 打开所需钥匙 ID，可选 |
