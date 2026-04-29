# API

获取 API：

```kotlin
val api = InoriLootApiProvider.get() ?: return
```

---

## 总入口

```kotlin
interface InoriLootApi {
    fun playerState(): InoriPlayerStateApi
    fun profileGrid(): InoriProfileGridApi
    fun externalGrid(): InoriExternalGridApi
    fun stash(): InoriStashApi
    fun safeBox(): InoriSafeBoxApi
    fun lootIdentity(): InoriLootIdentityApi
    fun lootRegistry(): InoriLootRegistryApi
    fun lootFactory(): InoriLootFactoryApi
    fun settlement(): InoriSettlementApi
    fun raidSession(): InoriRaidSessionApi
    fun persistent(): InoriPersistentApi
    fun queue(): InoriQueueApi
    fun team(): InoriTeamApi
}
```

---

## PlayerState

```kotlin
interface InoriPlayerStateApi {
    fun isBusy(uuid: UUID): Boolean
    fun getQueueId(uuid: UUID): String?
    fun getSessionId(uuid: UUID): String?
}
```

---

## ProfileGrid

```kotlin
interface InoriProfileGridApi {
    fun stashView(player: Player): InoriGridView
    fun safeBoxView(player: Player): InoriGridView
    fun playerInventoryView(player: Player): InoriGridView
    fun pickupFromStash(player: Player, slot: Int): InoriGridPickupResult
    fun pickupFromSafeBox(player: Player, slot: Int): InoriGridPickupResult
    fun pickupFromPlayerInventory(player: Player, slot: Int): InoriGridPickupResult
    fun placeIntoStash(player: Player, slot: Int, item: ItemStack, size: InoriGridSize? = null): InoriActionResult
    fun placeIntoSafeBox(player: Player, slot: Int, item: ItemStack, size: InoriGridSize? = null): InoriActionResult
    fun placeIntoPlayerInventory(player: Player, slot: Int, item: ItemStack, size: InoriGridSize? = null): InoriActionResult
}
```

---

## ExternalGrid

```kotlin
interface InoriExternalGridApi {
    fun view(player: Player, ref: InoriExternalGridRef): InoriExternalGridView?
    fun pickup(player: Player, ref: InoriExternalGridRef, slot: Int): InoriGridPickupResult
    fun place(player: Player, ref: InoriExternalGridRef, slot: Int, item: ItemStack, size: InoriGridSize? = null): InoriActionResult
    fun restore(ref: InoriExternalGridRef, slot: Int, item: ItemStack): Boolean
    fun close(player: Player, ref: InoriExternalGridRef)
}
```

---

## Stash

```kotlin
interface InoriStashApi {
    fun isEnabled(): Boolean
    fun list(player: Player): List<InoriStashEntry>
    fun count(player: Player, lootId: String): Int
    fun remove(player: Player, lootId: String, amount: Int): InoriActionResult
    fun removeSlot(player: Player, index: Int): InoriActionResult
    fun openGui(player: Player): InoriActionResult
}
```

---

## SafeBox

```kotlin
interface InoriSafeBoxApi {
    fun isEnabled(): Boolean
    fun list(player: Player): List<InoriSafeBoxEntry>
    fun count(player: Player, lootId: String): Int
    fun remove(player: Player, index: Int): InoriActionResult
    fun openGui(player: Player): InoriActionResult
}
```

---

## LootIdentity

```kotlin
interface InoriLootIdentityApi {
    fun getLootId(item: ItemStack?): String?
    fun getKeyId(item: ItemStack?): String?
    fun hasLootId(item: ItemStack?, lootId: String): Boolean
    fun hasKeyId(item: ItemStack?, keyId: String): Boolean
}
```

---

## LootRegistry

```kotlin
interface InoriLootRegistryApi {
    fun getItem(id: String): InoriLootItemInfo?
    fun getItemDisplayName(id: String): String
}
```

---

## LootFactory

```kotlin
interface InoriLootFactoryApi {
    fun createItem(lootId: String, amount: Int = 1): List<ItemStack>
    fun createKey(keyId: String, amount: Int = 1): List<ItemStack>
    fun rollPool(poolId: String, rolls: Int? = null): List<ItemStack>
}
```

---

## Settlement

```kotlin
interface InoriSettlementApi {
    fun summarize(items: List<ItemStack>): InoriLootValueSummary
    fun valueTier(value: Int): String
}
```

---

## RaidSession

```kotlin
interface InoriRaidSessionApi {
    fun getSession(player: Player): InoriRaidSessionInfo?
    fun getSessions(): List<InoriRaidSessionInfo>
    fun forceStop(sessionId: String): InoriActionResult
    fun forceExtract(player: Player): InoriActionResult
}
```

---

## Persistent

```kotlin
interface InoriPersistentApi {
    fun enter(player: Player, mapId: String): InoriActionResult
    fun leave(player: Player): InoriActionResult
    fun getMap(player: Player): InoriPersistentMapInfo?
    fun getMaps(): List<InoriPersistentMapInfo>
    fun refresh(mapId: String, target: String = "all"): InoriActionResult
}
```

---

## Queue

```kotlin
interface InoriQueueApi {
    fun join(player: Player, gameId: String): InoriActionResult
    fun leave(player: Player): InoriActionResult
    fun getQueue(player: Player): InoriQueueInfo?
}
```

---

## Team

```kotlin
interface InoriTeamApi {
    fun getTeam(player: Player): InoriTeamInfo?
    fun invite(inviter: Player, target: Player): InoriActionResult
    fun accept(player: Player): InoriActionResult
    fun leave(player: Player): InoriActionResult
    fun kick(leader: Player, targetName: String): InoriActionResult
    fun disband(player: Player): InoriActionResult
}
```

---

## 事件

```kotlin
InoriRaidStartEvent
InoriRaidEndEvent
InoriRaidPlayerExtractEvent
InoriPersistentEnterEvent
InoriPersistentLeaveEvent
InoriLootSearchCompleteEvent
```
