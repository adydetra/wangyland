<template>
  <section class="relative">
    <div class="py-8 lg:px-4 lg:-mx-4 space-y-8 text-sm hidden lg:block lg:sticky top-20">
      <!-- TOC -->
      <div class="space-y-4">
        <p class="text-gray-300 font-bold">Table of Contents</p>
        <ul v-if="toc && toc.links" class="space-y-3">
          <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :to="`#${link.id}`" class="block text-gray-400 truncate">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="border border-dashed border-gray-700/50"></div>

      <!-- Community -->
      <div class="space-y-4">
        <p class="text-gray-300 font-bold">Community</p>
        <ul class="space-y-3">
          <li v-for="community in communitys" :key="community.to">
            <NuxtLink :to="community.to" target="_blank" class="flex items-center text-gray-400 gap-2"> <Icon class="w-4 h-4" :name="community.icon" />{{ community.text }} </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { toc } = useContent();

const communitys = [
  { to: "https://github.com/adydetra/wangyland", icon: "ph:shooting-star-bold", text: "Star on GitHub" },
  { to: "https://github.com/sponsors/adydetra", icon: "mdi:love", text: "Become a Sponsor" },
];
</script>
