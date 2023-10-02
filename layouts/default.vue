<template>
  <section class="bg-gray-900">
    <div class="flex flex-col min-h-screen justify-between text-white">
      <Header />
      <Navigation />
      <slot />
      <Footer />
    </div>
  </section>
</template>
