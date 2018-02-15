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
                        <h1>{{ welcomeMsg }} <b>{{ total }}</b>{{ welcomeMsg2}}</h1>
                        <p class="mt-4">{{ introMsg }}</p>
                    </div>
                    <div class="pa-5 centerize">
                        <p class="hint" v-if="firstRun">{{ mobileMsg }}</p>
                        <a href="https://itunes.apple.com/us/app/awesome-mobile-conferences/id1289255473?mt=8">
                            <img src="../assets/download-on-the-app-store.png" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=conference.mobile.awesome.boostco.de.amc">
                            <img src="../assets/google-play-badge.png" />
                        </a>
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
                                        @click="$router.push({ path: '/conference/' + m.id })"
                                ></gmap-marker>
                            </google-cluster>
                        </gmap-map>
                    </template>
                </v-flex>

                <v-flex xs12 sm12 md10 xl10 class="mt-2">
                    <h3>{{ quickLook }}</h3>
                </v-flex>

            </v-layout>
        </v-container>

        <suggestioncard-aweconf url="https://core.aweconf.com/api/conference/last/6"></suggestioncard-aweconf>

        <v-container grid-list-xl text-xs-left fluid fill-height>
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 xl12 class="mt-4">
                    <h3>{{ discoverMore }}</h3>
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
                            <td><router-link :to="`/conference/${props.item._id}`">{{ props.item.title }}</router-link></td>
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ formatDate(props.item.date.start) }}</td>
                            <td>{{ formatDate(props.item.date.end) }}</td>
                        </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'
import SuggestionCard from './partials/SuggestionCard.vue'

export default {
  name: 'Home',
  components: {
    'suggestioncard-aweconf': SuggestionCard
  },
  data () {
    return {
      welcomeMsg: 'Discover 🔎 ',
      welcomeMsg2: '+ 🔥🔥 awesome conferences around the 🌍 world.',
      introMsg: 'Awesome Conference is a web and mobile application built to help developers, markerters, designers in finding the best conference around the world in an unique place.',
      instructionMsg1: '👆 You can navigate conferences by categories️.',
      mapMsg: '👇 Navigate the 🗺, click to 🔍 and open single conference page 👇',
      mobileMsg: '👇 Stay always updated using our 📱 application 👇',
      submitMsg: 'Support the project suggesting a 🆕 conference:',
      quickLook: 'have a quick look at the last ⏰ conference added so far:',
      discoverMore: 'or 🧐 discover more browsing all...',
      conferences: [],
      lastConferences: [],
      showSpinner: true,
      firstRun: false,
      total: '',
      center: { lat: 20, lng: 32 },
      markers: [],
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
        { text: 'Start', value: 'startdate', align: 'left' },
        { text: 'End', value: 'enddate', align: 'left' }
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
          if (conf.lat !== 0 && conf.lon !== 0) {
            let lat = parseFloat(conf.lat)
            let lng = parseFloat(conf.lon)
            // generate marker
            const position = {
              id: conf._id,
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

      axios.get('https://core.aweconf.com/api/conference')
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.calculateTotals(this.conferences.length)

          this.showSpinner = false
          this.populateMaps()
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
    text-align: center;
}
.hint-left {
    color: darkgray;
    text-align: left;
}
.centerize {
    text-align: center !important;
}
</style>
