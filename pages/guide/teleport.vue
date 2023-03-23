<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="hidden lg:block col-span-1">
      <Sidebar />
    </div>
    <div class="col-span-4 lg:col-span-3 lg:px-12 px-3">
      <h2 id="guide-kit" class="text-6xl outfit-800 border-b pb-8 border-gray-700 mb-4">Teleport</h2>
        
        <p class="py-2">You can teleport another player on this server.</p>

        <p class="pt-8 outfit-600 text-xl">Command [Member]</p>

        <p class="leading-8">  
          /tpa name_player<br>
          /tpahere name_player
        </p>

        <p class="pt-10 outfit-600 text-xl">Command [Co-Chief]</p>

        <p class="leading-8">  
          /tp name_player<br>
          /tpa name_player<br>
          /tpahere name_player
        </p>
    </div>
  </section>
</template>