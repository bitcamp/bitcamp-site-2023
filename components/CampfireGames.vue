<template>
  <div id="campfire-games" class="section">
    <h1 class="section-title">Campfire Games</h1>
    <p id="cfg-blurb">
      The Campfire Games is a way to learn, grow, and build with the Bitcamp
      Community. At the start of this year's event, you will join one of three
      teams based on your personality and interests &mdash; joining forces with
      hackers from around the world! By winning unique challenges, attending
      workshops, and participating in mini-events, you'll rack up points for
      your team. At the end of Bitcamp, members of the winning team will receive
      limited edition Bitcamp Apparel. Find your community, develop your team
      identity, and collaborate on something bigger than yourself:
      <br />#FindYourFrontier
    </p>

    <div id="teams-div">
      <div class="team-section">
        <img
          class="team-picture red-marshie"
          src="../assets/images/marshies/rider.png"
          alt="Red marshie"
        />
        <h3 class="team-title red">Red Team</h3>
        <p class="team-blurb">
          The red team is <strong class="red">passionate</strong> and
          <strong class="red">fiery</strong>! Their emotion is their strength in
          handling whatever comes their way.
        </p>
      </div>
      <div class="team-section">
        <img
          class="team-picture"
          src="../assets/images/marshies/hiker.png"
          alt="Blue marshie"
        />
        <h3 class="team-title blue">Blue Team</h3>
        <p class="team-blurb">
          The blue team is <strong class="blue">rational</strong> and
          <strong class="blue">clear-headed</strong>. Their curiosity and
          intelligence are some of their greatest assets in understanding and
          exploring the world around them.
        </p>
      </div>
      <div class="team-section">
        <img
          class="team-picture"
          src="../assets/images/marshies/watcher.png"
          alt="Green marshie"
        />
        <h3 class="team-title green">Green Team</h3>
        <p class="team-blurb">
          The green team is
          <strong class="green">adaptable</strong>&mdash;always
          <strong class="green">growing</strong> and thriving in new and
          challenging circumstances.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#campfire-games {
  width: 75%;
  /* height: 300px; */
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  margin: auto;
  color: white;
  position: relative;
  margin-bottom: 10px;
}

#cfg-blurb {
  padding-bottom: 10px;
}

#teams-div {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 30px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
}

.section-title {
  margin-bottom: 1rem;
}

.team-section {
  width: 30%;
  text-align: center;
}

.team-title {
  padding-bottom: 25px;
}

img {
  height: 200px;
  margin: auto;
  border-color: red;
  border-width: 1px;
  padding-bottom: 10px;
}

.team-title {
  padding-top: 15px;
}

@media only screen and (max-width: 1000px) {
  .team-section {
    width: 100%;
  }
}

.blue {
  color: #70cefe;
}

.red {
  color: #ff6f75;
}

.green {
  color: #46ea79;
}
</style>
