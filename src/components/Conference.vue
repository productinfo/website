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

                        <div v-if="conference.date">
                        <v-card-text v-if="formatDate(conference.date.start) !== formatDate(conference.date.end)">
                            It will be between 🗓 <em>{{ formatDate(conference.date.start) }}</em> and <em>{{
                            formatDate(conference.date.end) }}</em> in
                            <router-link :to="`/city/${conference.city}`">{{ conference.city }}</router-link>
                            , {{ conference.emojiflag }}
                            <router-link :to="`/country/${conference.country}`">{{ conference.country }}</router-link>
                        </v-card-text>

                        <v-card-text v-else>
                            It will be on 🗓 <em>{{ formatDate(conference.date.start) }}</em> in <router-link :to="`/city/${conference.city}`">{{ conference.city }}</router-link>
                            , {{ conference.emojiflag }}
                            <router-link :to="`/country/${conference.country}`">{{ conference.country }}</router-link>
                        </v-card-text>
                        </div>

                        <div v-if="conference.geo">
                            <map-aweconf :conference="conference"></map-aweconf>
                        </div>

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
                        <p v-if="totalCountryConf > 0">
                            Discover <b>{{ limit }}</b> more 🔥🔥 conferences in
                            <router-link :to="`/country/${conference.country}`">{{ conference.emojiflag }} {{ conference.country }}
                            </router-link>
                            :
                        </p>
                        <suggestion-aweconf :url="`https://aweconf.herokuapp.com/api/conference/country/${conference.country}`" :exclude="conference._id" :limit="limit" @totalConferenceUpdated="totalCountryConf = $event"></suggestion-aweconf>
                    </div>

                </v-flex>

            </v-layout>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'
import Suggestion from './partials/Suggestion.vue'
import Map from './partials/Map.vue'

export default {
  name: 'Conference',
  components: {
    'suggestion-aweconf': Suggestion,
    'map-aweconf': Map
  },
  data () {
    return {
      totalCountryConf: 0,
      limit: 5,
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
          // this.fetchCountry()
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
