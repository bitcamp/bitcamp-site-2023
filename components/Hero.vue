<template>
  <section id="hero">
    <img class="hero-image" src="~/assets/images/hero.png" />
    <div class="header">
      <img src="/bitcamp-brand/logos/bitcamp.png" />
      <div class="header-content">
        <h1>Find your Frontier!</h1>
        <h3>Bitcamp returns April 7-9, 2023</h3>
        <h2>Applications are now open!</h2>
        <div class="header-button-container">
          <Button
            text="Hacker"
            link="https://register.bit.camp"
            size="large"
          ></Button>
          <Button
            text="Volunteer"
            link="https://forms.gle/kyQwDzX7UKDEwa7b9"
            size="large"
            color="#324A79"
          ></Button>
          <Button
            text="Mentor"
            link="https://forms.gle/kP2nrzPzwd6PD8nLA"
            size="large"
            color="#8F9EBC"
          ></Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'HeroComponent',
};
</script>

<script setup lang="ts">
defineProps<{
  link?: string;
}>();
</script>

<style scoped lang="scss">
#hero {
  display: flex;
  justify-content: center;
  padding: 10% 0;
}

.hero-image {
  position: absolute;
  top: -15vw;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header {
  width: 760px;
  height: 300px;
  box-sizing: border-box;
  background-color: #21498e80;
  backdrop-filter: blur(35px);
  border-radius: 10px;
  padding: 4.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  box-shadow: 0 0.5rem 1rem rgba(black, 0.3);

  img {
    max-height: 100%;
  }

  .header-content {
    width: 410px;

    h1 {
      font-size: 32px;
    }

    h3 {
      font-size: 18px;
      opacity: 0.5;
      font-weight: normal;
      padding-bottom: 0.8rem;
    }

    h2 {
      font-size: 20px;
      font-weight: normal;
      padding-bottom: 1.2rem;
    }

    .header-button-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media only screen and (max-width: 864px) {
  .header {
    width: 65%;
    height: fit-content;
    flex-direction: column;
    padding: 3rem;

    img {
      max-width: 150px;
      width: 100%;
      margin: 0 auto;
    }

    .header-content {
      width: 100%;
      margin-top: 2rem;
      text-align: center;

      .header-button-container {
        width: fit-content;
        height: 140px;
        flex-direction: column;
        margin: 0 auto;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .header {
    width: 80%;
  }
}
</style>
