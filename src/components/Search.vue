<template>
    <div class="Search">

        <vue-headful
                :title="`Search Result / Awesome Conferences`"
                :description="`All the best conferences`"
        />

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
                                    <router-link :to="`/c/${props.item.slug}`">{{ props.item.title }}</router-link>
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

    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',

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
      this.title = 'Conferences between'

      if (this.$route.params.from !== 'none') {
        this.title += ' ' + this.$route.params.from
      }

      if (this.$route.params.to !== 'none') {
        this.title += ' ' + this.$route.params.to
      }

      if (this.$route.params.where !== 'none') {
        this.title += ' in ' + this.$route.params.where
      }

      axios.post(this.$store.state.baseUrl + '/api/conference/search/', this.$route.params)
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
      return currentDate.toDateString()
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
