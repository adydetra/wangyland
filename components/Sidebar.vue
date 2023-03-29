<template>
  <div class="hidden lg:flex flex-col mb-6">
    <h2 class="outfit-600 text-md py-3"><Icon class="mr-2 leading-none -mt-1" size="16" name="octicon:play-16"/>Getting Started</h2>
    <NuxtLink to="/guide/introduce" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Introduce</NuxtLink>
    <NuxtLink to="/guide/usage" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Usage</NuxtLink>
  </div>
  <div class="hidden lg:flex flex-col mb-6">
    <h2 class="outfit-600 text-md py-3"><Icon class="mr-2 leading-none -mt-1" size="16" name="octicon:cpu-16" />Plugins</h2>
    <NuxtLink to="/guide/kit" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">KIT</NuxtLink>
    <NuxtLink to="/guide/warp" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Warp</NuxtLink>
    <NuxtLink to="/guide/claim" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Land Claim</NuxtLink>
    <NuxtLink to="/guide/sethome" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Sethome</NuxtLink>
    <NuxtLink to="/guide/teleport" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Teleport</NuxtLink>
    <NuxtLink to="/guide/other" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides">Other</NuxtLink>
  </div>

  <div class="lg:hidden">
    <Listbox v-model="selectedPerson">
      <ListboxButton class="outfit-600 text-md py-3"><Icon class="mr-2 leading-none -mt-1" size="16" name="octicon:cpu-16" />Plugins</ListboxButton>
        <NuxtLink :to="person.to" v-for="person in people">
        <ListboxOptions>
          <ListboxOption class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 border-l guides"
            :key="person.id"
            :value="person"
            :disabled="person.unavailable"
          >
            {{ person.name }}
          </ListboxOption>
        </ListboxOptions>
      </NuxtLink>
    </Listbox>
  </div>

</template>

<script setup>
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const people = [
    { id: 1, name: 'KIT', to: '/guide/kit', unavailable: false},
    { id: 2, name: 'Warp', to: '/guide/warp', unavailable: false},
    { id: 3, name: 'Land Claim', to: '/guide/claim', unavailable: false},
    { id: 4, name: 'Sethome', to: '/guide/sethome', unavailable: false},
    { id: 5, name: 'Teleport', to: '/guide/teleport', unavailable: false},
    { id: 6, name: 'Other', to: '/guide/other', unavailable: false},
  ]
</script>