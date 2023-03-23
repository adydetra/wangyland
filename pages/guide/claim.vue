<template>
  <section class="grid grid-cols-4 gap-4 container mx-auto outfit-200">
    <div class="hidden lg:block">
      <Sidebar />
    </div>
    <div class="col-span-4 lg:col-span-2 lg:px-12 px-3">
      <h2 id="guide-land-claim" class="text-3xl outfit-600">Land Claim</h2>

        <p class="py-2">In essence, "claim" is a square area of land marked with your name on the server, which, by default, other players cannot build, destroy, or loot within.</p>
                                
        <p class="py-4 outfit-500">HOW TO CLAIM?</p>

        <p class="py-2">
          1. Hold out your golden shovel in your Main Hand and Right-Click on the ground where you want the first corner of your claim to be.<br>
          2. While continuing to hold the Golden Shovel in your hand, walk over to the spot you want the second corner of your claim and Right Click it. Note that claims have to be over 100 square blocks in size. (10x10+ or equivalent)
        </p>
    
        <p class="py-4 outfit-600 text-xl"># Command</p>

        <p class="py-4 outfit-400">3 Type to trust player</p>

        <p class="py-2">
          /trust name_player<br>
          -> <i>Gives another player permission to edit in your claim.</i><br><br>
          /accesstrust name_player<br>
          -> <i>Gives a player permission to use your buttons, levers, and beds.</i><br><br>
          /containertrust name_player<br>
          -> <i>Gives a player permission to use your buttons, levers, beds, crafting gear, containers, and animals.</i><br>
        </p>

        <p class="py-4 outfit-400">Other Command</p>

        <p class="py-2">
          /claimlist<br>
          /trustlist<br>
          /untrust name_player<br>
          /abandonclaim<br>
        </p>
                            
        <p class="py-4">
          <strong>Pictures</strong><br>
          <img src="/img/guide/land-claim-1.png" alt="pict" class="mt-2 max-w-xs">
        </p>

        <p class="py-4">
          <strong>NOTE</strong>
          <br>
          the claimlist will increase as you play, the longer you play, the more the claim list will be
        </p>

        <p class="py-4">
          if you still don't understand this claim tutorial, you can see this video
          <br>
          <a href="https://www.youtube.com/shorts/n_9NyKTCcW4">- Link video 1</a><br><a href="https://www.youtube.com/watch?v=No6d40_rLrg">- Link video 2</a>
        </p>
    </div>
  </section>
</template>