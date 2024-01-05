<script lang="ts" setup>
useHead({
  title: 'Wangyland',
  titleTemplate: 'Wangyland',
});
</script>

<template>
  <NuxtLayout>
    <section class="select-none grid grid-cols-7 container mx-auto py-12 px-4 lg:px-0">
      <div class="col-span-7 lg:col-span-3 flex items-center">
        <div class="">
          <h2 class="text-3xl lg:text-5xl font-semibold">
            About <text class="text-indigo-300">
              Wangyland
            </text>
          </h2>
          <p class="hidden lg:block my-3 leading-7 font-extralight">
            The Wangyland server is currently hosted in Indonesia. This You can play<br>
            Adventure, Arena, Discord, Economy, Land Claim, Ranks, SMP, Survival<br>
            on the Wangyland server.
          </p>
          <p class="lg:hidden text-sm my-3 leading-7 font-extralight">
            The Wangyland server is currently hosted in Indonesia. This You can play Adventure, Arena, Discord, Economy, Land Claim, Ranks, SMP, Survival<br>
            on the Wangyland server.
          </p>
          <p class="mt-12 font-semibold text-xl">
            Minecraft game version does Wangyland server
          </p>
          <p class="my-3 font-extralight">
            Wangyland supports Minecraft version: 1.20
          </p>
          <p class="mt-12 font-semibold text-xl">
            Server IP for Wangyland
          </p>
          <p class="my-3 font-extralight">
            wangylandid.aternos.me | port: 56345
          </p>
          <NuxtImg class="object-cover border-dashed border lg:hidden p-2 mt-12 border-gray-600" src="/img/1.png" alt="We Confident" loading="lazy" />
        </div>
      </div>
      <div class="lg:col-span-4 flex justify-end">
        <NuxtImg
          class="object-cover p-4 rounded-2xl hidden lg:block border-dashed border hover:border-double transition duration-500 ease-in-out backdrop-blur-sm bg-white/5 hover:bg-indigo-300/20 hover:border-indigo-400 hover:border-opacity-60 border-indigo-400"
          src="/img/1.png"
          alt="We Confident"
        />
      </div>
    </section>
    <LazyPreview />
  </NuxtLayout>
</template>
