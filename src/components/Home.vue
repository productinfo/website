<template>
    <div class="home">
        <br/>
        <p>{{ introMsg }}</p>
        <br/>
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
        <router-link :to="`/submit`">
            <v-btn round color="deep-purple" dark>📩 Submit a new Conference</v-btn>
        </router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data () {
    return {
      introMsg: 'Awesome Conferences is a fully open sourced and collaborative project about conference listings, browse the categories or submit a new one.',
      latestMsg: 'Discover the last conferences added:',
      conferences: [],
      showSpinner: true
    }
  },

  created () {
    this.fetchData()
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
