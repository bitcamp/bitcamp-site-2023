<template>
  <a class="logo-sponsor" :href="url">
    <img :src="`_nuxt/assets/images/sponsors/${name}.png`" :alt="name" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  url?: string;
}>();
</script>

<style scoped lang="scss">
.logo-sponsor {
  width: auto;
  text-align: center;
  grid-column: span 2;
}

.logo-sponsor img {
  width: 100%;
  max-width: 15rem;
  height: 10rem;
  object-fit: contain;
  transition: transform 300ms ease-in-out;
}

.logo-sponsor:hover img {
  transform: scale(1.1);
  backface-visibility: hidden;
}

@media only screen and (max-width: 500px) {
  .logo-sponsor img {
    height: 7.5rem;
  }
}

@media only screen and (max-width: 400px) {
  .logo-sponsor img {
    height: 5rem;
  }
}
</style>
