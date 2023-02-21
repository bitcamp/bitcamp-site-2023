<template>
  <section id="sponsors">
    <div class="section-title">
      <h2>Sponsors</h2>
      <hr />
      <i>Bitcamp 2022 is proudly co-hosted by the CoStar Group!</i>
    </div>
    <div class="sponsor-container">
      <template v-for="name in names" :key="name">
        <SponsorCard :name="name" :tier="tiers[name]" :url="urls[name]" />
      </template>
    </div>
    <em class="call-to-action"
      >Interested in sponsoring us? Email us at
      <a href="mailto:sponsorship@bit.camp">sponsorship@bit.camp</a> or
      <a href="./sponsor.html">view our prospectus</a>.</em
    >
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SponsorCard from './SponsorCard.vue';

const names = ref<string[]>([
  'CMNS',
  'UMD CS Department',
  'UMIACS',
  'Clark School of Engineering',
]);

const tiers = reactive({
  'CMNS': 'Custom',
  'UMD CS Department': 'Custom',
  'UMIACS': 'Custom',
  'Clark School of Engineering': 'Custom',
});

const urls = reactive({
  'CMNS': 'https://cmns.umd.edu/',
  'UMD CS Department': 'https://www.cs.umd.edu/',
  'UMIACS': 'https://www.umiacs.umd.edu/',
  'Clark School of Engineering': 'https://eng.umd.edu/',
});
</script>

<style scoped>
#sponsors {
  margin: 0 auto;
  padding: 0 0.75rem;
}

.sponsor-container {
  background-color: var(--color-foreground);
  border-radius: var(--border-radius);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 800px;
}

.call-to-action {
  display: block;
  text-align: center;
  font-size: 1.125rem;
  padding-top: 4rem;
}

.section-title {
  margin: 0 auto;
  width: 60%;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 900px) {
  .sponsor-container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
}
</style>
