<template>
  <!-- Navigation -->
    <div class="container mx-auto px-3 lg:px-0">
      <nav class="bg-transparent py-7 flex justify-between">
        <NuxtLink class="flex gap-4 items-center" :to="{ name: 'index' }">
          <img src="/img/logo.png" alt="logo" class="w-10" />
          <p class="font-bold text-2xl outfit-600">Wangyland</p>
        </NuxtLink>
        <ul class="flex gap-16 items-center outfit-400"> 
          <li class="text-gray-50 hidden md:block"><NuxtLink :to="{ name: 'index' }"><Icon class="mr-2 text-lg leading-none -mt-1" size="26" name="uim:cube" />Home</NuxtLink></li>
          <li class="text-gray-50 mr-5 lg:mr-0"><NuxtLink to="/guide/kit"><Icon class="mr-2 text-lg leading-none -mt-1" size="26" name="uim:horizontal-align-left" />Guide</NuxtLink></li>
        </ul>
      </nav>
    </div>
</template>