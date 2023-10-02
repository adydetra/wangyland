<template>
  <NuxtLayout name="guide">
    <section class="grid grid-cols-11 mx-auto">
      <SideLeft class="col-span-2" />
      <ContentDoc v-slot="{ doc }">
        <article :class="content">
          <span v-if="currentCategory" class="font-bold text-blue-500">{{ currentCategory }}</span>
          <ContentRenderer :value="doc" />
          <PrevNext />
        </article>
      </ContentDoc>
      <SideRight class="col-span-2" />
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
const content = "!max-w-[96%] col-span-11 lg:col-span-7 p-8 space-y-4 prose text-gray-300 prose-heading:no-underline prose-headings:text-white prose-a:text-white prose-a:no-underline";
const currentCategory = ref<string | null>(null);

const router = useRouter();

onMounted(() => {
  const unwatch = router.currentRoute.value.fullPath.split("/")[1];
  if (unwatch === "get-started") {
    currentCategory.value = "Get Started";
  } else if (unwatch === "commands") {
    currentCategory.value = "Commands";
  } else {
    currentCategory.value = null;
  }
});
</script>
