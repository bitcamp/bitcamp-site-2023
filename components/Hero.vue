<template>
    <section id="hero">
    <div class="hero">
        <img :src="link" />
        <div class="hero-text">
            <h1>I am John Doe</h1>
        </div>
    </div>
    </section>
</template>

<script setup lang="ts">

defineProps<{
    link?: string;
}>();
</script>

<style scoped lang="scss">
.hero {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    // background-image: url('../assets/images/hero.jpg');
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}

</style>