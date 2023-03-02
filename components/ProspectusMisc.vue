<template>
  <!-- <div
    class="Rtable-cell Rtable-category-cell"
    :class="'Rtable-misc-category-cell-' + type"
  >
    <a
      tabindex="0"
      class="btn btn-link question-btn"
      role="button"
      data-bs-toggle="popover"
      data-bs-content="Sponsors with this perk will get speaking time at the opening ceremony to discuss their company, their prize category, and anything else that they would like! Please keep in mind the designated time allotment for your tier when planning your presentation."
      :title="perk"
    >
      <img
        @click="greet(description)"
        src="../assets/img/sponsors/Custom/question-mark-black.svg"
        alt="Question Mark"
      />
    </a>
    {{ perk }}
  </div> -->
  <div
    class="Rtable-cell Rtable-category-cell"
    :class="'Rtable-misc-category-cell-' + type"
  >
    <a
      class="tooltips direction"
      :title="perk"
      :description="description"
    >
      <img
        src="../assets/img/sponsors/Custom/question-mark-black.svg"
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
  // methods: {
  //   greet(elem) {
  //     // `this` inside methods points to the current active instance
  //     alert(elem);
  //     // `event` is the native DOM event
  //   },
  // },
};
</script>

<style scoped>
.Rtable-cell {
}
</style>
