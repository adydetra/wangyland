<template>
  <section class="bg-slate-800">
    <div class="flex flex-col h-screen justify-between text-white">
      <Header />
      <Navigation />
      <slot />
      <Footer />
    </div>
  </section>
</template>