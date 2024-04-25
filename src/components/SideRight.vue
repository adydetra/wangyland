<script lang="ts" setup>
const { toc } = useContent();
const activeLinkId = ref('');
const community = [
  { to: 'github.com/adydetra/wangyland', icon: 'ph:shooting-star-bold', text: 'Star on GitHub' },
  { to: 'discord.gg/pgNpcyu9QA', icon: 'mdi:discord', text: 'Chat on Discord' },
  { to: 'github.com/sponsors/adydetra', icon: 'mdi:love', text: 'Become a Sponsor' },
];

interface TocLink {
  id: string;
  text: string;
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  const offset = 1500;

  const activeLink = toc.value.links.find((link: TocLink) => {
    const targetElement = document.getElementById(link.id);
    if (targetElement) {
      const { offsetTop, offsetHeight } = targetElement;
      return scrollPosition >= offsetTop - offset && scrollPosition < offsetTop + offsetHeight;
    }
    return false;
  });

  activeLinkId.value = activeLink ? activeLink.id : '';
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="relative select-none">
    <div class="py-8 space-y-8 text-sm hidden lg:block lg:sticky top-0 min-h-screen overflow-y-auto">
      <!-- TOC -->
      <div class="space-y-5">
        <p class="text-gray-300 font-bold">
          Table of Contents
        </p>
        <ul v-if="toc && toc.links" class="space-y-4">
          <li v-for="link in toc.links" :key="link.text">
            <NuxtLink :to="`#${link.id}`" class="block truncate" :class="[{ active: link.id === activeLinkId }]" :aria-label="link.text">
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="border border-dashed border-gray-700/50" />

      <!-- Community -->
      <div class="space-y-5">
        <p class="text-gray-300 font-bold">
          Community
        </p>
        <ul class="space-y-4">
          <li v-for="data in community" :key="data.to">
            <NuxtLink :to="`https://${data.to}`" target="_blank" class="flex items-center gap-2" :aria-label="data.text">
              <Icon class="size-4" :name="data.icon" />{{ data.text }}<Icon class="size-2.5 -mt-4 -ml-1 opacity-50" name="uim:arrow-up-right" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
a {
  @apply text-gray-400 hover:text-blue-400;
}
p {
  @apply text-gray-500 font-bold;
}
.active {
  @apply text-blue-400;
}
</style>
