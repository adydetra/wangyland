<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="lg:col-span-1 col-span-6 px-4 lg:px-0">
      <Sidebar />
    </div>
    <div class="col-span-6 lg:col-span-3 lg:px-12 px-4 pb-12">
      <slot />
    </div>
  </section>
</template>
