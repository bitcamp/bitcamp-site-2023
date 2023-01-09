<template>
    <div class="mission-and-accomplishments">
        <h2>Our Mission/What We’ve Accomplished</h2>
        <div class="container">
            <InformationTile v-for="blurb in Accomplishments" :textContent="(blurb as string)"></InformationTile>
        </div> 
    </div>
</template>

<script lang="ts">
export default {
  name: 'MissionAccomplishmentsSection',
  props: {
    Accomplishments: { /* List with blurbs to be displayed */ 
      type: Array,
      required: true,
    },
  },
};
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