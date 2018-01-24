<template>
    <div class="unapproved">
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
                            :items="conferences"
                            class="elevation-1"
                            hide-actions
                    >
                        <template slot="items" slot-scope="props">
                            <td>{{ props.item.title }}</td>
                            <td>{{ props.item.city }}</td>
                            <td>{{ props.item.emojiflag }} {{ props.item.country }}</td>
                            <td>{{ formatDate(props.item.startdate) }}</td>
                            <td>{{ formatDate(props.item.enddate) }}</td>
                            <td>
                                <v-btn color="deep-purple" dark @click.native="approveConf(props.item._id)">Approve</v-btn>
                            </td>
                        </template>
                    </v-data-table>

                </v-flex>
                <v-flex xs6 offset-xs1>
                    <v-text-field
                            name="input-10-1"
                            label="Enter your password"
                            v-model="password"
                            min="8"
                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (e1 = !e1)"
                            :type="e1 ? 'password' : 'text'"
                            counter
                            required
                            color="deep-purple"
                    ></v-text-field>
                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Unapproved',

  data () {
    return {
      conferences: [],
      showSpinner: true,
      dialog: false,
      password: '',
      e1: false,
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
        { text: 'Approve', sortable: false, align: 'left' }
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
      axios.get('https://aweconf.herokuapp.com/api/conference/not-approved')
        .then((resp) => {
          if (resp.data.success === true) {
            this.conferences = resp.data.conferences
          }
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
    sortAndFilter (conf) {
      return conf.sort(function (a, b) {
        return new Date(a.startdate) > new Date(b.startdate)
      })
    },
    approveConf (id) {
      axios.put('https://aweconf.herokuapp.com/api/conference/approve/', { id: id, password: this.$data.password })
        .then((resp) => {
          if (resp.data.success === true) {
            this.fetchData()
            this.dialog = false
          } else {
            alert(resp.data.error)
          }
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
        text-decoration: none;
    }
</style>
