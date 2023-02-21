<template>
  <div>
    <div class="main">
      <img src="/bitcamp-brand/logos/bitcamp.png" />
      <div class="content">
        <h1>Find your Frontier!</h1>
        <h3>Bitcamp returns April 7-9, 2023</h3>
        <h2>Applications are now open!</h2>
        <div class="button-div">
          <Button text="Hacker" size="large"></Button>
          <Button text="Volunteer" size="large" color="#324A79"></Button>
          <Button text="Mentor" size="large" color="#8F9EBC"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'HeaderComponent',
};
</script>

<style scoped lang="scss">
.main {
  width: 760px;
  height: 300px;
  box-sizing: border-box;
  background-color: #21498e80;
  backdrop-filter: blur(35px);
  border-radius: 10px;
  margin: 10% auto;
  padding: 4.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;

  img {
    max-height: 100%;
  }

  .content {
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

    .button-div {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}

@media only screen and (max-width: 864px) {
  .main {
    width: 65%;
    height: fit-content;
    flex-direction: column;
    padding: 3rem;

    img {
      max-width: 200px;
      width: 100%;
      margin: 0 auto;
    }

    .content {
      width: 100%;
      margin-top: 2rem;
      text-align: center;

      .button-div {
        width: fit-content;
        height: 140px;
        flex-direction: column;
        margin: 0 auto;
      }
    }
  }
}

@media only screen and (max-width: 480px) {
  .main {
    width: 80%;
  }
}
</style>
