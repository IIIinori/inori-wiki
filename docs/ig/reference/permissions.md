# 权限节点

## 命令权限

| 节点 | 默认值 |
|------|--------|
| `inoriguild.command.help` | `true` |
| `inoriguild.command.create` | `true` |
| `inoriguild.command.info` | `true` |
| `inoriguild.command.list` | `true` |
| `inoriguild.command.members` | `true` |
| `inoriguild.command.apply` | `true` |
| `inoriguild.command.applications` | `true` |
| `inoriguild.command.acceptapply` | `true` |
| `inoriguild.command.denyapply` | `true` |
| `inoriguild.command.broadcast` | `true` |
| `inoriguild.command.menu` | `true` |
| `inoriguild.command.logs` | `true` |
| `inoriguild.command.bank` | `true` |
| `inoriguild.command.disband` | `true` |
| `inoriguild.command.invite` | `true` |
| `inoriguild.command.accept` | `true` |
| `inoriguild.command.deny` | `true` |
| `inoriguild.command.leave` | `true` |
| `inoriguild.command.kick` | `true` |
| `inoriguild.command.promote` | `true` |
| `inoriguild.command.demote` | `true` |
| `inoriguild.command.leader` | `true` |
| `inoriguild.command.settag` | `true` |
| `inoriguild.command.desc` | `true` |
| `inoriguild.command.notice` | `true` |
| `inoriguild.command.relation` | `true` |
| `inoriguild.command.war` | `true` |
| `inoriguild.command.chat` | `true` |
| `inoriguild.command.sethome` | `true` |
| `inoriguild.command.home` | `true` |
| `inoriguild.command.sign` | `true` |
| `inoriguild.command.donate` | `true` |
| `inoriguild.command.top` | `true` |

## 管理权限

`inoriguild.admin` 默认 `op`，并包含以下子权限：

| 节点 |
|------|
| `inoriguild.admin.reload` |
| `inoriguild.admin.create` |
| `inoriguild.admin.delete` |
| `inoriguild.admin.region` |
| `inoriguild.admin.setlevel` |
| `inoriguild.admin.addexp` |
| `inoriguild.admin.addfund` |
| `inoriguild.admin.migrate` |
| `inoriguild.admin.setrole` |
| `inoriguild.admin.resetcooldown` |
| `inoriguild.admin.user` |

## 公会内部权限（roles.yml）

这些权限不走 Bukkit 权限插件分配，而是由玩家在公会里的职位决定：

```text
invite, kick, promote, demote, leader,
settag, desc, notice, sethome, applications,
broadcast, chat, home, sign, donate,
relation, relation.set, relation.set.ally, relation.set.enemy, relation.set.neutral,
relation.bypass-cooldown, war,
bank.open, bank.deposit, bank.withdraw, bank.manage
```

