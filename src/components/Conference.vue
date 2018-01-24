<template>

    <div class="conference">

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
                    <v-card v-for="conference in sortAndFilter(conferences, $route.params.id)" :key="conference._id">

                            <v-card-text>
                                <h1>{{ conference.title }} {{ conference.emojiflag }}</h1>
                            </v-card-text>

                            <v-card-text>
                                    is a conference about <b>{{ commaSeparated(conference.category) }}</b>.
                                </v-card-text>

                                <v-card-text v-if="formatDate(conference.startdate) !== formatDate(conference.enddate)">
                                    It will be between 🗓 <em>{{ formatDate(conference.startdate) }}</em> and <em>{{ formatDate(conference.enddate) }}</em> in {{ conference.emojiflag }} <a :href="gmapsUrl(conference.where)" target="_blank">{{ conference.city }} - {{ conference.country }}</a>
                                </v-card-text>

                                <v-card-text v-else>
                                    It will be on 🗓 <em>{{ formatDate(conference.startdate) }}</em> in {{ conference.emojiflag }} <a :href="gmapsUrl(conference.where)" target="_blank">{{ conference.city }} - {{ conference.country }}</a>
                                </v-card-text>

                                <v-card-text>
                                    <a :href='gmapsUrl(conference.where)'>
                                        <img :src='gmapsImage(conference.where, googleMapsApiKey)'>
                                    </a>
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
                    <div v-for="conf in sortAndFilter(conferences, $route.params.id)" :key="conf.id">
                        <p>Discover other conferences in <router-link :to="`/country/${conf.country}`">{{ conf.emojiflag }} {{ conf.country }}</router-link>:</p>
                        <ul>
                            <li v-for="confz in sortForCountry(conferences, conf.country, $route.params.id)" :key="confz.id">
                                <span v-for="category in confz.category" :key="category">
                                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple" text-color="white">{{ category }}</v-chip></router-link>
                                </span>
                                <router-link :to="`/conference/${confz._id}`">{{ confz.title }}</router-link>
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
      googleMapsApiKey: 'AIzaSyAYEeB9GkE0xjCE_Km3RU_qJQfwGUsK8_Y',
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
      axios.get('https://aweconf.herokuapp.com/api/conference')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    formatDate (date) {
      const currentDate = new Date(date)
      return currentDate.toLocaleDateString()
    },
    sortAndFilter (conf, id) {
      return conf.filter(function (a) {
        return a._id === id
      }).splice(0, 1)
    },
    sortForCountry: function (conf, country, id) {
      return conf.filter(function (a) {
        return new Date(a.startdate) > new Date()
      }).filter(function (b) {
        return b.country === country
      }).sort(function (a, b) {
        return new Date(a.startdate) > new Date(b.startdate)
      }).filter(function (c) {
        return c._id !== id
      }).splice(0, 5)
    },
    commaSeparated: function (categories) {
      var cats = ''
      categories.forEach(function (category) {
        cats += category + ', '
      })
      return cats.substr(0, cats.length - 2)
    },
    gmapsImage (where, key) {
      const map = 'https://maps.googleapis.com/maps/api/staticmap?center=' + where.replace(' ', '+').replace('%20', '+') + '&key=' + key + '&zoom=15&scale=2&size=400x200&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:small%7Ccolor:0x5719B8%7Clabel:1%7C' + where.replace(' ', '+').replace('%20', '+')
      console.log(map)
      return map
    },
    gmapsUrl (where) {
      return 'https://www.google.com/maps/search/?api=1&query=' + where.replace(' ', '+')
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
