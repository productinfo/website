<template>
    <div class="home">

        <vue-headful
                :title="`🎟 ${total}+ Awesome Conferences`"
                description="Awesome Conferences is a collaborative and free listing of the best developer, marketer, designer conference around the world"
                url="https://aweconf.com"
                keywords="awesome conference, designer conference, developer conference, android, ios, mobile, ux, ui"
        />

        <v-container grid-list-xl text-xs-left fluid fill-height>
            <v-layout row wrap>

                <v-flex xs12 sm12 md4 xl4>
                    <p class="hint-left" v-if="firstRun">{{ instructionMsg1 }}<br/></p>
                    <div class="mt-1 pa-2">
                        <h1 class="main-title">{{ welcomeMsg }} <b>{{ total }}</b>{{ welcomeMsg2}}</h1>
                        <date-picker></date-picker>
                    </div>
                </v-flex>

                <v-flex xs12 sm12 md8 xl8>
                    <template>
                        <p class="hint align-content-center" v-if="firstRun">{{ mapMsg }}</p>
                        <gmap-map
                                :center="center"
                                :zoom="2"
                                style="width: 100%; height: 450px;"
                        >
                            <google-cluster>
                                <gmap-marker
                                        :key="index"
                                        v-for="(m, index) in markers"
                                        :position="m.position"
                                        icon="https://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                                        :clickable="true"
                                        :draggable="false"
                                        @click="$router.push({ path: '/c/' + m.slug })"
                                ></gmap-marker>
                            </google-cluster>
                        </gmap-map>
                    </template>
                </v-flex>

                <v-flex xs12 sm12 md10 xl10 class="mt-2">
                    <h1 class="title">{{ browseCats }}</h1>
                    <categories-badge :categories="$store.state.categories"></categories-badge>
                </v-flex>

                <v-flex xs12 sm12 md10 xl10 class="mt-2" v-if="dates.length > 0">
                    <h1 class="title">{{ browseDate }}</h1>
                    <month-badge></month-badge>
                </v-flex>

                <v-flex xs12 sm12 md10 xl10 class="mt-2">
                    <h1 class="title">{{ quickLook }}</h1>
                </v-flex>

            </v-layout>
        </v-container>

        <suggestioncard-aweconf :url="`${this.$store.state.baseUrl}/api/conference/last/6`"></suggestioncard-aweconf>

        <v-container grid-list-xl text-xs-left fluid fill-height>
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 xl12 class="mt-4">
                    <h1 class="title">{{ discoverMore }}</h1>
                    <v-card-title>
                        <v-text-field
                                append-icon="search"
                                label="Filter"
                                single-line
                                hide-details
                                v-model="search"
                                color="deep-purple"
                        ></v-text-field>
                    </v-card-title>
                    <v-data-table
                            v-bind:headers="headers"
                            v-bind:search="search"
                            :items="conferences"
                            class="elevation-1"
                            hide-actions
                    >
                        <template slot="items" slot-scope="props">
                            <td><router-link :to="`/c/${props.item.slug}`">{{ props.item.title }}</router-link></td>
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ formatDate(props.item.date.start) }}</td>
                            <td>{{ formatDate(props.item.date.end) }}</td>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-xl text-xs-left fluid fill-height>
            <v-layout row wrap>
                <v-flex xs12 sm12 md10 xl10>
                    <mobile-banner></mobile-banner>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'
import SuggestionCard from './partials/SuggestionCard.vue'
import MonthBadge from './partials/MonthBadge'
import CategoriesList from './partials/CategoriesList'
import DatePickerBadge from './partials/DatePicker'
import MobileBanner from './partials/MobileBanner'

export default {
  name: 'Home',
  components: {
    'categories-badge': CategoriesList,
    'month-badge': MonthBadge,
    'suggestioncard-aweconf': SuggestionCard,
    'date-picker': DatePickerBadge,
    'mobile-banner': MobileBanner
  },
  data () {
    return {
      welcomeMsg: 'Discover 🔎 ',
      welcomeMsg2: '+ 🔥 awesome conferences around the 🌍 world.',
      introMsg: 'Awesome Conference is a web and mobile application built to help developers, markerters, designers in finding the best conference around the world in an unique place.',
      instructionMsg1: '👇 Easily search 🔍 for the best conference by date or country️. 👇',
      mapMsg: '👇 Navigate the 🗺, click to 🔍 and open single conference page 👇',
      mobileMsg: '👇 Stay always updated using our 📱 application 👇',
      submitMsg: 'Support the project suggesting a 🆕 conference:',
      browseCats: 'find your ❤️ conference by category:',
      browseDate: 'browse conferences by month 🗓:',
      quickLook: 'have a quick look at the next ⏰ upcoming conferences:',
      discoverMore: 'or 🧐 discover more browsing all...',
      conferences: [],
      lastConferences: [],
      showSpinner: true,
      firstRun: false,
      total: '',
      center: { lat: 20, lng: 32 },
      markers: [],
      dates: [],
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'City', sortable: false, align: 'left', value: 'city' },
        { text: 'Country', sortable: false, align: 'left', value: 'country' },
        { text: 'Start', value: 'date.start', align: 'left' },
        { text: 'End', value: 'date.end', align: 'left' }
      ]
    }
  },

  created () {
    this.fetchData()
    // first run show instructions
    this.onBoarding()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    onBoarding () {
      const run = parseInt(this.$cookie.get('firstrun')) || 0
      this.firstRun = (run < 3)
      if (this.firstRun) {
        let visit = run + 1
        this.$cookie.set('firstrun', visit, 0)
      }
    },
    calculateTotals (items) {
      this.total = 5 * Math.round(items / 5)
    },
    populateMaps () {
      if (this.conferences.length > 0) {
        // loop confs
        for (var conf of this.conferences) {
          // if lat has a value
          if (conf.geo.lat !== 0 && conf.geo.lng !== 0) {
            let lat = parseFloat(conf.geo.lat)
            let lng = parseFloat(conf.geo.lng)
            // generate marker
            const position = {
              slug: conf.slug,
              position: { lat: lat, lng: lng }
            }
            // add to list
            this.markers.push(position)
          }
        }
      }
    },
    formatDate (date) {
      const currentDate = new Date(date)
      return currentDate.toLocaleDateString()
    },
    fetchData () {
      this.showSpinner = true

      axios.get(this.$store.state.baseUrl + '/api/conference')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.calculateTotals(this.conferences.length)

          this.showSpinner = false
          this.populateMaps()
        })
        .catch((err) => {
          console.log(err)
        })

      axios.get(this.$store.state.baseUrl + '/api/conference/dates')
        .then((resp) => {
          this.dates = resp.data.dates
        })
        .catch((err) => {
          console.log(err)
        })
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
}
.hint {
  color: darkgray;
    text-align: center;
}
.hint-left {
    color: darkgray;
    text-align: left;
}
</style>
