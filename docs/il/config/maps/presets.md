# preset 继承

容器、怪物、目标等配置支持 `preset` 继承，用于减少重复字段。

## 容器预设

```yaml
container-presets:
  basic_crate:
    type: crate
    pool: scav_common
    size: 27

containers:
  crate_01:
    preset: basic_crate
    location: "90, 65, 180"
```

`crate_01` 会继承 `basic_crate` 的 `type`、`pool` 和 `size`。

## 使用建议

- 相同类型的容器建议抽成预设。
- 大量重复的刷怪点参数也可以抽成预设。
- 单独点位只保留 `location` 和少量覆盖字段。
