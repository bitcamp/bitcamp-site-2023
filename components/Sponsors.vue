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

<script lang="ts">
import SponsorCard from '~/components/SponsorCard.vue';
export default {
  name: 'Sponsors',
  components: { SponsorCard },
  data() {
    return {
      names: [
        'CMNS',
        'UMD CS Department',
        'UMIACS',
        'Clark School of Engineering',
      ] as const,
      tiers: {
        CMNS: 'Custom',
        'UMD CS Department': 'Custom',
        UMIACS: 'Custom',
        'Clark School of Engineering': 'Custom',
      },
      urls: {
        CMNS: 'https://cmns.umd.edu/',
        'UMD CS Department': 'https://www.cs.umd.edu/',
        UMIACS: 'https://www.umiacs.umd.edu/',
        'Clark School of Engineering': 'https://eng.umd.edu/',
      },
    };
  },
};
</script>

<style scoped>
#sponsors {
  margin: 0 auto;
  padding: 0 0.75rem;
}

.sponsor-container {
  background-color: var(--color-foreground);
  border-radius: var(--border-radius);
  column-gap: 20px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
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
  min-width: 300px;
  padding: 1rem;
  text-align: center;
}

@media only screen and (max-width: 568px) {
  .sponsor-container {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}
</style>
