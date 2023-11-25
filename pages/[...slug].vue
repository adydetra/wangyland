<script lang="ts" setup>
const content =
  "!max-w-[96%] col-span-11 lg:col-span-7 p-8 lg:px-16 space-y-4 prose text-gray-400 prose-heading:no-underline prose-headings:text-white prose-a:text-white prose-a:no-underline prose-hr:border-gray-800 prose-strong:text-white prose-strong:font-normal prose-strong:bg-gray-800 prose-strong:py-1 prose-strong:px-2 prose-strong:rounded-lg prose-pre:!mt-0";
const currentCategory = ref<string | null>(null);

const router = useRouter();

onMounted(() => {
  const unwatch = router.currentRoute.value.fullPath.split("/")[1];
  if (unwatch === "get-started") {
    currentCategory.value = "Get Started";
  } else if (unwatch === "commands") {
    currentCategory.value = "Commands";
  } else if (unwatch === "advanced") {
    currentCategory.value = "Advanced";
  } else if (unwatch === "aternos-access") {
    currentCategory.value = "Aternos Access";
  } else if (unwatch === "changelog") {
    currentCategory.value = "Changelog";
  } else {
    currentCategory.value = null;
  }
});
</script>

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
