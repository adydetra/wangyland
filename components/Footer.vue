<script lang="ts" setup>
const social = [
  { label: "GitHub", icon: "octicon:mark-github-16", to: "github.com/adydetra/wangyland" },
  { label: "Discord", icon: "mdi:discord", to: "discord.gg/pgNpcyu9QA" },
];
</script>

<template>
  <section class="px-4 lg:px-0 border-y border-slate-900 mt-auto text-gray-400 font-light tracking-wide">
    <div class="container mx-auto py-12 flex justify-between">
      <div>
        <NuxtLink to="https://adydetra.my.id" target="_blank" class="text-sm hover:text-indigo-300" aria-label="Powered by adydetra">
          <Icon class="leading-none -mt-1 mr-2 text-lg" size="16" name="octicon:octoface" />Powered By adydetra
        </NuxtLink>
      </div>
      <div class="space-x-5 lg:space-x-10">
        <NuxtLink v-for="(data, index) in social" :key="index" :to="'https://' + data.to" target="_blank" :aria-label="data.label">
          <Icon class="leading-none -mt-1 hover:text-indigo-300" size="16" :name="data.icon" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
