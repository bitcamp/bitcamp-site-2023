<template>
  <section class="Rtable-header js-RtableTabs">
    <div class="Rtable-grid">
      <div class="Rtable-cell Rtable-cell-blank Rtable-cell--head"></div>
      <div
        v-for="(tier, index) in tierNames"
        :key="index"
        class="Rtable-cell Rtable-cell--head"
        :class="'Rtable-cell-' + tier"
      >
        {{ tier }}
      </div>

      <div
        class="Rtable-cell Rtable-category-cell Rtable-category-cell-full first-row"
        style="font-weight: bolder"
      >
        Contribution
      </div>

      <div
        v-for="(price, index) in prices"
        :key="index"
        class="Rtable-cell first-row"
        :class="'Rtable-cell-' + tierNames[index]"
      >
        {{ price }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProspectusHeader',
  props: {
    tierNames: {
      type: Array,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.Rtable-cell {
}
</style>
