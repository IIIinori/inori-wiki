# 命令

## 主命令

| 命令 | 别名 | 说明 |
|------|------|------|
| `/inoriloot` | `/il` | 玩家主命令 |
| `/inorilootteam` | `/ilt` | 队伍命令 |
| `/inorilootadmin` | `/ila` | 管理命令 |
| `/inorilootdev` | `/ild` | 测试命令 |

## 玩家命令

| 命令 | 说明 |
|------|------|
| `/il queue {地图ID}` | 加入 Raid 匹配队列 |
| `/il leave` | 离开当前匹配队列 |
| `/il persistent enter {地图ID}` | 进入常驻地图 |
| `/il persistent leave` | 离开常驻地图 |
| `/il stash` | 打开仓库 |
| `/il safebox` | 打开保险箱 |

## 队伍命令

| 命令 | 说明 |
|------|------|
| `/ilt invite {玩家}` | 邀请玩家组队 |
| `/ilt accept` | 接受组队邀请 |
| `/ilt leave` | 离开队伍 |
| `/ilt kick {玩家}` | 踢出队员 |
| `/ilt disband` | 解散队伍 |

## 管理命令

| 命令 | 说明 |
|------|------|
| `/ila reload` | 重载插件 |
| `/ila cleanup` | 清理孤立 Raid 世界 |
| `/ila debug` | 切换调试模式 |
| `/ila import {raid/persistent} {world}` | 导入地图脚手架 |
| `/ila start {地图ID}` | 强制启动 Raid 队列 |
| `/ila stop {对局ID}` | 强制结束对局 |
| `/ila profile stashunlock {玩家} {等级}` | 设置仓库解锁等级 |
| `/ila profile safeboxunlock {玩家} {等级}` | 设置保险箱解锁等级 |
| `/ila chemdah status` | 查看 Chemdah Hook 状态 |
| `/ila chemdah objectives` | 列出 InoriLoot 注册的 Chemdah Objective |
| `/ila chemdah actions` | 列出 InoriLoot 注册的 shared Kether 动作 |
| `/ila chemdah reload` | 重新尝试注册 Chemdah Objective |
| `/ila persistent reload` | 重载全部常驻地图 |
| `/ila persistent reload {地图ID}` | 重载指定常驻地图 |
| `/ila persistent load {地图ID}` | 加载指定常驻地图 live 世界 |
| `/ila persistent refresh {地图ID} {目标}` | 刷新常驻地图运行时 |
| `/ila edit raid {地图ID}` | 打开 Raid 地图编辑器 |
| `/ila edit persistent {地图ID}` | 打开常驻地图编辑器 |

## 测试命令

| 命令 | 说明 |
|------|------|
| `/ild give {itemId}` | 给予测试物品 |
| `/ild give {itemId} {amount}` | 给予指定数量测试物品 |
| `/ild givekey {keyId}` | 给予测试钥匙 |
| `/ild givekey {keyId} {amount}` | 给予指定数量测试钥匙 |
| `/ild givepool {poolId}` | 抽取掉落池 |
| `/ild givepool {poolId} {rolls}` | 抽取指定次数掉落池 |
| `/ild opencontainer {地图ID} {容器ID}` | 打开容器预览 |
| `/ild opencontainer {地图ID} {容器ID} {mode}` | 按模式打开容器预览 |
| `/ild tpcontainer {地图ID} {容器ID}` | 传送到容器 |
| `/ild tpextract {地图ID} {撤离点ID}` | 传送到撤离点 |
| `/ild extract` | 强制自己撤离 |
