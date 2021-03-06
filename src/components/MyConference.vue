<template>
    <div class="myconference">

        <vue-headful
                title="My Conference / Awesome Conferences"
                description="All the best conferences around the world"
                url="https://aweconf.com/#/my-conference"
                :image="undefined"
        />

        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title class="capitalized">
                                🕶 {{ total }} My Conferences
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
                                <td><router-link :to="`/c/${props.item.slug}`">{{ props.item.title }}</router-link></td>
                                <td>{{ props.item.city }}</td>
                                <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                                <td>{{ formatDate(props.item.date.start) }}</td>
                                <td>{{ formatDate(props.item.date.end) }}</td>
                                <td>
                                    <v-btn fab small color="blue" dark @click.native="editConf(props.item.slug)">✏️</v-btn>
                                </td>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyConference',

  data () {
    return {
      conferences: [],
      showSpinner: true,
      total: 0,
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
        { text: 'End', value: 'enddate', align: 'left' },
        { text: 'Action', align: 'left' }
      ]
    }
  },

  created () {
    if (this.$session.get('isAuthenticated') !== true) {
      this.redirect()
    } else {
      this.fetchData()
    }
  },

  watch: {
    '$route': 'fetchData'
  },
  methods: {
    redirect () {
      this.$router.push('/')
    },
    editConf (slug) {
      this.$router.push('/c/' + slug + '/edit')
    },
    fetchData () {
      this.showSpinner = true
      axios.get(this.$store.state.baseUrl + '/api/conference/mine', { withCredentials: true })
        .then((resp) => {
          this.conferences = resp.data.conferences
          this.calculateTotals(this.conferences.length)
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    calculateTotals (items) {
      if (items < 5) {
        this.total = items
      } else {
        this.total = 5 * Math.round(items / 5) + '+'
      }
    },
    formatDate (date) {
      const currentDate = new Date(date)
      return currentDate.toDateString()
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
