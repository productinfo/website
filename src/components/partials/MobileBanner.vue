<template>
    <div class="centerize">
        <p class="mt-4">{{ introMsg }}</p>
        <p class="hint" v-if="firstRun">{{ mobileMsg }}</p>
        <a href="https://itunes.apple.com/us/app/awesome-mobile-conferences/id1289255473?mt=8">
            <img src="../../assets/download-on-the-app-store.png" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=conference.mobile.awesome.boostco.de.amc">
            <img src="../../assets/google-play-badge.png" />
        </a>
        <v-btn href="tg://resolve?domain=aweconf_bot" color="light-blue" class="white--text" bottom>
            <v-icon left small dark>fab fa-telegram</v-icon>
            Telegram Bot
        </v-btn>
    </div>
</template>

<script>
export default {
  name: 'MobileBanner',
  data () {
    return {
      introMsg: 'Awesome Conference is a web and mobile application built to help developers, markerters, designers in finding the best conference around the world in an unique place.',
      mobileMsg: '👇 Stay always updated using our 📱 application 👇'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-title {
        font-size: 35px;
    }
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
    a {
        color: #5719B8;
    }
    .hint {
        color: darkgray;
        text-align: center;
    }
    .hint-left {
        color: darkgray;
        text-align: left;
    }
    .centerize {
        text-align: center !important;
    }
</style>
