<template>
    <div class="country">

        <vue-headful
                :title="`${title} / Awesome Conferences`"
                :description="`All the best conferences in ${$route.params.country}`"
                :url="`https://aweconf.com/#/country/${$route.params.country}`"
        />

        <template>
            <gmap-map
                    :center="center"
                    :zoom="4"
                    style="width: 100%; height: 300px"
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

        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title class="capitalized">
                                {{ title }}
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-title>
                            <v-text-field
                                    append-icon="search"
                                    label="Search"
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
                                <td>
                                    <router-link :to="`/conference/${props.item._id}`">{{ props.item.title }}</router-link>
                                </td>
                                <td>
                                    <ul>
                                        <li class="inline" v-for="category in props.item.category" :key="category">
                                            <router-link :to="`/category/${category}`">{{ category }}</router-link>
                                        </li>
                                    </ul>
                                </td>
                                <td>{{ props.item.city }}</td>
                                <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                                <td>{{ formatDate(props.item.date.start) }}</td>
                                <td>{{ formatDate(props.item.date.end) }}</td>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <template class="mt5">
            <router-link :to="`/submit`">
                <v-btn block color="deep-purple" dark>📩 Submit a new Conference in {{ $route.params.country }}</v-btn>
            </router-link>
        </template>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Country',

  data () {
    return {
      conferences: [],
      showSpinner: true,
      title: '',
      tmp: '',
      search: '',
      headers: [
        { text: 'Name', align: 'left', sortable: false, value: 'title' },
        { text: 'Category', sortable: false, align: 'center' },
        { text: 'City', sortable: false, align: 'left', value: 'city' },
        { text: 'Country', sortable: false, align: 'left', value: 'country' },
        { text: 'Start', value: 'date.start', align: 'left' },
        { text: 'End', value: 'date.end', align: 'left' }
      ],
      center: { lat: 0, lng: 0 },
      markers: []
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
      axios.get('https://aweconf.herokuapp.com/api/conference/country/' + this.$route.params.country)
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.showSpinner = false

          if (this.conferences.length > 0) {
            // set title dinamically getting the emojiflag from first entry
            this.title = this.conferences[0].emojiflag + ' ' + this.conferences[0].country

            // loop confs
            for (var conf of this.conferences) {
              // if lat has a value
              if (conf.lat !== 0 && conf.lon !== 0) {
                let lat = isNaN(parseFloat(conf.geo.lat)) ? 0.0 : parseFloat(conf.geo.lat)
                let lng = isNaN(parseFloat(conf.geo.lng)) ? 0.0 : parseFloat(conf.geo.lng)
                this.center.lat = lat
                this.center.lng = lng
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
        })
        .catch((err) => {
          console.log(err)
        })
    },
    formatDate (date) {
      const currentDate = new Date(date)
      return currentDate.toLocaleDateString()
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
