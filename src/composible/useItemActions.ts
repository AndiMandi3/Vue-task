import type { Ref } from "vue";

export function useItemActions(selectedUserItemIds: Ref<number[]>, selectedAvailableItemId: Ref<number | null>) {
  const userItemActions = {
    toggle(id: number) {
      const index = selectedUserItemIds.value.indexOf(id);

      if (index !== -1) {
        selectedUserItemIds.value.splice(index, 1);
        return;
      }

      if (selectedUserItemIds.value.length < 6) {
        selectedUserItemIds.value.push(id);
      }
    },
    reset() {
      selectedUserItemIds.value = [];
    },
  };

  const availableItemActions = {
    toggle(id: number) {
      selectedAvailableItemId.value = id;
    },
    reset() {
      selectedAvailableItemId.value = null;
    },
  };

  const resetAllSelections = () => {
    selectedUserItemIds.value = [];
    selectedAvailableItemId.value = null;
  }
  return {
    userItemActions,
    availableItemActions,
    resetAllSelections,
  }
}
