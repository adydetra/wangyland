<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="lg:col-span-1 col-span-6 pl-3 pr-6 lg:pl-0 lg:pr-0">
      <Sidebar />
    </div>
    <div class="col-span-6 lg:col-span-3 lg:px-12 px-3 pb-12">
      <slot />
    </div>
  </section>
</template>