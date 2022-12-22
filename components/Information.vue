<template>
  <div class="information">
    <div class="bc-description">
      <h2>What is Bitcamp?</h2>
      {{ textBlurb }}
    </div>
    <div class="information-image">
      <img :src="image" alt="section image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Information',
  props: {
    textBlurb: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.information {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.bc-description {
  flex: 1;
  line-height: 1.5;
  text-align: center;
  padding: 0 8rem;
}

.information-image {
  flex: 1;
  text-align: center;
  padding: 3 0rem;
}

.information-image img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .information {
    flex-direction: column;
  }
  .bc-description {
    text-align: center;
    padding: 0 3rem;
  }
  .information-image {
    text-align: center;
  }
}
</style>