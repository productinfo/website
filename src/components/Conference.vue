<template>

    <div class="conference">

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
                    <v-card v-for="conference in sortAndFilter(conferences, $route.params.id)" :key="conference.id">

                            <v-card-text>
                                <h1>{{ conference.title }} {{ conference.emojiflag }}</h1>
                            </v-card-text>

                            <v-card-text>
                                    is a conference about <b v-for="category in conference.category" :key="category">{{category}}, </b>
                                </v-card-text>
                                <v-card-text>
                                    It will be between 🗓 <em>{{ conference.startdate }}</em> and <em>{{ conference.enddate }}</em> in {{ conference.emojiflag }} <a :href="gmapsUrl(conference.where)" target="_blank">{{ conference.city }} - {{ conference.country }}</a>
                                </v-card-text>
                                <v-card-text>For further details: 🔗 <a :href="conference.homepage" target="_blank">{{ conference.homepage }}</a> </v-card-text>
                                <template v-if="conference.callforpaper">
                                    <v-card-text>At this very moment 🎤 call for paper is open.</v-card-text>
                                </template>
                                <template v-else>
                                    <v-card-text>Sadly call for paper 🎤 is closed.</v-card-text>
                                </template>

                    </v-card>
                    <br/>
                    <div v-for="conference in sortAndFilter(conferences, $route.params.id)" :key="conference.id">
                        <p>Discover other conferences in {{ conference.emojiflag }} {{ conference.country }}:</p>
                        <ul>
                            <li v-for="conf in sortForCountry(conferences, conference.country)" :key="conf.id">
                                <span v-for="category in conf.category" :key="category">
                                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple" text-color="white">{{ category }}</v-chip></router-link>
                                </span>
                                <router-link :to="`/conference/${conf.id}`">{{ conf.title }}</router-link>
                            </li>
                        </ul>
                    </div>

                </v-flex>

            </v-layout>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Conference',

  data () {
    return {
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
      axios.get('https://raw.githubusercontent.com/amobconf/awesome-mobile-conferences/master/contents.json')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    sortAndFilter (conf, id) {
      return conf.filter(function (a) {
        return a.id === id
      })
    },
    sortForCountry (conf, country) {
      return conf.filter(function (a) {
        return new Date(a.startdate) > new Date()
      }).filter(function (b) {
        return b.country === country
      }).sort(function (a, b) {
        return new Date(a.startdate) > new Date(b.startdate)
      })
    },
    gmapsUrl (where) {
      return 'https://www.google.com/maps/search/?api=1&query=' + where
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
        text-decoration: none;
    }

</style>
