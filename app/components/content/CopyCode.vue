<script lang="ts" setup>
import { useClipboard } from '@vueuse/core';

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const source = ref(`${props.content}`);
const { copy, copied } = useClipboard({ source });
</script>

<template>
  <button title="Copy" @click="copy(source)">
    <Icon v-if="!copied" name="i-ri:checkbox-multiple-blank-line" class="hover:text-blue-300" />
    <Icon v-else name="i-ri:check-double-fill" class="text-blue-300" />
  </button>
</template>
