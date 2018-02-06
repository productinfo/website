<template>
    <div class="category">

        <vue-headful
                title="Call fo Paper Open / Awesome Conferences"
                description="All the best conferences with call for paper open"
                url="https://aweconf.com/#/call-for-paper/open"
                :image="undefined"
        />

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>

                    <h1 class="capitalized">🎤 Call for Paper Open Conferences</h1>
                    <p>Call for Paper section is still ⚗️ experimental, we're working 👨‍💻 to improve this section with the next release.</p>

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
                            <td v-if="props.item.cfp">{{ formatDate(props.item.cfp.end) }}</td>
                        </template>
                    </v-data-table>

                </v-flex>

            </v-layout>
        </v-container>

        <br/>
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
      axios.get('https://aweconf.herokuapp.com/api/conference/call-for-paper/open')
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
