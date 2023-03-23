<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="lg:col-span-1 col-span-6 pl-3 pr-6 lg:pl-0 lg:pr-0">
      <Sidebar />
    </div>
    <div class="col-span-6 lg:col-span-3 lg:px-12 px-3">
      <h2 id="guide-kit" class="lg:text-6xl text-4xl outfit-800 border-b lg:pb-8 pb-2 lg:mb-4 mb-2 border-gray-700">Sethome</h2>

        <p class="py-2">A simple homes plugin with the ability to create, delete, and teleport to many different homes.</p>

        <p class="pt-4 outfit-600 text-xl"># Commands</p>

        <p class="leading-8 mt-2">
          /sethome name<br>
          /delhome name
        </p>

        <p class="pt-8 outfit-600 text-md">NOTE</p>

        <p class="leading-8 mt-2">
          - Max 3 for rank [Member]<br>
          - Max 5 for rank [Co-Chief]
        </p>
    </div>
  </section>
</template>