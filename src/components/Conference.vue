<template>

    <div class="conference">

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
                    <v-card>

                        <vue-headful
                                :title="`${conference.title} / Awesome Conferences`"
                                :description="`Discover more about ${conference.title} conference in ${conference.city} ${conference.country}`"
                                :url="`https://aweconf.com/#/conference/${$route.params.id}`"
                        />

                        <v-card-text>
                            <h1>{{ conference.title }} {{ conference.emojiflag }}</h1>
                        </v-card-text>

                        <v-card-text>
                            is a conference about <b>{{ commaSeparated(conference.category) }}</b>.
                        </v-card-text>

                        <v-card-text v-if="formatDate(conference.startdate) !== formatDate(conference.enddate)">
                            It will be between 🗓 <em>{{ formatDate(conference.startdate) }}</em> and <em>{{
                            formatDate(conference.enddate) }}</em> in
                            <router-link :to="`/city/${conference.city}`">{{ conference.city }}</router-link>
                            , {{ conference.emojiflag }}
                            <router-link :to="`/country/${conference.country}`">{{ conference.country }}</router-link>
                        </v-card-text>

                        <v-card-text v-else>
                            It will be on 🗓 <em>{{ formatDate(conference.startdate) }}</em> in <router-link :to="`/city/${conference.city}`">{{ conference.city }}</router-link>
                            , {{ conference.emojiflag }}
                            <router-link :to="`/country/${conference.country}`">{{ conference.country }}</router-link>
                        </v-card-text>

                        <v-card-text>
                            <template>
                                <gmap-map
                                        :center="{ lat: conference.lat ? conference.lat : 0, lng: conference.lon ? conference.lon : 0}"
                                        :zoom="18"
                                        style="width: 100%; height: 300px"
                                >
                                    <google-cluster>
                                        <gmap-marker
                                                :position="{ lat: conference.lat ? conference.lat : 0, lng: conference.lon ? conference.lon : 0}"
                                                icon="https://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                                                :clickable="true"
                                                :draggable="false"
                                                @click="$router.push({ path: '/conference/' + conference._id })"
                                        ></gmap-marker>
                                    </google-cluster>
                                </gmap-map>
                            </template>
                        </v-card-text>

                        <v-card-text>For further details: 🔗 <a :href="addReferralTo(conference.homepage)" target="_blank">{{
                            conference.homepage }}</a></v-card-text>

                        <template v-if="conference.callforpaper">
                            <v-card-text>At this very moment 🎤 call for paper is open, feel free to submit your talk.</v-card-text>
                        </template>
                        <template v-else>
                            <v-card-text>Sadly call for paper 🎤 is closed.</v-card-text>
                        </template>

                    </v-card>
                    <br/>
                    <div>
                        <p>Discover other conferences in
                            <router-link :to="`/country/${conference.country}`">{{ conference.emojiflag }} {{ conference.country }}
                            </router-link>
                            :
                        </p>
                        <ul>
                            <li v-for="confz in conferences"
                                :key="confz.id">
                                <span v-for="category in confz.category" :key="category">
                                    <router-link :to="`/category/${category}`"><v-chip color="deep-purple"
                                                                                       text-color="white">{{ category }}</v-chip></router-link>
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
      conference: {},
      conferences: [],
      markers: [],
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
      this.showSpinner = true

      axios
        .get('https://aweconf.herokuapp.com/api/conference/id/' + this.$route.params.id)
        .then((resp) => {
          this.conference = resp.data.conference
          // retrieve conference in this country
          this.fetchCountry()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchCountry () {
      axios
        .get('https://aweconf.herokuapp.com/api/conference/country/' + this.conference.country)
        .then((resp) => {
          let id = this.$route.params.id
          this.conferences = resp.data.conferences.filter(function (conf) {
            return conf._id !== id
          })

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
    commaSeparated: function (categories) {
      var cats = ''
      if (categories) {
        categories.forEach(function (category) {
          cats += category + ', '
        })
      }
      return cats.substr(0, cats.length - 2)
    },
    addReferralTo (url) {
      return url + '?ref=aweconf'
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
