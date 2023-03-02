<template>
  <div class="Rtable-cell Rtable-category-cell Rtable-category-cell-bottom">
    <a
      class="tooltips direction"
      :title="categoryName"
      :description="description"
    >
      <img
        src="../assets/img/sponsors/Custom/question-mark-black.svg"
        alt="Question Mark"
      />
    </a>
    {{ categoryName }}
  </div>

  <div
    v-for="(arg, index) in args"
    :key="index"
    class="Rtable-cell"
    :class="'Rtable-cell-' + tierNames[index]"
  >
    <p v-if="arg === 'check-b'">
      <img
        src="../assets/img/sponsors/Custom/check-black.svg"
        alt="Checkmark"
      />
    </p>
    <p v-else-if="arg === 'check-w'">
      <img
        src="../assets/img/sponsors/Custom/check-white.svg"
        alt="Checkmark"
      />
    </p>
    <p v-else>{{ arg }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProspectusBottomRow',
  props: {
    args: {
      type: Array,
      required: true,
    },
    tierNames: {
      type: Array,
      required: true,
    },
    categoryName: {
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
