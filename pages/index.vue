<template>
  <div class="app-container">
    <Navbar />
    <Hero />
    <Accomplishments />
    <Tracks />
    <img class="cloud-1" src="~/assets/images/cloud1.png" />
    <MiniEvents />
    <CampfireGames />
    <img class="cloud-2" src="~/assets/images/cloud2.png" />
    <FAQ />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Bitcamp',
  meta: [
    {
      name: 'description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
    },
    {
      property: 'og:title',
      content: 'Bitcamp 2023',
    },
    {
      property: 'og:site_name',
      content: 'Bitcamp 2023',
    },
    {
      property: 'og:url',
      content: 'https://bit.camp/',
    },
    {
      property: 'og:description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'twitter:card',
      content: 'summary',
    },
    {
      property: 'twitter:url',
      content: 'https://bit.camp/',
    },
    {
      property: 'twitter:title',
      content: 'Bitcamp 2023',
    },
    {
      property: 'twitter:description',
      content:
        "Bitcamp is a place for exploration. You will have 36 hours to delve into your curiosities, learn something new, and make something awesome. With world-class mentors and hundreds of fellow campers, you're in for an amazing time. If you're ready for an adventure, see you by the fire!",
    },
    {
      name: 'msapplication-TileColor',
      content: '#ff6f3f',
    },
    {
      name: 'msapplication-config',
      content: '/bitcamp-brand/favicons/browserconfig.xml',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/bitcamp-brand/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/bitcamp-brand/favicons/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/bitcamp-brand/favicons/site.webmanifest',
    },
    {
      rel: 'mask-icon',
      href: '/bitcamp-brand/favicons/safari-pinned-tab.svg',
      color: '#ff6f3f',
    },
    {
      rel: 'shortcut icon',
      href: '/bitcamp-brand/favicons/favicon.ico',
    },
  ],
});
</script>

<script lang="ts">
export default {
  name: 'HomePage',
};
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  background-color: #345793;

  & > *:not(:last-child) {
    margin-bottom: 5rem !important;
  }
}

img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.cloud-1 {
  position: absolute;
  left: 0;
  width: 100vw;
  margin-top: -12vw;
}

.cloud-2 {
  position: absolute;
  right: 0;
  width: 80vw;
  margin-top: -10vw;
}
</style>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
