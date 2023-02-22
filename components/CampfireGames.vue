<template>
    <div id="cfg-main">
        <h2 class="section-title" style="padding-bottom: 30px">The Campfire Games</h2>
        <p>
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
                <img class="team-picture" src="../assets/images/blue hiker marshie.png" alt="Blue marshie">
                <h3 class="team-title blue">Blue Team</h3>
                <p class="team-blurb">
                    The <strong class="blue">blue team</strong> is rational and clear-headed. Their curiosity and intelligence
              are some of their greatest assets in understanding and exploring the world around them.
                </p>
            </div>
            <div class="team-section">
                <img class="team-picture" src="../assets/images/red rider marshie.png" alt="Red marshie">
                <h3 class="team-title red">Red Team</h3>
                <p class="team-blurb">
                    The <strong class="red">red team</strong> is passionate and fiery! Their emotion is their strength in
              handling whatever comes their way.
                </p>
            </div>
            <div class="team-section">
                <img class="team-picture" src="../assets/images/green watcher marshie.png" alt="Green marshie">
                <h3 class="team-title green">Green Team</h3>
                <p class="team-blurb">
                    The <strong class="green">green team</strong> is adaptable&mdash;always growing and thriving in new and
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
    width: 80%;
    height: 300px;
    box-sizing: border-box;
    align-items: center;
    text-align: center;
    margin: auto;
}

#teams-div {
    display: grid;
    padding-top: 30px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.team-section {
    text-align: center;
}

img {
    max-height: 200px;
    margin: auto;
    border-color: red;
    border-width: 1px;
}

.team-title {
    padding-top: 15px;
}

.blue {
    color: blue;
}

.red {
    color: red;
}

.green {
    color: green;
}
</style>
