<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="hidden lg:block col-span-1">
      <Sidebar />
    </div>
    <div class="col-span-4 lg:col-span-3 lg:px-12 px-3">
      <h2 id="guide-kit" class="text-6xl outfit-800 border-b pb-8 border-gray-700 mb-4">Sethome</h2>

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