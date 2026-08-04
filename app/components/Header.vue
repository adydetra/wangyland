<script setup lang="ts">
const list = [
  { label: 'Welcome to Wangyland Website', icon: '🚀', class: 'hidden md:block' },
  { label: 'Welcome', icon: '🚀', class: 'md:hidden' },
];

const { copy, copied } = useClipboard();

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
        <span class="mr-3 inline-block">🚀</span>
        {{ data.label }}
      </p>

      <p
        class="text-indigo-100 text-xs md:text-base font-extrabold tracking-wide flex items-center cursor-pointer transition-all duration-300"
        :class="copied ? 'text-green-300 scale-105' : 'animate-pulse'"
        title="Click to copy!"
        @click="copyIp"
      >
        <span class="hidden md:inline-block mr-1">IP:</span>
        <span>{{ copied ? 'Copied!' : 'WANGYLANDID.ATERNOS.ME' }}</span>
        <Icon class="ml-1 md:ml-2 w-4 h-4 lg:w-6 lg:h-6" :name="copied ? 'uim:check' : 'uim:pagelines'" />
      </p>
    </div>
  </header>
</template>
