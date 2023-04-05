<template>
  <div id="hero" class="section">
    <div class="hero-image-wrapper">
      <img class="hero-image" src="~/assets/images/background/hero.png" />
    </div>
    <div class="header">
      <img src="/bitcamp-brand/logos/bitcamp.png" />
      <div class="header-content">
        <h1>Find Your Frontier!</h1>
        <h3>April 7-9, 2023 @ XFINITY Center</h3>
        <!-- <h2>Applications are now open!</h2> -->
        <h2>Registrations are now closed. Click below to join our waitlist!</h2>
        <div class="header-button-container">
          <Button text="Click Here!" link="https://forms.gle/C31xLjHLnLkBNRSXA" size="large" />
          <!-- <Button text="Hacker" link="https://register.bit.camp" size="medium" />
          <Button text="Volunteer" link="https://forms.gle/kyQwDzX7UKDEwa7b9" size="medium" color="#10274f" />
          <Button text="Mentor" link="https://forms.gle/kP2nrzPzwd6PD8nLA" size="medium" color="#324A79" />
          <Button text="Workshop" link="https://forms.gle/wXKe5ZyiJ1f14tDs6" size="medium" color="#8F9EBC" /> -->
        </div>
      </div>
    </div>
  </div>
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

  @media (max-width: 576px) {
    margin-bottom: 0rem !important;
  }
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  top: -15vw;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 576px) {
    top: 0;
    width: 200%;
  }
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
        flex-direction: column;
        margin: 0 auto;
        gap: 0.75rem;

        & :deep(.button) {
          width: 130px !important;
        }
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
