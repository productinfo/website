<template>
    <div class="city">

        <vue-headful
                :title="`${$route.params.city} / Awesome Conferences`"
                :description="`All the best conferences about ${$route.params.city}`"
                :url="`https://aweconf.com/#/city/${$route.params.city}`"
        />

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>

                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
                    <h1>{{ $route.params.city }}</h1>

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
                            <td><router-link :to="`/conference/${props.item._id}`">{{ props.item.title }}</router-link></td>
                            <td>
                                <ul>
                                    <li class="inline" v-for="category in props.item.category" :key="category">
                                        <router-link :to="`/category/${category}`">{{ category }}</router-link>
                                    </li>
                                </ul>
                            </td>
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ formatDate(props.item.startdate) }}</td>
                            <td>{{ formatDate(props.item.enddate) }}</td>
                        </template>
                    </v-data-table>

                </v-flex>

            </v-layout>
        </v-container>

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <template>
                        <gmap-map
                                :center="center"
                                :zoom="11"
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
                </v-flex>
            </v-layout>
        </v-container>

        <br/>
        <router-link :to="`/submit`">
            <v-btn block color="deep-purple" dark>📩 Submit a new Conference in {{ $route.params.city }}</v-btn>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'City',

  data () {
    return {
      conferences: [],
      showSpinner: true,
      title: '',
      tmp: '',
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Category', sortable: false, align: 'center' },
        { text: 'City', sortable: false, align: 'left', value: 'city' },
        { text: 'Country', sortable: false, align: 'left', value: 'country' },
        { text: 'Start', value: 'startdate', align: 'left' },
        { text: 'End', value: 'enddate', align: 'left' }
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
      axios.post('https://aweconf.herokuapp.com/api/conference/city', { city: this.$route.params.city })
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.showSpinner = false

          if (this.conferences.length > 0) {
            // loop confs
            for (var conf of this.conferences) {
              // if lat has a value
              if (conf.lat !== 0 && conf.lon !== 0) {
                let lat = isNaN(parseFloat(conf.lat)) ? 0.0 : parseFloat(conf.lat)
                let lng = isNaN(parseFloat(conf.lon)) ? 0.0 : parseFloat(conf.lat)
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
    li .inline {
        display: inline;
    }
</style>
