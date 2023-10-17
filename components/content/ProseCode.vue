<template>
  <div class="relative overflow-hidden group" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <!-- <span v-if="filename" class="absolute top-5 end-0 py-3 px-4 transition-all">
      {{ filename }}
    </span> -->
    <slot />
    <CopyCode :show="hovered" :content="code" class="absolute bottom-9 end-4 opacity-0 group-hover:opacity-100" />
  </div>
</template>

<script setup lang="ts">
const hovered = ref(false);
defineProps({
  code: {
    type: String,
    default: "",
  },
  // filename: {
  //   type: String,
  //   default: null,
  // },
});
</script>