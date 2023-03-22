<template>
  <section class="grid grid-cols-4 gap-4 container mx-auto outfit-200">
    <div class="">
      <Sidebar />
    </div>
    <div class="col-span-2 px-12">
      <h2 id="guide-sethome" class="text-3xl outfit-600">Sethome</h2>

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