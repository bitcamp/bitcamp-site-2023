<template>

    <header>
        <nav>
            <div class="non-pages">
                <div id="logo-container">
                    <a tag="img" href="/">
                        <img src="~/public/bitcamp-brand/logos/logotype.png" id="logo-with-text">
                        <img src="~/public/bitcamp-brand/logos/bitcamp.png" id="logo-image">
                    </a>
                </div>
                <div class="hamburgerContainer">
                    <div @click="toggleDropdown" class="hamburgerBars">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                </div>

            </div>


            <ul v-if="showDropdown || bigScreen" class="nav-pages">
                <li class="page">
                    <a href="/our-mission">Our Mission</a>
                </li>
                <li class="page">
                    <a href="/tracks">Tracks</a>
                </li>
                <li class="dropdown-page">
                    <a href="/mini-events" class="dropdown-text">Mini Events</a>
                    <div class="dropdown-elements-container">
                        <ul class="dropdown-elements">
                            <li>
                                <a href="/mini-events/event1">Value</a>
                            </li>
                            <li>
                                <a href="/mini-events/event2">Value</a>
                            </li>
                            <li>
                                <a href="/mini-events/event3">Value</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="page">
                    <a href="/campfire-games">Campfire Games</a>
                </li>
                <li class="page">
                    <a href="/schedule">Schedule</a>
                </li>
                <li class="page">
                    <a href="/faq">FAQ</a>
                </li>
                <li class="page">
                    <a href="/sponsors">Sponsors</a>
                </li>
            </ul>

        </nav>
        <div class="divider">
        </div>

    </header>



    <div>
        <slot />
    </div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showDropdown = ref(false);
const bigScreen = ref(false);

onMounted(() => {
    const startSize = window.innerWidth;
    if (startSize > 992) {
        bigScreen.value = true;
    } else {
        bigScreen.value = false;
    }
    window.addEventListener("resize", onresize);
})

onUnmounted(() => {
    window.removeEventListener("resize", onresize);
})

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
    padding: 0;
    border: 0;
    width: 100%;
    background-color: white;
}

nav {
    position: relative;
    margin: 1vw;
    font-size: 1.25vw;
    font-family: Aleo;
}

#logo-container {
    position: absolute;
    margin-left: 1%;
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

.nav-pages {
    margin-left: 15vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
    color: black;
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
}

.dropdown-elements li:hover a {
    background-color: rgba(#ff6f3f, 0.3);
    color: $bitcamp;
    border-radius: 0.5rem;
    width: 100%;
    text-decoration: none !important;
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
        display: block;
        max-width: 100%;
        max-height: 5vw;
    }

    .nav-pages {
        margin-left: 1vw;
        width: 100%;
        background-color: white;
        position: relative;
        flex-direction: column;
        align-self: flex-start;
        align-items: flex-start;
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
        background-color: $bitcamp;
    }

    .divider {
        display: none;
    }

}
</style>

