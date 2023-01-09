<template>
  <a class="sponsor-logo" :href="url">
    <img :src="`_nuxt/assets/img/sponsors/${tier}/${name}.png`" :alt="name" />
  </a>
</template>

<script lang="ts">
export default {
  name: 'SponsorCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    tier: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

.sponsor-logo {
  width: auto;
  text-align: center;
}


.sponsor-logo img {
  width: 20rem;
  height: 10rem;
  margin: 2.5rem;
  object-fit: contain;
  transition: transform 300ms ease-in-out;
}


.sponsor-logo:hover img {
  transform: scale(1.1);
  backface-visibility: hidden;
}

@media only screen and (max-width: 768px) {
  .sponsor-logo img {
    width: 225px;
    height: 225px;
  }
}

@media only screen and (max-width: 568px) {
  .sponsor-logo img {
    height: auto;
    max-height: 200px;
    margin: 2rem auto;
  }
}
</style>
