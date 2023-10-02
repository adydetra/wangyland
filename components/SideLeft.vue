<template>
  <aside class="relative select-none">
    <div class="py-8 lg:px-4 lg:-mx-4 space-y-6 text-sm hidden lg:block lg:sticky top-20 min-h-screen overflow-y-auto">
      <Disclosure v-for="category in ['Get Started', 'Commands']" :key="category" :defaultOpen="true" v-slot="{ open }">
        <DisclosureButton class="flex items-center justify-between w-full pr-6 pt-2">
          <h2 class="text-gray-300 font-bold">{{ category }}</h2>
          <Icon name="octicon:chevron-right-12" :class="open && 'rotate-90 transform'" />
        </DisclosureButton>
        <DisclosurePanel>
          <ContentList :path="`/${category.toLowerCase().replace(' ', '-')}`" v-slot="{ list }">
            <ul class="pl-2" v-for="content in list" :key="content._path">
              <li class="border-l border-gray-700 pl-4 py-2" :class="{ '!border-blue-500': isPageActive(content._path) }">
                <NuxtLink :to="content._path" class="text-gray-400" :class="{ '!text-blue-500 font-semibold': isPageActive(content._path) }">
                  {{ content.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentList>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const route = useRoute();
const isPageActive = (path: string | undefined) => {
  return path && route.path === path;
};
</script>
