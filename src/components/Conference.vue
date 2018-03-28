<template>

    <div class="conference">

        <vue-headful
                :title="`${conference.title} / Awesome Conferences`"
                :description="`Discover more about ${conference.title} conference in ${conference.city} ${conference.country}`"
                :url="`https://aweconf.com/#/c/${conference.slug}`"
        />

        <template v-if="conference.geo">
            <map-aweconf :conference="conference"></map-aweconf>
        </template>

        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title>
                                {{ conference.title }}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                            <editbadge-aweconf :owner="conference.owner" :slug="conference.slug"></editbadge-aweconf>
                        </v-toolbar>
                        <v-card-text>
                            <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
                            <v-card-text>
                                It is a conference about <b>{{ commaSeparated(conference.category) }}</b>.
                            </v-card-text>

                            <template v-if="conference.date">
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
                            </template>

                            <v-card-text v-if="conference.callforpaper">
                                At this very moment 🎤 call for paper is open, feel free to submit your talk.
                            </v-card-text>

                            <v-card-text v-if="speakers.length > 0">
                                <p>You will be able to meet and listen to the 🎤 talks of:</p>
                                <template v-for="speaker in speakers">
                                    <twitter-badge :account="speaker" :key="speaker"></twitter-badge>
                                </template>
                            </v-card-text>

                            <v-card-text>For further details: 🔗 <a :href="addReferralTo(conference.homepage)" target="_blank">{{
                                conference.title }} Website</a></v-card-text>

                            <attendees-aweconf :reload="fetchData" :conferenceId="conference.id" :attendees="attendees"></attendees-aweconf>

                        </v-card-text>
                    </v-card>
                    <v-layout>
                        <v-content class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left mt-2 mb-4">
                            <p v-if="totalCountryConf > 0">
                                Discover <b>{{ limit }}</b> more 🔥🔥 conferences in
                                <router-link :to="`/country/${conference.country}`">{{ conference.emojiflag }} {{ conference.country }}
                                </router-link>
                                :
                            </p>
                            <suggestion-aweconf :url="`${this.$store.state.baseUrl}/api/conference/country/${conference.country}`" :exclude="conference._id" :limit="limit" @totalConferenceUpdated="totalCountryConf = $event"></suggestion-aweconf>
                        </v-content>
                    </v-layout>
                </v-flex>
            </v-layout>

        </v-container>

    </div>
</template>

<script>
import axios from 'axios'
import Suggestion from './partials/Suggestion.vue'
import Map from './partials/Map.vue'
import TwitterBadge from './partials/TwitterBadge.vue'
import Attendee from './partials/Attendee.vue'
import EditBadge from './partials/EditBadge.vue'
import ImageFlickr from './partials/ImageFlickr'

export default {
  name: 'Conference',
  components: {
    'image-flickr': ImageFlickr,
    'twitter-badge': TwitterBadge,
    'suggestion-aweconf': Suggestion,
    'map-aweconf': Map,
    'attendees-aweconf': Attendee,
    'editbadge-aweconf': EditBadge

  },
  data () {
    return {
      totalCountryConf: 0,
      total: 0,
      limit: 5,
      conference: {},
      conferences: [],
      speakers: [],
      attendees: [],
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

      var url = ''

      if (this.$route.params.slug) {
        url = this.$store.state.baseUrl + '/api/conference/slug/' + this.$route.params.slug
      }

      if (this.$route.params.id) {
        url = this.$store.state.baseUrl + '/api/conference/id/' + this.$route.params.id
      }

      axios
        .get(url)
        .then((resp) => {
          if (resp.data.success) {
            this.conference = resp.data.conference
            this.speakers = this.conference.speakers
            this.attendees = this.conference.attendees
          }

          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    formatDate (date) {
      const currentDate = date.substring(0, 10).split('-')
      return currentDate[2] + '/' + currentDate[1] + '/' + currentDate[0]
    },
    commaSeparated: function (categories) {
      var cats = ''
      if (categories) {
        const that = this
        categories.forEach(function (category) {
          const emoji = that.getEmojiForCat(category)
          cats += emoji + ' ' + category + ', '
        })
      }
      return cats.substr(0, cats.length - 2)
    },
    getEmojiForCat (category) {
      return this.$store.state.categories.filter(function (cat) {
        return cat.title.toLowerCase() === category.toLowerCase()
      })[0].emoji
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
