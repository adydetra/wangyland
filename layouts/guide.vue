<template>
  <main class="bg-gray-900 text-white min-h-screen">
    <Header />
    <Navigation />
    <section class="container mx-auto">
      <slot />
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();
const home = route.path === '/';
</script>