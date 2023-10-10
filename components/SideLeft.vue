<template>
  <aside class="relative select-none">
    <div class="py-8 lg:px-4 lg:-mx-4 space-y-6 text-sm hidden lg:block sticky top-0 h-[calc(100vh)] overflow-y-auto">
      <Disclosure v-for="category in ['Get Started', 'Commands', 'Advanced']" :key="category" :defaultOpen="true" v-slot="{ open }">
        <DisclosureButton class="flex items-center justify-between w-full pr-6 pt-2">
          <h2 class="text-gray-300 font-bold">{{ category }}</h2>
          <Icon name="octicon:chevron-right-12" :class="open && 'rotate-90 transform'" />
        </DisclosureButton>
        <DisclosurePanel>
          <ContentList :path="`/${category.toLowerCase().replace(' ', '-')}`" v-slot="{ list }">
            <ul class="pl-2" v-for="content in list" :key="content._path">
              <li class="border-l border-gray-700 hover:border-blue-400 pl-4 py-2" :class="{ '!border-blue-400': isPageActive(content._path) }">
                <NuxtLink
                  :to="content._path"
                  class="text-gray-400 hover:text-blue-300"
                  :class="{ '!text-blue-400 font-semibold': isPageActive(content._path) }"
                  :aria-label="content.title"
                >
                  {{ content.title }}
                </NuxtLink>
              </li>
            </ul>
          </ContentList>
        </DisclosurePanel>
      </Disclosure>
      <hr class="!my-8 border-gray-800" />
      <NuxtLink
        to="/changelog"
        class="flex items-center text-sm hover:text-blue-300"
        :class="{ '!text-blue-400 font-semibold': route.path === '/changelog' }"
        aria-label="Read Changelog"
        ><Icon class="mr-2" size="16" name="pajamas:log" />Changelog</NuxtLink
      >
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
