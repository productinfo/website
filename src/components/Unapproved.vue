<template>
    <div class="unapproved">
        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title class="capitalized">
                                😱 {{ remaining }} to be approved
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
                                <td><a :href="props.item.homepage" target="_blank">{{ props.item.title }}</a></td>
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
                                <td>
                                    <v-btn color="deep-purple" dark @click.native="approveConf(props.item._id)">Approve</v-btn>
                                </td>
                                <td>
                                    <v-btn color="red" dark @click.native="deleteConf(props.item._id)">Delete</v-btn>
                                </td>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <template class="mt5">
            <v-flex xs6 offset-xs1>
                <v-checkbox
                        label="Publish on Twitter"
                        v-model="twitter"
                        color="deep-purple"
                ></v-checkbox>
                <v-checkbox
                        label="Send push notification"
                        v-model="push"
                        color="deep-purple"
                ></v-checkbox>
            </v-flex>
        </template>

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
      remaining: 0,
      tmp: '',
      search: '',
      twitter: true,
      push: true,
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'title'
        },
        { text: 'Category', sortable: false, align: 'left' },
        { text: 'City', sortable: false, align: 'left', value: 'city' },
        { text: 'Country', sortable: false, align: 'left', value: 'country' },
        { text: 'Start', value: 'date.start', align: 'left' },
        { text: 'End', value: 'date.end', align: 'left' },
        { text: 'Approve', sortable: false, align: 'left' },
        { text: 'Delete', sortable: false, align: 'left' }
      ]
    }
  },

  created () {
    if (this.$session.get('role') !== 'Admin') {
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
    fetchData () {
      this.showSpinner = true
      axios.get(this.$store.state.baseUrl + '/api/conference/not-approved')
        .then((resp) => {
          if (resp.data.success === true) {
            this.conferences = resp.data.conferences
            this.remaining = this.conferences.length
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
    deleteConf (id) {
      axios.put(this.$store.state.baseUrl + '/api/conference/delete/', {
        id: id
      }, { withCredentials: true }).then((resp) => {
        if (resp.data.success === true) {
          this.fetchData()
          this.dialog = false
        } else {
          alert(resp.data.error)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    approveConf (id) {
      axios.put(this.$store.state.baseUrl + '/api/conference/approve/', {
        id: id,
        push: this.push,
        twitter: this.twitter
      }, { withCredentials: true })
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
