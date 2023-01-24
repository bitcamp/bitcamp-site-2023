<template>
  <div class="rectangle-info">
    <p class="tile-content">{{ textContent }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RectangleInfo',
};
</script>

<script setup lang="ts">
export interface Props {
  textContent: string;
}
withDefaults(defineProps<Props>(), {
  textContent: 'Content Placeholder',
});
</script>

<style>
.rectangle-info {
  width: 280px;
  height: 280px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(232, 115, 71, 0.9) 100%
  );
  border-radius: 30px;
  margin: 35px;
  text-align: left;
  position: relative;
}
.tile-content {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  padding: 15px;
}
</style>
