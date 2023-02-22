<template>
  <h1 id="mini-events">Mini-Events</h1>

  <div class="mini-events-container">
    <article class="card">
      <img src="~/assets/svg/color-war.svg" alt="Color War Photo" />
      <div class="text">
        <h1>Color War</h1>
        <p>
          Colorwar is a rapid-fire live-design competition and one of the
          highlights of Bitcamp. Compete in our online design challenge for a
          chance to draw in front of a live audience at Bitcamp for some cool
          prizes!
        </p>
      </div>
    </article>
    <article class="card">
      <img src="~/assets/svg/design-den.svg" alt="Design Den Photo" />
      <div class="text">
        <h1>Design Den</h1>
        <p>
          Need help designing your hack during Bitcamp? Stop by Design Den, and
          Bitcamp’s design team will help you work on your hack’s user interface
          and user experience. It’s like office hours, but for design 😎
        </p>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#mini-events {
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 3rem;
}
.mini-events-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 70%;
  margin: 0 auto;

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: calc(33.33% - 30px);
  margin: 15px;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    margin-bottom: 10px;
  }

  .text {
    margin: 10px;
    flex: 1;
  }

  .text h1 {
    margin-bottom: 10px;
  }

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: calc(50% - 30px);

    .text {
      margin: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.98px) {
    width: calc(50% - 30px);
    .text {
      margin: 5px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 20px;

    .text {
      margin: 0px;
    }
  }
}
</style>
