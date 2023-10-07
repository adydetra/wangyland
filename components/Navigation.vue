<template>
  <div class="container mx-auto px-4 lg:px-0">
    <nav class="bg-transparent py-7 flex justify-between">
      <NuxtLink class="flex gap-4 items-center" :to="{ name: 'index' }">
        <NuxtImg src="/img/logo.png" alt="logo" class="w-10" placeholder />
        <p class="font-bold text-2xl outfit-600">Wangyland</p>
      </NuxtLink>
      <ul class="flex gap-16 items-center outfit-400">
        <li
          v-for="link in links"
          :key="link.to"
          :class="{
            'text-gray-50 hover:text-indigo-300': route.path !== link.to,
            'hidden md:block': link.to === '/',
          }"
        >
          <NuxtLink
            :to="link.to"
            :class="{
              'text-indigo-300': route.path === link.to,
            }"
          >
            <Icon v-if="link.text === 'Guide'" :class="icon" size="26" name="uim:horizontal-align-left" />
            <Icon v-else-if="link.text === 'Home'" :class="icon" size="26" name="uim:cube" />
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const route = useRoute();
const icon = "mr-2 text-lg leading-none -mt-1";
const links = [
  { to: "/", text: "Home" },
  { to: "/get-started/introduction", text: "Guide" },
];
</script>
