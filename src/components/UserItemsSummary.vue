<script setup lang="ts">
interface IProps {
  selectedCount: number,
  total: number,
}

defineProps<IProps>();
</script>

<template>
  <div class="user-items-summary">Selected: {{ selectedCount }} / {{ total }}</div>
</template>