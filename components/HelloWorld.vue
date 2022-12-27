<template>
  <div>

    <header>
      <nav>
        <div id="logo-container">
          <a tag="img" href="/">
            <img src="~/public/bitcamp-brand/logos/logotype.png" id="logo-image" />
          </a>
        </div>
        <ul class=" nav-pages">
          <li class="page">
            <a href="/our-mission">Our Mission</a>
          </li>
          <li class="page">
            <a href="/tracks">Tracks</a>
          </li>
          <li class="dropdown-page">
            <a href="/mini-events" class="dropdown-text">Mini Events</a>
            <div class="dropdown-elements-container">
              <div class="dropdown-elements">
                <ul>
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
    </header>

    <div class="divider">
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
$bitcamp: #FF6F3F;
$mango: #FFAF3F;

nav {
  position: relative;
  font-size: 1.25vw;
  font-family: Aleo;
}

#logo-container {
  position: absolute;
  margin-left: 2%;
  height: 100%;
  width: 15%;
}

#logo-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}

.nav-pages {
  margin-left: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav-pages li {
  display: flex;
  align-items: center;
  text-decoration: none !important;

  :hover {
    color: $mango;
    text-decoration: underline;
  }
}

.nav-pages li a {
  color: black;
  text-decoration: none;
}

.divider {
  background-image: linear-gradient(180deg, lightgray, white);
  padding: 0.2%;
  position: relative;
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
}

.dropdown-elements {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-end;
  width: 130%;
  position: absolute;
  border: 0.1vw solid gray;
  border-radius: 10%;
  z-index: 1;
  background: white;
  height: 6vw;
}

.dropdown-elements ul {
  font-family: Avenir;
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 1vw;
  margin: 3% 6% 3% 6%;

}

.dropdown-elements li a {
  width: 100%;
  padding: 2%;
}

.dropdown-elements li:hover a {
  background: rgba($bitcamp, 0.3); //TODO change to variable
  color: $bitcamp;
  border-radius: 10%;
  width: 100%;
  text-decoration: none;
}
</style>