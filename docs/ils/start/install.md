# 安装

InoriLootShop 是 InoriLoot 的商店与交易行附属插件。

## 前置

| 插件 | 是否必需 | 说明 |
|------|----------|------|
| InoriLoot | 必需 | 提供物品、钥匙、奖池、仓库、保险箱 |
| PlaceholderAPI | 可选 | 用于文本变量和交易表达式变量 |
| Vault | 可选 | 商店交易中使用 `vault:` 时需要 |
| PlayerPoints | 可选 | 商店交易中使用 `playerpoints:` 时需要 |

## 安装步骤

1. 将插件 jar 放入服务器 `plugins` 目录。
2. 确认已安装 InoriLoot。
3. 启动服务器生成默认配置。
4. 修改 `config.yml`、`market.yml` 和 `shops/*.yml`。
5. 使用 `/ils reload` 重载配置。

## 默认文件

```text
plugins/InoriLootShop/
├── config.yml
├── market.yml
├── data.db
└── shops/
    ├── simple.yml
    ├── example.yml
    └── advanced.yml
```
