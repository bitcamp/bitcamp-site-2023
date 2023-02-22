<template>
    <div id="cfg-main">
        <h2 class="section-title" style="padding-bottom: 30px">The Campfire Games</h2>
        <p id="cfg-blurb">
            The Campfire Games is a brand new way to learn, grow, and build
            with the Bitcamp Community. At the start of this year's event, you will join one of three teams based
            on your personality and interests&mdash;joining forces with hackers from around the world! By winning unique
            challenges, attending workshops, and participating in mini-events, you'll rack up points
            for your team. At the end of Bitcamp, members of the winning team will receive limited edition Bitcamp Apparel.
            Find your community, develop your team identity, and collaborate on something bigger than yourself:
            #FindYourFrontier
        </p>

        <div id="teams-div">
            <div class="team-section">
                <img class="team-picture" src="../assets/images/red rider marshie.png" alt="Red marshie">
                <h3 class="team-title red">Red Team</h3>
                <p class="team-blurb">
                    The red team is <strong class="red">passionate</strong> and <strong class="red">fiery</strong>! Their emotion is their strength in
              handling whatever comes their way.
                </p>
            </div>
            <div class="team-section">
                <img class="team-picture" src="../assets/images/blue hiker marshie.png" alt="Blue marshie">
                <h3 class="team-title blue">Blue Team</h3>
                <p class="team-blurb">
                    The blue team is <strong class="blue">rational</strong> and <strong class="blue">clear-headed</strong>. Their curiosity and intelligence
              are some of their greatest assets in understanding and exploring the world around them.
                </p>
            </div>
            <div class="team-section">
                <img class="team-picture" src="../assets/images/green watcher marshie.png" alt="Green marshie">
                <h3 class="team-title green">Green Team</h3>
                <p class="team-blurb">
                    The green team is <strong class="green">adaptable</strong>&mdash;always <strong class="green">growing</strong> and thriving in new and
              challenging circumstances.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
#cfg-main {
    width: 75%;
    height: 300px;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    margin: auto;
}

#cfg-blurb {
    padding-bottom: 10px;
}

#teams-div {
    display: flex;
    flex-wrap: wrap;
    padding-top: 30px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    justify-content: center;
}

.team-section {
    width: 20%;
    text-align: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
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

@media only screen and (max-width: 864px) {
    .team-section {
        width: 100%;
    }
}

.blue { color: blue; }
.red { color: red; }
.green { color: green; }
</style>
