<template>
  <button ref="copyButtonRef" :class="[(show || state === 'copied') && 'show']" @click="copy" title="Copy">
    <Icon v-if="state === 'copied'" name="mingcute:copy-3-fill" class="text-blue-300" />
    <Icon v-else name="mingcute:copy-3-line" class="hover:text-blue-300"/>
  </button>
</template>

<script setup lang="ts">
const state = ref("init");
const copyButtonRef = ref<HTMLElement>();

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const { copy: copyToClipboard } = useClipboard();
onClickOutside(copyButtonRef, () => {
  if (state.value === "copied") {
    state.value = "init";
  }
});

const copy = (_e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = "copied";
    })
    .catch((err) => {
      console.warn("Couldn't copy to clipboard!", err);
    });
};
</script>