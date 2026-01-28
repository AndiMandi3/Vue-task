<script setup lang="ts">
import { ref, computed } from "vue";
import { availableItems, userItems } from "@/consts/items.const";
import UserItemsSummary from "@/components/UserItemsSummary.vue";
import SelectedItem from "@/components/SelectedItem.vue";
import UserItemsList from "@/components/UserItemsList.vue";
import AvailableItemsList from "@/components/AvailableItemsList.vue";

const selectedUserItemIds = ref<number[]>([]);
const selectedAvailableItemId = ref<number | null>(null);

const selectedAvailableItem = computed(() => availableItems.find(i => i.id === selectedAvailableItemId.value) ?? null);

const onSelectUserItem = (id: number) => {
  const index = selectedUserItemIds.value.indexOf(id);

  if (index !== -1) {
    selectedUserItemIds.value.splice(index, 1);
    return;
  }

  if (selectedUserItemIds.value.length < 6) {
    selectedUserItemIds.value.push(id);
  }
};

const onSelectAvailableItem = (id: number) => {
  selectedAvailableItemId.value = id;
}

</script>

<template>
  <div class="main-page">
    <div class="main-page__row main-page__row--top">
      <div class="main-page__col">
        <UserItemsSummary 
          :selected-count="selectedUserItemIds.length" 
          :total="6"
        />
      </div>
      <div class="main-page__col">
        <SelectedItem 
          :item="selectedAvailableItem" 
        />
      </div>
    </div>
    

    <div class="main-page__row main-page__row-bottom">
      <div class="main-page__col">
        <UserItemsList 
          :items="userItems" 
          :selected-ids="selectedUserItemIds" 
          @select="onSelectUserItem" 
        />
      </div>
      
      <div class="main-page__col">
        <AvailableItemsList 
          :items="availableItems" 
          :selected-id="selectedAvailableItemId" 
          @select="onSelectAvailableItem" 
        />
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.main-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  gap: 16px;

  &__row {
    display: flex;
    gap: 16px;

    &--top {
      flex: 0 0 auto;
    }

    &--bottom {
      flex: 0 0 auto;
    }
  }

  &__col {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
  }
}
</style>