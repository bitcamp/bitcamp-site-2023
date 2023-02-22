<template>
  <div id="mission">
    <div class="years">
      <div class="big">9</div>
      <div class="description">years of Bitcamp</div>
    </div>
    <div class="hackers">
      <div class="big">1200+</div>
      <div class="description">hackers and counting</div>
    </div>
    <div class="sponsors">
      <div class="big">20+</div>
      <div class="description">sponsors each year</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AccomplishmentsSection',
};
</script>

<style scoped lang="scss">
#mission {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 200px;
  position: relative;
}

.years {
  display: flex;
  flex-direction: column;
  float: left;
  width: 33%;
  text-align: center;
  // background-color: lightcoral;
  justify-content: center;
  margin: 2%;
}

.hackers {
  display: flex;
  flex-direction: column;
  float: left;
  text-align: center;
  width: 33%;
  // background-color: lightgray;
  justify-content: center;
  margin: 2%;
}

.sponsors {
  display: flex;
  flex-direction: column;
  float: right;
  text-align: center;
  width: 33%;
  // background-color: lightcoral;
  justify-content: center;
  margin: 2%;
}

.big {
  // background-color: lightgreen;
  font-size: 4rem;
  align-self: center;
  color: white;
  opacity: 0.5;
  // font-weight: bold;
}

.description {
  // background-color: lightblue;
  font-size: 1rem;
  align-self: center;
  color: white;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .big {
    font-size: 3rem;
    align-self: center;
    color: white;
    opacity: 0.5;
  }

  .description {
    font-size: 0.8rem;
    align-self: center;
    color: white;
    opacity: 0.5;
  }
}

@media (max-width: 576px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
    // background-color: rgba(53, 88, 148, 255)
    // min-width: 200px;
  }

  .big {
    // background-color: lightgreen;
    font-size: 3rem;
    align-self: center;
    color: white;
    opacity: 0.5;
  }

  .description {
    // background-color: lightblue;
    font-size: 0.8rem;
    align-self: center;
    color: white;
    opacity: 0.5;
    width: 100%;
  }
}
</style>
