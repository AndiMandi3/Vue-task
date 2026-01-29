<script setup lang="ts">
</script>

<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.base-button {
  padding: 10px 15px;
  background-color: #967b7b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>