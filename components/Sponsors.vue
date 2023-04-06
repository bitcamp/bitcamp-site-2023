<template>
  <div id="sponsors" class="section">
    <h1 class="section-title">Sponsors</h1>
    <div class="sponsor-container">
      <template v-for="sponsor in sponsors" :key="sponsor.name">
        <SponsorCard :name="sponsor.name" :url="sponsor.url" />
      </template>
    </div>
    <div class="call-to-action">
      Interested in sponsoring us?<br />
      Email us at
      <a href="mailto:sponsorship@bit.camp">sponsorship@bit.camp</a> or
      <a href="./sponsor">view our prospectus</a>.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SponsorsSection',
};
</script>

<script setup lang="ts">
interface Sponsor {
  name: string;
  amount: number;
  url: string;
}

const sponsors: Sponsor[] = [
  {
    name: '1517',
    amount: 1000,
    url: 'https://www.1517fund.com/',
  },
  {
    name: 'ACES',
    amount: 1000,
    url: 'https://aces.umd.edu/',
  },
  {
    name: 'Bloomberg',
    amount: 7000,
    url: 'https://www.bloomberg.com/',
  },
  {
    name: 'Bloomberg Industry Group',
    amount: 4000,
    url: 'https://www.bloombergindustry.com/careers/',
  },
  {
    name: 'BSOS',
    amount: 1000,
    url: 'https://bsos.umd.edu/',
  },
  {
    name: 'Capital One',
    amount: 4000,
    url: 'https://www.capitalone.com/',
  },
  {
    name: 'Cipher Tech',
    amount: 7000,
    url: 'https://www.ciphertechsolutions.com/',
  },
  {
    name: 'Clark School of Engineering',
    amount: 15000,
    url: 'https://eng.umd.edu/',
  },
  {
    name: 'Cockroach Labs',
    amount: 8000,
    url: 'https://www.cockroachlabs.com/',
  },
  {
    name: 'Dingman Center',
    amount: 1000,
    url: 'https://www.rhsmith.umd.edu/centers-initiatives/dingman-center',
  },
  {
    name: 'Fannie Mae',
    amount: 7000,
    url: 'https://www.fanniemae.com/',
  },
  {
    name: 'Geico',
    amount: 4000,
    url: 'https://www.geico.com',
  },
  {
    name: 'IonQ',
    amount: 6000,
    url: 'https://ionq.com/',
  },
  {
    name: 'iSchool',
    amount: 1000,
    url: 'https://ischool.umd.edu/',
  },
  {
    name: 'JHU APL',
    amount: 4000,
    url: 'https://www.jhuapl.edu/',
  },
  {
    name: 'LTS',
    amount: 4000,
    url: 'https://www.ltsnet.net/',
  },
  {
    name: 'M&T Bank',
    amount: 4000,
    url: 'https://www3.mtb.com/careers/technology-careers',
  },
  {
    name: 'SEE',
    amount: 8045.55,
    url: 'https://www.see.umd.edu/',
  },
  {
    name: 'Smith School of Business',
    amount: 2500,
    url: 'https://www.rhsmith.umd.edu/',
  },
  {
    name: 'Textron',
    amount: 1000,
    url: 'https://www.textron.com/',
  },
  {
    name: 'UMD CS Department',
    amount: 39900,
    url: 'https://www.cs.umd.edu/',
  },
  {
    name: 'UMD CMNS',
    amount: 39900,
    url: 'https://cmns.umd.edu/',
  },
  {
    name: 'UMIACS',
    amount: 39900,
    url: 'https://www.umiacs.umd.edu/',
  },
  {
    name: 'UMD Physics Department',
    amount: 1000,
    url: 'https://umdphysics.umd.edu/',
  },
  {
    name: 'Visionist',
    amount: 1000,
    url: 'https://www.visionistinc.com/',
  },
  {
    name: 'StandOut Stickers',
    amount: 100,
    url: 'https://hackp.ac/mlh-standoutstickers-hackathons',
  },
].sort((a: Sponsor, b: Sponsor) => b.amount - a.amount);
</script>

<style scoped lang="scss">
#sponsors {
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
}

.sponsor-container {
  background-color: var(--color-foreground);
  border-radius: var(--border-radius);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 2rem;
  column-gap: 2rem;
  max-width: 60rem;
  border-radius: 20px;
  padding: 4rem;
  background-color: rgba(#ffffff, 0.2);
}

@media only screen and (min-width: 992px) {
  .sponsor-container {
    & > * {
      /* Dealing with 2 items in last row */
      &:last-child:nth-child(3n - 1) {
        grid-column-end: 6;
      }

      &:nth-last-child(2):nth-child(3n - 2) {
        grid-column-end: 4;
      }

      /* Dealing with 1 item in last row */
      &:last-child:nth-child(3n - 2) {
        grid-column-end: 5;
      }
    }
  }
}

@media only screen and (min-width: 576px) and (max-width: 992px) {
  .sponsor-container {
    grid-template-columns: repeat(4, 1fr);

    /* Dealing with 1 item in last row */
    & > *:last-child:nth-child(2n - 1) {
      grid-column-end: 4;
    }
  }
}

@media only screen and (max-width: 576px) {
  .sponsor-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
}

.call-to-action {
  display: block;
  text-align: center;
  font-size: 1.125rem;
  padding-top: 2rem;

  & a {
    color: var(--color-bitcamp);
    text-decoration: none;
  }
}
</style>
