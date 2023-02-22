<template>
  <div id="mini-events">
    <h1 id="mini-events-title">Mini-Events</h1>

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
        <span class="button-wrap">
          <Button
            text="Learn More"
            link="https://bitcmp.medium.com/calling-all-creatives-for-colorwar-443f19759cc2"
            size="xl"
            color="#324A79"
          />
        </span>
      </article>
      <article class="card">
        <img src="~/assets/svg/design-den.svg" alt="Design Den Photo" />
        <div class="text">
          <h1>Design Den</h1>
          <p>
            Need help designing your hack during Bitcamp? Stop by Design Den,
            and Bitcamp’s design team will help you work on your hack’s user
            interface and user experience. It’s like office hours, but for
            design 😎
          </p>
        </div>
        <span class="button-wrap">
          <Button
            text="Watch on YouTube"
            link="https://www.youtube.com/watch?v=jjP1iaQka9Y&ab_channel=Bitcamp"
            size="xl"
            color="#324A79"
          />
        </span>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#mini-events {
  text-align: center;
  box-sizing: border-box;
  background-color: #21498e80;
  backdrop-filter: blur(35px);
  border-radius: 10px;
  color: white;
  box-shadow: 0 0.5rem 1rem rgba(black, 0.3);
  width: 70%;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-top: 5rem;

  @media (min-width: 576px) and (max-width: 767.8px) {
    width: 90%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
}

.mini-events-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  margin: 0 auto;
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
    margin-bottom: 15px;
  }

  .text {
    margin: 5px;
    flex: 1;
  }

  .button-wrap {
    margin-top: 2rem;
  }

  .text h1 {
    margin-bottom: 15px;
  }

  Button {
    margin-top: 100px;
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
