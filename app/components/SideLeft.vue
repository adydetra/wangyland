<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const route = useRoute();
const links = computed(() => [
  { to: '/aternos-access', label: 'Aternos Access', icon: 'mdi:minecraft' },
  { to: '/changelog', label: 'Changelog', icon: 'pajamas:log' },
]);

const { data: navigation } = useAsyncData('navigation', () => {
  return queryCollectionNavigation('content');
}, { lazy: true });

const categories = ['Get Started', 'Commands', 'Advanced'];

function getCategoryNode(categoryName: string) {
  return navigation.value?.find(node => node.title === categoryName);
}

function isPageActive(path: string | undefined) {
  return path && route.path === path;
}
</script>

<template>
  <aside class="relative select-none">
    <div class="py-8 lg:px-4 lg:-mx-4 space-y-6 text-sm hidden lg:block sticky top-0 h-[calc(100vh)] overflow-y-auto">
      <Disclosure v-for="category in categories" :key="category" v-slot="{ open }" :default-open="true" as="div" class="space-y-6">
        <DisclosureButton class="flex items-center justify-between w-full pr-6 pt-2">
          <h2 class="text-gray-300 font-bold">
            {{ category }}
          </h2>
          <Icon name="octicon:chevron-right-12" :class="open && 'rotate-90 transform'" />
        </DisclosureButton>
        <DisclosurePanel>
          <ul v-if="getCategoryNode(category)" class="pl-2">
            <!-- Parent (Index) Page -->
            <li v-if="getCategoryNode(category)?.page" class="border-l border-gray-700 hover:border-blue-400 pl-4 py-2" :class="{ '!border-blue-400': isPageActive(getCategoryNode(category)?.path) }">
              <NuxtLink
                :to="getCategoryNode(category)!.path"
                class="text-gray-400 hover:text-blue-300"
                :class="{ '!text-blue-400 font-semibold': isPageActive(getCategoryNode(category)?.path) }"
                :aria-label="getCategoryNode(category)?.title"
              >
                {{ getCategoryNode(category)?.title }}
              </NuxtLink>
            </li>
            <!-- Children Pages -->
            <li v-for="content in getCategoryNode(category)?.children" :key="content.path" class="border-l border-gray-700 hover:border-blue-400 pl-4 py-2" :class="{ '!border-blue-400': isPageActive(content.path) }">
              <NuxtLink
                :to="content.path"
                class="text-gray-400 hover:text-blue-300"
                :class="{ '!text-blue-400 font-semibold': isPageActive(content.path) }"
                :aria-label="content.title"
              >
                {{ content.title }}
              </NuxtLink>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
      <hr class="!my-8 border-gray-800">
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="flex items-cender text-sm hover:text-blue-300"
        :class="{ '!text-blue-400 font-semibold': route.path === link.to }"
        :aria-label="`Read ${link.label}`"
      >
        <Icon class="mr-2 mt-0.5" size="16" :name="link.icon" />
        {{ link.label }}
      </NuxtLink>
    </div>
  </aside>
</template>
