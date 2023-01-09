<template>
    <div class="rectangle-info"><p class="tile-content">{{ textContent }}</p></div>
</template>

<script lang="ts">
export default {
  name: 'RectangleInfo',
  props: {
    textContent: {
      type: String,
      required: true,
    }
  },
};
</script>

<style>
.rectangle-info {
    width: 312px;
    height: 312px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(232, 115, 71, 0.9) 100%);
    border-radius: 30px;
    margin: 52px;
   
    text-align: center;
    position: relative;
    
}
.tile-content {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    position: absolute;
    bottom: 0;
   
}
</style>