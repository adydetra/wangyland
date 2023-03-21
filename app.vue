<template>

  <!-- Content Section -->
  <section class="min-h-screen bg-slate-800 text-white">

    <!-- Header -->
    <header class="bg-indigo-600 text-gray-900 py-3 px-4 outfit-400">
      <div class="container mx-auto flex justify-between items-center">
        <p class="d-flex me-4 mb-0">
          <strong class="text-indigo-100 text-xs lg:text-lg"><Icon class="mr-3 -mt-1" name="🚀" />Welcome to Wangyland Website</strong>
        </p>
        <p class="text-indigo-100 font-bold tracking-wide hidden lg:block">IP: WANGYLANDID.ATERNOS.ME<Icon class="ml-2 text-lg leading-none -mt-1" size="26" name="uim:pagelines" /></p>
      </div>
    </header>

    <!-- Navigation -->
    <div class="container mx-auto px-3 lg:px-0">
      <nav class="bg-transparent py-7 flex justify-between">
        <ul class="flex gap-4 items-center">
          <img src="/img/logo.png" alt="logo" class="w-10" />
          <p class="font-bold text-2xl outfit-600">Wangyland</p>
        </ul>
        <ul class="flex gap-16 items-center outfit-400"> 
          <li class="text-white hidden md:block"><NuxtLink :to="{ name: 'index' }"><Icon class="mr-2 text-lg leading-none -mt-1" size="26" name="uim:cube" />Home</NuxtLink></li>
          <li class="text-white"><NuxtLink :to="{ name: 'guide' }"><Icon class="mr-2 text-lg leading-none -mt-1" size="26" name="uim:horizontal-align-left" />Guide</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <NuxtPage />
  </section>
</template>

<style>
  .outfit-200 {
    font-family: Outfit !important;
    font-weight: 200 !important;
  }
  .outfit-300 {
    font-family: Outfit !important;
    font-weight: 300 !important;
  }
  .outfit-400 {
    font-family: Outfit !important;
    font-weight: 400 !important;
  }
  .outfit-500 {
    font-family: Outfit !important;
    font-weight: 500 !important;
  }
  .outfit-600 {
    font-family: Outfit !important;
    font-weight: 600 !important;
  }
</style>