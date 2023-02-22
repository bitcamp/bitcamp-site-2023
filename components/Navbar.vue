<template>
  <header>
    <nav>
      <div class="non-pages">
        <div id="logo-container">
          <a tag="img" href="/">
            <img
              id="logo-with-text"
              src="~/public/bitcamp-brand/logos/logotype.png"
            />
            <img
              id="logo-image"
              src="~/public/bitcamp-brand/logos/bitcamp.png"
            />
          </a>
        </div>
        <div class="hamburgerContainer">
          <button
            class="hamburger hamburger--spin"
            type="button"
            style="color: #ffffff"
            :class="{ 'is-active': showDropdown }"
            @click="toggleDropdown"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <ul v-if="showDropdown || bigScreen" class="nav-pages">
        <li class="page">
          <a href="#mission">Our Mission</a>
        </li>
        <li class="page">
          <a href="#tracks">Tracks</a>
        </li>
        <li class="page">
          <a href="#mini-events">Mini Events</a>
        </li>
        <li class="page">
          <a href="#campfire-games">Campfire Games</a>
        </li>
        <!-- <li class="page">
          <a href="#schedule">Schedule</a>
        </li> -->
        <li class="page">
          <a href="#faq">FAQ</a>
        </li>
        <!-- <li class="page">
          <a href="#sponsor">Sponsors</a>
        </li> -->
        <template v-if="bigScreen">
          <li class="image">
            <img id="marshies" src="~/assets/images/rider.png" />
          </li>
          <li class="image">
            <img id="marshies" src="~/assets/images/hiker.png" />
          </li>
          <li class="image">
            <img id="marshies" src="~/assets/images/watcher.png" />
          </li>
          <a
            id="mlh-trust-badge"
            style="
              display: block;
              height: 32px;
              width: 32px;
              max-width: 100px;
              min-width: 60px;
              width: 10%;
              top: 0;
              margin-right: -1.5rem;
              margin-top: -1.5rem;
            "
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue"
            target="_blank"
            ><img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg"
              alt="Major League Hacking 2023 Hackathon Season"
              style="width: 100%"
          /></a>
        </template>
      </ul>
    </nav>
  </header>

  <div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavbarComponent',
};
</script>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showDropdown = ref(false);
const bigScreen = ref(false);

onMounted(() => {
  const startSize = window.innerWidth;
  if (startSize > 992) {
    bigScreen.value = true;
  } else {
    bigScreen.value = false;
  }
  window.addEventListener('resize', onresize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onresize);
});

function onresize() {
  const screenSize = window.innerWidth;

  if (screenSize <= 992) {
    bigScreen.value = false;
  } else {
    bigScreen.value = true;
    showDropdown.value = false;
  }
}

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped lang="scss">
$bitcamp: var(--color-bitcamp);
$mango: var(--color-mango);

header {
  margin: 0;
  z-index: 1;
  position: relative;
  padding: 1.5%;
  border: 0;
  width: 100%;
  background-color: #10274f;
}

nav {
  position: relative;
  margin: 0vw;
  font-size: 1.25vw;
  font-family: Aleo;
}

#logo-container {
  position: absolute;
  margin-left: 1%;
  height: 100%;
  width: 100%;
}

#marshie-container {
  position: absolute;
  margin-left: 80%;
  height: 100%;
  width: 100%;
}

#logo-with-text {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}

#logo-image {
  display: none;
}

#marshies {
  display: flex;
  height: 32px;
  width: 32px;
}

.nav-pages {
  margin-left: 15vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.nav-pages li {
  display: flex;
  align-items: center;
  text-decoration: none !important;
  z-index: 3;

  :hover {
    color: $mango;
    text-decoration: underline;
  }
}

.nav-pages li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.divider-large-screen {
  background-image: linear-gradient(180deg, lightgray, white);
  position: relative;
  padding: 0.2%;
  width: auto;
}

.dropdown-page {
  display: flex;
  flex-direction: column;
  width: auto;
  align-content: flex-start;
}

.dropdown-page:hover .dropdown-elements-container {
  display: flex;
}

.dropdown-elements-container {
  display: none;
  flex-direction: column;
  align-self: flex-start;
  width: 100%;
  position: relative;
  background-color: white;
  text-decoration: none !important;
}

.dropdown-elements {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  position: absolute;
  border: 0.1vw solid gray;
  border-radius: 10%;
  z-index: 1;
  background: white;
  height: fit-content;
  font-family: Avenir;
  width: 130%;
  position: absolute;
  text-decoration: none !important;
}

.dropdown-page:hover .dropdown-text {
  color: $mango;
  text-decoration: underline;
}

.dropdown-elements li {
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  width: 90%;
  font-size: 0.6rem;
  margin: 4%;
}

.dropdown-elements li a {
  width: 100%;
  padding: 2%;
  margin-left: 5%;
}

.dropdown-elements li:hover a {
  color: $bitcamp;
  border-radius: 0.5rem;
  width: 100%;
  text-decoration: none !important;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $bitcamp;
    opacity: 0.3;
    border-radius: 0.5rem;
    z-index: -1;
  }
}

.hamburgerContainer {
  display: none;
}

.divider {
  background-image: linear-gradient(180deg, lightgray, white);
  position: relative;
  padding: 0.2%;
  width: auto;
}

@media only screen and (max-width: 992px) {
  nav {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin: 0;
  }

  non-pages {
    display: flex;
    flex-direction: row;
  }

  #logo-with-text {
    display: none;
    position: relative;
  }

  #logo-image {
    display: flex;
    max-width: 100%;
    width: 48px;
    height: 48px;
  }

  .nav-pages {
    margin-left: 1vw;
    width: 100%;
    font-size: 32px;
    background-color: #10274f;
    position: relative;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    padding-bottom: 5%;
  }

  .nav-pages li {
    margin-top: 1vw;
  }

  .hamburgerContainer {
    position: relative;
    display: flex;
    margin-right: 1vw;
    align-items: flex-end;
    flex-direction: column;
  }

  .hamburgerBars {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .dropdown-elements {
    align-self: flex-start;
    margin-left: 2vw;
    position: relative;
    border: none;
  }

  .dropdown-elements li {
    margin: 2%;
  }

  .dropdown-elements li:hover a {
    background-color: white;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 5vw;
    height: 0.75vw;
    margin: 0.5vw 0vw;
    border-radius: 1rem;
    background-color: #ffffff;
  }

  .divider {
    display: none;
  }

  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }

  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger.is-active:hover {
    opacity: 0.7;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: #ffffff;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  /*
    * Spin
    */
  .hamburger--spin .hamburger-inner {
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin .hamburger-inner::before {
    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
  }

  .hamburger--spin .hamburger-inner::after {
    transition: bottom 0.1s 0.25s ease-in,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--spin.is-active .hamburger-inner {
    transform: rotate(225deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--spin.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
  }

  .hamburger--spin.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.1s ease-out,
      transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
}
</style>
