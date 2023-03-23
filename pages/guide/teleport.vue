<template>
  <section class="grid grid-cols-6 gap-4 container mx-auto outfit-200">
    <div class="lg:col-span-1 col-span-6 pl-3 pr-6 lg:pl-0 lg:pr-0">
      <Sidebar />
    </div>
    <div class="col-span-6 lg:col-span-3 lg:px-12 px-3 pb-12">
      <h2 id="guide-kit" class="lg:text-6xl text-4xl outfit-800 border-b lg:pb-8 pb-2 lg:mb-4 mb-2 border-gray-700">Teleport</h2>
        
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