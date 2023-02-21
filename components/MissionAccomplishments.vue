<template>
  <div class="mission-and-accomplishments">
    <h2>Our Mission/What We’ve Accomplished</h2>
    <div class="container">
      <InformationTile
        v-for="blurb in accomplishments"
        :key="blurb"
        :text-content="(blurb as string)"
      ></InformationTile>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MissionAccomplishmentsSection',
};
</script>

<script setup lang="ts">
export interface Props {
  accomplishments: Array<string>;
}
withDefaults(defineProps<Props>(), {
  accomplishments: () => ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
});
</script>

<style>
.mission-and-accomplishments {
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap; /* Allows for vertical stackign depending on screen size */
  align-items: center;
  justify-content: center;
}
</style>
