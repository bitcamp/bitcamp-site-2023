<template>
  <div class="Rtable-cell Rtable-category-cell title-row">
    {{ categoryName }}
  </div>
  <div class="Rtable-cell Rtable-cell-Byte title-row"></div>
  <div class="Rtable-cell Rtable-cell-Kilo title-row"></div>
  <div class="Rtable-cell Rtable-cell-Mega title-row"></div>
  <div class="Rtable-cell Rtable-cell-Giga title-row"></div>
  <div class="Rtable-cell Rtable-cell-Tera title-row"></div>
  <div class="Rtable-cell Rtable-cell-Peta title-row"></div>
  <div class="Rtable-cell Rtable-cell-Virtual title-row"></div>
</template>

<script>
export default {
  name: 'SponsorshipProspectusSection',
  props: {
    categoryName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.Rtable-cell {
}
</style>
