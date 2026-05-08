# 公会关系

## 关系类型

| 类型 | 命令关键字 | 说明 |
|------|------------|------|
| 同盟 | `ally` | 走申请-同意/拒绝流程 |
| 敌对 | `enemy` | 可用于公会战前置关系 |
| 中立 | `neutral` | 解除当前关系 |

## 指令流程

### 查看关系

```text
/ig relation
/ig relation <页码>
```

### 发起同盟申请

```text
/ig relation ally <公会名>
```

### 查看并处理申请

```text
/ig relation requests
/ig relation accept <公会名>
/ig relation deny <公会名>
```

### 直接设为敌对/中立

```text
/ig relation enemy <公会名>
/ig relation neutral <公会名>
```

## 关键规则

| 规则 | 配置项 |
|------|--------|
| 修改冷却 | `relation.change-cooldown-seconds` |
| 同盟申请有效期 | `relation.request-expire-seconds` |
| 同盟数量上限（0=不限） | `relation.max-allies` |
| 自己不能改自己关系 | 内置限制 |

## 权限控制（公会内部）

| 权限 | 作用 |
|------|------|
| `relation.set` | 关系修改入口 |
| `relation.set.ally` | 同盟申请/同意/拒绝 |
| `relation.set.enemy` | 设为敌对 |
| `relation.set.neutral` | 设为中立 |
| `relation.bypass-cooldown` | 关系冷却豁免 |

