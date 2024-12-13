<script lang="ts" setup>
const route = useRoute();

useSeoMeta({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Guide` : 'Wangyland'),
  description: 'Minecraft server hosted on Aternos, Cross-platform Minecraft Java, and Bedrock (Mobile, Desktop, Console).',
  twitterCard: 'summary_large_image',
});

const ogImageOptions = {
  component: 'OpenGraph',
  title: 'Wangyland',
};
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#8f94fb 0%,#4e54c8 50%,#4A00E0 100%)" />
  <NuxtPage />
  <OgImage v-bind="ogImageOptions" />
</template>
