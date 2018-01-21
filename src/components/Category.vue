<template>
    <div class="category">
        <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
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
                            :items="sortAndFilter(conferences, $route.params.category)"
                            class="elevation-1"
                            hide-actions
                    >
                        <template slot="items" slot-scope="props">
                            <td><router-link :to="`/conference/${props.item._id}`">{{ props.item.title }}</router-link></td>
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ props.item.startdate }}</td>
                            <td>{{ props.item.enddate }}</td>
                        </template>
                    </v-data-table>

                </v-flex>

            </v-layout>
        </v-container>

        <br/>
        <router-link :to="`/submit/${$route.params.category}`">
            <v-btn block color="deep-purple" dark>📩 Submit a new Conference in {{ $route.params.category }} category</v-btn>
        </router-link>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Category',

  data () {
    return {
      conferences: [],
      showSpinner: true,
      tmp: '',
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
    sortAndFilter (conf, category) {
      var confs = conf.filter(function (a) {
        return new Date(a.startdate) > new Date()
      })

      if (category !== 'all') {
        confs = confs.filter(function (b) {
          return b.category.indexOf(category) !== -1
        })
      }
      return confs.sort(function (a, b) {
        return new Date(a.startdate) > new Date(b.startdate)
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
        text-decoration: none;
    }
</style>
