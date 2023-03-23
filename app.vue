<template>
  <!-- Content Section -->
  <transition name="slide-fade">
  <section class="min-h-screen bg-slate-800 text-white">

    <Header />
    <Navigation />

    <NuxtPage />

  </section></transition>
</template>

<style>
  .router-link-active {
    @apply text-gray-50 font-bold;
  }
  .guides.router-link-active {
    @apply text-indigo-500 outfit-600;
  }
  .outfit-200 {
    font-family: Outfit !important;
    font-weight: 200;
  }
  .outfit-300 {
    font-family: Outfit !important;
    font-weight: 300;
  }
  .outfit-400 {
    font-family: Outfit !important;
    font-weight: 400;
  }
  .outfit-500 {
    font-family: Outfit !important;
    font-weight: 500;
  }
  .outfit-600 {
    font-family: Outfit !important;
    font-weight: 600;
  }
</style>