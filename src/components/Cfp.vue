<template>
    <div class="category">

        <vue-headful
                title="Call fo Paper Open / Awesome Conferences"
                description="All the best conferences with call for paper open"
                url="https://aweconf.com/#/call-for-paper/open"
                :image="undefined"
        />

        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title class="capitalized">🎤 Conference looking for Speaker</v-toolbar-title>
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
                                <td><router-link :to="`/conference/${props.item._id}`">{{ props.item.title }}</router-link></td>
                                <td>{{ props.item.city }}</td>
                                <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                                <td v-if="props.item.cfp">{{ formatDate(props.item.cfp.end) }}</td>
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
  name: 'Cfp',

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
        { text: 'Cfp Close', value: 'cfp.end', align: 'left' }
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
      axios.get(this.$store.baseUrl + '/api/conference/call-for-paper/open')
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
