<template>
    <div class="all">

        <vue-headful
                title="All / Awesome Conferences"
                description="All the best conferences around the world"
                url="https://aweconf.com/#/all"
                :image="undefined"
        />

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>

                    <h1 class="capitalized">🕶 All upcoming Conferences</h1>

                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>

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
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ formatDate(props.item.date.start) }}</td>
                            <td>{{ formatDate(props.item.date.end) }}</td>
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
  name: 'All',

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
      this.showSpinner = true
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
    emojiForCategory (name) {
      const emoji = this.$store.state.categories.filter(function (item) {
        return item.title.toLowerCase() === name
      })
      if (emoji.length === 1) {
        return emoji[0].emoji
      } else {
        return ''
      }
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
    .capitalized {
        text-transform: capitalize;
    }
</style>
