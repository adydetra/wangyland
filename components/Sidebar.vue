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

  <div class="lg:hidden py-2">
    <Listbox v-model="selectedGetting" v-slot="{ open }">
      <ListboxButton class="outfit-600 text-md py-3"><Icon class="mr-2 leading-none -mt-1" size="16" name="octicon:play-16" />Getting Started</ListboxButton>
      <div>
        <ListboxOptions static>
          <ListboxOption
            v-for="getting in started"
            :key="getting.id"
            :value="getting"
            :disabled="getting.unavailable"
          >
          <NuxtLink :to="getting.to" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 flex border-l guides"> {{ getting.name }} </NuxtLink>
          </ListboxOption>
        </ListboxOptions>
      </div>
    </Listbox>
  </div>

  <div class="lg:hidden py-2">
    <Listbox v-model="selectedPlugin" v-slot="{ open }">
      <ListboxButton class="outfit-600 text-md py-3"><Icon class="mr-2 leading-none -mt-1" size="16" name="octicon:cpu-16" />Plugins</ListboxButton>
      <div v-show="open">
        <ListboxOptions static>
          <ListboxOption
            v-for="plugin in plugins" 
            :key="plugin.id"
            :value="plugin"
            :disabled="plugin.unavailable"
          >
          <NuxtLink :to="plugin.to" class="hover:bg-slate-700 text-sm outfit-200 py-3 pl-3 ml-2 bg-slate-800 border-gray-700 flex border-l guides"> {{ plugin.name }} </NuxtLink>
          </ListboxOption>
        </ListboxOptions>
      </div>
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

  const started = [
    { id: 1, name: 'Introduce', to: '/guide/introduce', unavailable: false},
    { id: 2, name: 'Usage', to: '/guide/usage', unavailable: false},
  ]

  const plugins = [
    { id: 1, name: 'KIT', to: '/guide/kit', unavailable: false},
    { id: 2, name: 'Warp', to: '/guide/warp', unavailable: false},
    { id: 3, name: 'Land Claim', to: '/guide/claim', unavailable: false},
    { id: 4, name: 'Sethome', to: '/guide/sethome', unavailable: false},
    { id: 5, name: 'Teleport', to: '/guide/teleport', unavailable: false},
    { id: 6, name: 'Other', to: '/guide/other', unavailable: false},
  ]
</script>