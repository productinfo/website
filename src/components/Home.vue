<template>
    <div class="home">
        <p class="hint" v-if="firstRun">{{ instructionMsg1 }}<br/></p>
        <br/>
        <h1>{{ welcomeMsg }}</h1>
        <br/>
        <p>{{ introMsg }}</p>

        <p class="hint" v-if="firstRun">{{ instructionMsg4 }}<br/></p>
        <a href="https://itunes.apple.com/us/app/awesome-mobile-conferences/id1289255473?mt=8">
            <img src="../assets/appstore.png" />
        </a>
        <a href="https://play.google.com/store/apps/details?id=conference.mobile.awesome.boostco.de.amc">
            <img src="../assets/google-play-badge.png" />
        </a>
        <br/><br/>

        <p class="hint" v-if="firstRun">{{ instructionMsg2 }}<br/></p>
        <p>{{ latestMsg }}</p>
        <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                <span v-for="category in conference.category" :key="category">
                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple" text-color="white">{{ category }}</v-chip></router-link>
                </span>
                <router-link :to="`/conference/${conference.id}`">{{ conference.title }}</router-link>
            </li>
        </ul>
        <br />
        <br />
        <p class="hint" v-if="firstRun">{{ instructionMsg3 }}<br/></p>
        <router-link :to="`/submit`">
            <v-btn block color="deep-purple" dark>📩 Submit a new Conference</v-btn>
        </router-link>
        <br/><br/>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data () {
    return {
      welcomeMsg: 'Find the 👍 conferences around the 🌍!',
      introMsg: 'Awesome Conference is a fully open sourced and collaborative project about conference listings, available for mobile too.',
      instructionMsg1: 'You can navigate conferences by category tapping just above ⬆️.',
      instructionMsg2: 'Or have a quick look at the last ⏰ conference added so far.',
      instructionMsg3: 'And... if you know any interesting conference not listed yet, use the button that you can find in all the pages on the bottom.',
      instructionMsg4: 'We have two nice mobile 📱 apps to stay always update:',
      latestMsg: '🔎 Discover the last conferences added:',
      conferences: [],
      showSpinner: true,
      firstRun: false
    }
  },

  created () {
    this.fetchData()
    // first run show instructions
    this.firstRun = (this.$cookie.get('firstrun') !== '1')
    if (this.$cookie.get('firstrun') !== '1') {
      this.$cookie.set('firstrun', 1, 0)
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      axios.get('https://raw.githubusercontent.com/aweconf/awesome-mobile-conferences/master/contents.json')
        .then((resp) => {
          this.conferences = resp.data.conferences.reverse().slice(0, 10)
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
</style>
