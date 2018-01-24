<template>
    <div class="home">

        <vue-headful
                title="🎉 Awesome Conferences"
                description="Awesome Conferences is a collaborative and free listing of the best developer, marketer, designer conference around the world"
                url="https://aweconf.com"
                keywords="awesome conference, designer conference, developer conference, android, ios, mobile, ux, ui"
                :image="undefined"
        />

        <p class="hint" v-if="firstRun">{{ instructionMsg1 }}<br/></p>
        <div class="intro">
            <h1>{{ welcomeMsg }} <b>{{ total }}</b> {{ welcomeMsg2}}</h1>
        </div>
        <p class="hint" v-if="firstRun">{{ instructionMsg2 }}<br/></p>
        <p>{{ quickLook }}</p>
        <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                <span v-for="category in conference.category" :key="category">
                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple" text-color="white">{{ category }}</v-chip></router-link>
                </span>
                <router-link :to="`/conference/${conference._id}`">{{ conference.title }}</router-link>
            </li>
        </ul>
        <br/>
        <router-link :to="{ path: '/category/all'}">{{ discoverMore }}</router-link>

        <!--div class="mobileapps">
            <p class="hint" v-if="firstRun">{{ mobileMsg }}</p>
            <a href="https://itunes.apple.com/us/app/awesome-mobile-conferences/id1289255473?mt=8">
                <img src="../assets/download-on-the-app-store.png" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=conference.mobile.awesome.boostco.de.amc">
                <img src="../assets/google-play-badge.png" />
            </a>
        </div-->

        <div class="submit">
            <p class="hint" v-if="firstRun">{{ submitMsg }}</p>
            <router-link :to="`/submit`">
                <v-btn block color="deep-purple" dark>📩 Submit a new Conference</v-btn>
            </router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data () {
    return {
      welcomeMsg: '🔎 more than',
      welcomeMsg2: 'conferences around the 🌍',
      introMsg: 'Awesome Conference is a fully open sourced and collaborative project about conference listings, available for mobile too.',
      instructionMsg1: 'You can navigate conferences by category tapping just above ⬆️.',
      instructionMsg2: 'Or have a quick look at the last ⏰ conference added so far.',
      mobileMsg: 'Stay always updated using our 📱 dedicated application:',
      submitMsg: 'Support the project suggesting a 🆕 conference:',
      quickLook: 'Have a ⚡️👀 at the latest conferences published:',
      discoverMore: 'or 🧐 discover more...',
      conferences: [],
      showSpinner: true,
      firstRun: false,
      total: ''
    }
  },

  created () {
    this.fetchData()
    // first run show instructions
    const run = parseInt(this.$cookie.get('firstrun')) || 0
    this.firstRun = (run < 3)
    if (this.firstRun) {
      var visit = run + 1
      this.$cookie.set('firstrun', visit, 0)
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      axios.get('https://aweconf.herokuapp.com/api/conference/last/10')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.total = 5 * Math.round(resp.data.total / 5)
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
.intro {
    margin-top: 38px;
    margin-bottom: 42px;
}
.mobileapps {
  margin-top: 40px;
}
.submit {
    margin-top: 40px;
    margin-bottom: 30px;
}
</style>
