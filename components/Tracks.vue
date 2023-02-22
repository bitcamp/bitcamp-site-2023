<template>
  <div id="tracks">
    <h1 id="tracks-title">Tracks</h1>

    <div class="tracks-container">
      <article class="card">
        <img src="~/assets/svg/general.svg" alt="General Track Photo" />
        <div class="text">
          <h1>General Track</h1>
          <p>
            For any and all hackers! Build the perfect hack using hardware,
            software, and collaboration with other tech-lovers, design thinkers,
            and students - all skill and experience levels are welcome!
          </p>
        </div>
      </article>
      <article class="card">
        <img src="~/assets/svg/beginner.svg" alt="Beginner Track Photo" />
        <div class="text">
          <h1>Beginner Track</h1>
          <p>
            New to hackathons? Don't know how to code? No worries! At Bitcamp,
            you'll have access to beginner-friendly workshops, helpful mentors,
            personalized one-on-one sessions, and resources to kickstart your
            coding journey.
          </p>
        </div>
      </article>
      <article class="card">
        <img src="~/assets/svg/hardware.svg" alt="Hardware Track Photo" />
        <div class="text">
          <h1>Hardware Track</h1>
          <p>
            Embark on your hardware journey at Bitcamp with access to exclusive
            hardware materials, mentors, and workshops! We'll provide all the
            resources needed to build your very own hardware project and master
            hardware fundamentals.
          </p>
        </div>
      </article>
      <article class="card">
        <img src="~/assets/svg/quantum.svg" alt="Quantum Track Photo" />
        <div class="text">
          <h1>Quantum Track</h1>
          <p>
            Hackers will delve into the field of quantum computing with
            exclusive mentors, sponsors, and workshops! Hackers will use their
            knowledge of Python and other computing skills on educational and
            interactive Quantum Track activities.
          </p>
        </div>
      </article>
      <article class="card">
        <img src="~/assets/svg/ml.svg" alt="Machine Learning Track Photo" />
        <div class="text">
          <h1>Machine Learning Track</h1>
          <p>
            Our newest track! If you’re wowed by recent AI advancements like
            ChatGPT, this is the track for you! We will have ML-related
            workshops, guest speakers, and activities (basic programming skills
            highly recommended).
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#tracks-title {
  text-align: center;
  margin-bottom: 3rem;
}
.tracks-container {
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
  margin-bottom: 15px;

  img {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .text {
    margin: 5px;
    flex: 1;
  }

  .text h1 {
    margin-bottom: 15px;
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
