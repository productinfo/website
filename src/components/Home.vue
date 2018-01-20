<template>
    <div class="home">
        <h1>{{ welcomeMsg }}</h1>
        <br/>
        <p>{{ introMsg }}</p>
        <em v-if="firstRun">{{ instructionMsg1 }}<br/><br/></em>
        <em v-if="firstRun">{{ instructionMsg2 }}<br/></em>
        <h3>{{ latestMsg }}</h3>
        <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
        <ul>
            <li v-for="conference in sortAndFilter(conferences)" :key="conference.id">
                <span v-for="category in conference.category" :key="category">
                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple" text-color="white">{{ category }}</v-chip></router-link>
                </span>
                <router-link :to="`/conference/${conference.id}`">{{ conference.title }}</router-link>
            </li>
        </ul>
        <br />
        <br />
        <em v-if="firstRun">{{ instructionMsg3 }}<br/></em>
        <router-link :to="`/submit`">
            <v-btn round color="deep-purple" dark>📩 Submit a new Conference</v-btn>
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
      introMsg: 'Awesome Conference is a fully open sourced and collaborative project about conference listings.',
      instructionMsg1: 'Navigate conferences by category.',
      instructionMsg2: 'Or have a quick look at the last conference added so far.',
      instructionMsg3: 'And... if you know any interesting conference not listed yet, use the button that you can find in all the pages on the bottom.',
      latestMsg: 'Discover the last conferences added:',
      conferences: [],
      showSpinner: true,
      firstRun: false
    }
  },

  created () {
    this.fetchData()
    // first run show instructions
    console.log(this.firstRun)
    console.log(this.$cookie.get('firstrun'))
    this.firstRun = (this.$cookie.get('firstrun') !== '1')
    console.log(this.firstRun)
    if (this.$cookie.get('firstrun') !== '1') {
      this.$cookie.set('firstrun', 1, 0)
      console.log('cookie set')
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      axios.get('https://raw.githubusercontent.com/aweconf/awesome-mobile-conferences/master/contents.json')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sortAndFilter (conf) {
      return conf.reverse().slice(0, 10)
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
</style>
