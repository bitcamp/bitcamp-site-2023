<template>
  <div
    class="Rtable-cell Rtable-category-cell"
    :class="'Rtable-misc-category-cell-' + type"
  >
    <a class="tooltips direction" :title="perk" :description="description">
      <img
        src="../assets/images/icons/question-mark-black.svg"
        alt="Question Mark"
      />
    </a>
    {{ perk }}
  </div>

  <div class="Rtable-cell Rtable-cell-misc" :class="'Rtable-misc-cell-' + type">
    {{ price }}
  </div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
  <div class="Rtable-cell Rtable-cell-blank"></div>
</template>

<script>
export default {
  name: 'ProspectusFooter',
  props: {
    perk: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
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
