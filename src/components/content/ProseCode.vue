<script lang="ts" setup>
defineProps<{
  code: string;
}>();
const hovered = ref(false);
</script>

<template>
  <div class="relative overflow-hidden group" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <slot />
    <CopyCode :show="hovered" :content="code" class="absolute bottom-9 end-4" />
  </div>
</template>
