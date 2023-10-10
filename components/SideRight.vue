<template>
  <section class="relative select-none">
    <div class="py-8 lg:px-4 lg:-mx-4 space-y-8 text-sm hidden lg:block lg:sticky top-0 min-h-screen overflow-y-auto">
      <!-- TOC -->
      <div class="space-y-4">
        <p class="text-gray-300 font-bold">Table of Contents</p>
        <ul v-if="toc && toc.links" class="space-y-3">
          <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :to="`#${link.id}`" class="block truncate" :class="color" :aria-label="link.text">
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
            <NuxtLink :to="community.to" target="_blank" class="flex items-center gap-2" :class="color" :aria-label="community.text">
              <Icon class="w-4 h-4" :name="community.icon" />{{ community.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { toc } = useContent();
const color = "text-gray-400 hover:text-blue-400";

const communitys = [
  { to: "https://github.com/adydetra/wangyland", icon: "ph:shooting-star-bold", text: "Star on GitHub" },
  { to: "https://github.com/sponsors/adydetra", icon: "mdi:love", text: "Become a Sponsor" },
];
</script>
