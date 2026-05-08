# 主配置

文件：`plugins/InoriLootShop/config.yml`

## 示例

```yml
debug: false

database:
  mode: sqlite
  mysql:
    host: 127.0.0.1
    port: 3306
    user: root
    password: root
    database: minecraft
```

| 字段 | 说明 |
|------|------|
| `debug` | 调试模式 |
| `database.mode` | 数据库模式：`sqlite` 或 `mysql` |
| `database.mysql.*` | MySQL 连接信息 |
