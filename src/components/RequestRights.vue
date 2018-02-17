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
                                :items="rights"
                                class="elevation-1"
                                hide-actions
                        >
                            <template slot="items" slot-scope="props">
                                <td><a :href="`/c/${props.item.slug}`">{{ props.item.slug }}</a></td>
                                <td>{{ props.item.user }}</td>
                                <td>
                                    <v-btn fab small color="green" dark @click.native="approveRight(props.item._id)">👍</v-btn>
                                    <v-btn fab small color="red" dark @click.native="deleteRight(props.item._id)">👎</v-btn>
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
  name: 'RequestRights',
  data () {
    return {
      rights: [],
      showSpinner: true,
      dialog: false,
      remaining: 0,
      tmp: '',
      search: '',
      twitter: true,
      push: true,

      headers: [
        {
          text: 'Conference',
          align: 'left',
          sortable: false
        },
        { text: 'Owner', sortable: false, align: 'left' },
        { text: 'Manage', sortable: false, align: 'left' }
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
      axios.get(this.$store.state.baseUrl + '/api/list/rights')
        .then((resp) => {
          if (resp.data.success === true) {
            this.rights = resp.data.rights
            this.remaining = this.rights.length
          }
          this.showSpinner = false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    approveRight (id) {

    },
    deleteRight (id) {

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
