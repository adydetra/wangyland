<script lang="ts" setup>
const route = useRoute();
const icon = 'mr-2 text-lg leading-none -mt-1';
</script>

<template>
  <div class="container mx-auto px-4 lg:px-0">
    <nav class="bg-transparent py-7 flex justify-between">
      <NuxtLink class="flex gap-4 items-center" :to="{ name: 'index' }">
        <NuxtImg src="/img/logo.png" alt="logo" class="w-10" />
        <p class="font-bold text-2xl outfit-600">
          Wangyland
        </p>
      </NuxtLink>
      <ul class="flex gap-16 items-center outfit-400">
        <li :class="{ 'hidden md:block': route.path !== '' }">
          <NuxtLink
            to="/"
            :class="{
              'text-blue-400': route.path === '/',
              'text-gray-50 hover:text-blue-400': route.path !== '/',
            }"
            aria-label="Home"
          >
            <Icon :class="icon" size="26" name="uim:cube" />
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/get-started/introduction"
            :class="{
              'text-blue-400': route.path !== '/',
              'text-gray-50 hover:text-blue-400': route.path === '/',
            }"
            aria-label="Guide"
          >
            <Icon :class="icon" size="26" name="uim:horizontal-align-left" />
            Guide
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
