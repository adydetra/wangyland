<template>
  <div class="max-w-7xl hidden lg:grid grid-cols-3 gap-20 mx-auto my-40">
    <NuxtImg v-for="id in [1, 2, 3]" :key="id" :src="`/img/preview-${id}.png`" loading="lazy" alt="" class="rounded" />
  </div>
</template>
