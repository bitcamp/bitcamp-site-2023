<template>
  <div class="what-is-bc">
    <div class="bc-description">
      <h2>What is Bitcamp?</h2>
      <div class="descriptors">
        Beginner-friendly &bullet; Fun &bullet; Exciting
      </div>
      <p>{{ textBlurb }}</p>
    </div>
    <div class="bc-info-image">
      <img :src="image" alt="Bitcamp information image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatIsBitcampSection',
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
.what-is-bc {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bc-description {
  flex: 1;
  line-height: 1.5;
  text-align: center;
  padding: 0 10%;
}
.bc-description h2 {
  margin-bottom: 0;
}
.bc-description .descriptors {
  margin-top: 0;
  color: var(--color-bitcamp);
}
.bc-info-image {
  flex: 1;
  text-align: center;
  padding: 5% 5%;
}
.bc-info-image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
@media (max-width: 992px) {
  .what-is-bc {
    flex-direction: column;
  }
  .bc-description {
    text-align: center;
    padding: 2rem 3rem;
  }
  .bc-info-image {
    text-align: center;
    padding: 2rem;
  }
}
</style>
