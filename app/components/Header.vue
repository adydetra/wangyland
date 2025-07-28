<script setup lang="ts">
const list = [
  { label: 'Welcome to Wangyland Website', icon: '🚀', class: 'hidden md:block' },
  { label: 'Welcome', icon: '🚀', class: 'md:hidden' },
];

const { copy } = useClipboard();

function copyIp() {
  copy('wangylandid.aternos.me:56345');
}
</script>

<template>
  <header class="bg-indigo-600 text-gray-900 py-3 px-4">
    <div class="container mx-auto flex justify-between items-center">
      <p
        v-for="(data, index) in list"
        :key="index"
        class="text-indigo-100 text-xs md:text-lg font-extrabold me-4 mb-0"
        :class="data.class"
      >
        <Icon class="mr-3 -mt-1" name="🚀" />
        {{ data.label }}
      </p>

      <p
        class="text-indigo-100 text-xs md:text-base font-extrabold tracking-wide animate-pulse md:block cursor-pointer"
        title="Click to copy!"
        @click="copyIp"
      >
        <span class="hidden md:inline-block">IP:</span>
        WANGYLANDID.ATERNOS.ME
        <Icon class="ml-1 md:ml-2 -mr-1 -mb-1.5 w-4 h-4 lg:w-6 lg:h-6" name="uim:pagelines" />
      </p>
    </div>
  </header>
</template>
