<script lang="ts" setup>
const { prev, next } = useContent();
const styling =
  "flex col-span-4 md:col-span-2 items-center border border-gray-400/50 dark:border-gray-700/50 hover:!border-sky-500/20 py-6 px-8 rounded-lg col-span-2 gap-4 !text-gray-400 hover:!text-sky-500 hover:bg-gray-200/30 dark:hover:bg-gray-800/50";
const icon = "w-5 h-5  hover:!text-sky-500";
</script>

<template>
  <div class="grid grid-cols-4 gap-8 border-t border-gray-800 pt-8">
    <NuxtLink v-if="prev" :to="prev._path" :class="styling" class="justify-start" :aria-label="prev.title"
      ><Icon name="iconamoon:player-previous" :class="icon" /> {{ prev.title }}</NuxtLink
    >
    <NuxtLink v-if="next" :to="next._path" :class="styling" class="justify-end" :aria-label="next.title"
      >{{ next.title }} <Icon name="iconamoon:player-next" :class="icon"
    /></NuxtLink>
  </div>
</template>
