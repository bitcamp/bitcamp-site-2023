<template>
  <a :href="link" target="_blank">
    <button>{{ text || 'Click Me ' }}</button>
  </a>
</template>

<script setup lang="ts">
defineProps<{ link: string; text?: string }>();
</script>

<script lang="ts">
export default {
  name: 'ButtonComponent',
};
</script>
