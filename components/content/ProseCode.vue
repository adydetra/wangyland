<script lang="ts" setup>
const hovered = ref(false);
defineProps({
  code: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="relative overflow-hidden group" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <slot />
    <CopyCode :show="hovered" :content="code" class="absolute bottom-9 end-4" />
  </div>
</template>
