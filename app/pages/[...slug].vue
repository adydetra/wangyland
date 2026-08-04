<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
});

const content
  = '!max-w-[96%] col-span-11 lg:col-span-7 p-8 lg:px-16 space-y-4 prose text-gray-400 prose-heading:no-underline prose-headings:text-white prose-a:text-white prose-a:no-underline prose-hr:border-gray-800 prose-strong:text-white prose-strong:font-normal prose-strong:bg-gray-800 prose-strong:py-1 prose-strong:px-2 prose-strong:rounded-lg prose-pre:!mt-0';
definePageMeta({ layout: 'guide' });

const currentCategory = computed(() => {
  const segment = route.path.split('/')[1];
  if (segment === 'get-started')
    return 'Get Started';
  if (segment === 'commands')
    return 'Commands';
  if (segment === 'advanced')
    return 'Advanced';
  if (segment === 'aternos-access')
    return 'Aternos Access';
  if (segment === 'changelog')
    return 'Changelog';
  return null;
});
</script>

<template>
  <div>
    <section class="grid grid-cols-11 mx-auto">
      <SideLeft class="col-span-2 hidden lg:block" />
      <article v-if="page" :class="content">
        <span v-if="currentCategory" class="font-bold text-blue-500">{{ currentCategory }}</span>
        <ContentRenderer :value="page" />
        <PrevNext />
      </article>
      <div v-else class="col-span-11 lg:col-span-7 p-8 lg:px-16 text-gray-400">
        Page not found
      </div>
      <SideRight class="col-span-2 hidden lg:block" />
    </section>
  </div>
</template>
