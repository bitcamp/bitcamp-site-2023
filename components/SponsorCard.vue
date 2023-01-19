<template>
  <a class="logo-sponsor" :href="url">
    <img :src="`_nuxt/assets/img/sponsors/${tier}/${name}.png`" :alt="name" />
  </a>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name: string;
    tier: string;
    url: string;
  }>();
</script>

<style scoped>
.logo-sponsor {
  width: auto;
  text-align: center;
}

.logo-sponsor img {
  width: 20rem;
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
  width: 15rem;
  height: 7.5rem;
  }
}

@media only screen and (max-width: 400px) {
  .logo-sponsor img {
  width: 10rem;
  height: 5rem;
  }
}
</style>
