<template>
    <div class="submit">

        <vue-headful
                title="✏️ Edit Conference"
        />

        <v-container fluid fill-height>
            <v-layout align-center justify-center class="text-xl-left text-md-left text-lg-left text-sm-left text-xs-left">
                <v-flex xs12 sm12 md10 xl10>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="deep-purple">
                            <v-toolbar-title class="capitalized">
                                ✏️ Edit Conference
                            </v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form" lazy-validation v-model="valid">

                                <v-container grid-list-xl fluid>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Name"
                                                    v-model="name"
                                                    :counter="80"
                                                    required
                                                    :rules="nameRules"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Website Url"
                                                    v-model="url"
                                                    :counter="100"
                                                    required
                                                    :rules="urlRules"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>

                                    <v-layout wrap>
                                        <v-flex xs12 sm12>
                                            <v-select
                                                    color="deep-purple"
                                                    v-model="categories"
                                                    label="Select one or more categories"
                                                    multiple
                                                    required
                                                    tags
                                                    :items="$store.getters.categoriesName"
                                            ></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Twitter handler"
                                                    v-model="twitter"
                                                    :counter="50"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                                <v-container grid-list-xl fluid>
                                    <h2>🗓 Dates</h2>
                                    <p>Share the dates of the event</p>
                                    <v-layout wrap>

                                        <v-flex xs12 sm6>
                                            <v-dialog
                                                    ref="dateMenuStart"
                                                    persistent
                                                    v-model="dateMenuStart"
                                                    lazy
                                                    full-width
                                                    width="330px"
                                                    :return-value.sync="date.start"
                                            >
                                                <v-text-field
                                                        slot="activator"
                                                        label="Start date"
                                                        v-model="date.start"
                                                        prepend-icon="event"
                                                        color="deep-purple"
                                                        required
                                                        readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="date.start" no-title scrollable
                                                               color="deep-purple">
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="deep-purple" @click="dateMenuStart = false">
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn flat color="deep-purple"
                                                           @click="$refs.dateMenuStart.save(date.start)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-dialog
                                                    ref="dateMenuEnd"
                                                    persistent
                                                    v-model="dateMenuEnd"
                                                    lazy
                                                    full-width
                                                    width="330px"
                                                    :return-value.sync="date.end"
                                            >
                                                <v-text-field
                                                        slot="activator"
                                                        label="End date"
                                                        v-model="date.end"
                                                        prepend-icon="event"
                                                        color="deep-purple"
                                                        required
                                                        readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="date.end" no-title scrollable
                                                               color="deep-purple"
                                                               :picker-date="date.start">
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="deep-purple" @click="dateMenuEnd = false">
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn flat color="deep-purple"
                                                           @click="$refs.dateMenuEnd.save(date.end)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                                <v-container grid-list-xl fluid>
                                    <h2>🗺 How to reach</h2>
                                    <p>Can you help us sharing information about how to reach the venue?</p>

                                    <v-layout wrap>
                                        <v-flex xs12 sm6>
                                            <v-text-field
                                                    label="Address"
                                                    v-model="where"
                                                    :counter="200"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-text-field
                                                    label="City"
                                                    v-model="city"
                                                    :counter="100"
                                                    required
                                                    color="deep-purple"
                                                    :rules="cityRules"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>

                                    <v-layout wrap>
                                        <v-flex xs12 sm6>
                                            <v-select
                                                    color="deep-purple"
                                                    label="Country"
                                                    v-model="country"
                                                    :items="$store.state.countries"
                                                    :rules="[v => !!v || 'Country is required']"
                                                    required
                                                    autocomplete
                                            ></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                                <v-container grid-list-xl fluid>
                                    <h2>🎤 Speaker</h2>

                                    <v-layout wrap>
                                        <v-flex xs12 sm12>
                                            <p>Do you know already your speaker? List their Twitter account.</p>
                                            <v-select
                                                    label="Speaker Twitter Account"
                                                    chips
                                                    tags
                                                    solo
                                                    prepend-icon="filter_list"
                                                    color="deep-purple"
                                                    append-icon=""
                                                    clearable
                                                    v-model="chips"
                                            >
                                                <template slot="selection" slot-scope="data">
                                                    <v-chip
                                                            close
                                                            @input="remove(data.item)"
                                                            :selected="data.selected"
                                                    >
                                                        <strong>{{ data.item }}</strong>&nbsp;
                                                    </v-chip>
                                                </template>
                                            </v-select>
                                        </v-flex>
                                    </v-layout>

                                    <p class="mt-4">Or if it is too early, share the information about you call for paper.</p>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6>

                                            <v-dialog
                                                    ref="cfpMenuStart"
                                                    persistent
                                                    v-model="cfpMenuStart"
                                                    lazy
                                                    full-width
                                                    width="330px"
                                                    :return-value.sync="cfp.start"
                                            >
                                                <v-text-field
                                                        slot="activator"
                                                        label="Start date"
                                                        v-model="cfp.start"
                                                        prepend-icon="event"
                                                        color="deep-purple"
                                                        readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="cfp.start" no-title scrollable
                                                               color="deep-purple">
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="deep-purple" @click="cfpMenuStart = false">
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn flat color="deep-purple"
                                                           @click="$refs.cfpMenuStart.save(cfp.start)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-dialog
                                                    ref="cfpMenuEnd"
                                                    persistent
                                                    v-model="cfpMenuEnd"
                                                    lazy
                                                    full-width
                                                    width="330px"
                                                    :return-value.sync="cfp.end"
                                            >
                                                <v-text-field
                                                        slot="activator"
                                                        label="End date"
                                                        v-model="cfp.end"
                                                        prepend-icon="event"
                                                        color="deep-purple"
                                                        readonly
                                                ></v-text-field>
                                                <v-date-picker v-model="cfp.end" no-title scrollable color="deep-purple"
                                                               :picker-date="cfp.start">
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="deep-purple" @click="cfpMenuEnd = false">
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn flat color="deep-purple"
                                                           @click="$refs.cfpMenuEnd.save(cfp.end)">OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-flex>
                                    </v-layout>

                                </v-container>

                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <template>

            <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>

            <v-alert v-if="submitSuccess" outline color="success" icon="check_circle" :value="true">
                Event updated.
            </v-alert>

            <v-alert v-if="submitFail" outline color="error" icon="warning" :value="true">
                There was an error, try again or contact using twitter <a href="https://twitter.com/aweconf">@aweconf</a>.
            </v-alert>

            <v-btn @click="updateData" color="deep-purple" dark class="mb-5 mt-4">update</v-btn>

        </template>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ConferenceEdit',
  data () {
    return {
      id: '',
      showSpinner: false,
      cfp: {
        start: null,
        end: null
      },
      cfpMenuStart: false,
      cfpMenuEnd: false,
      date: {
        start: null,
        end: null
      },
      dateMenuStart: false,
      dateMenuEnd: false,
      categories: [],
      where: '',
      city: '',
      twitter: '@',
      url: 'http://',
      name: '',
      country: '',
      chips: [],
      submitSuccess: false,
      submitFail: false,
      valid: false,
      nameRules: [
        (v) => !!v || 'Name is required'
      ],
      urlRules: [
        (v) => !!v || 'Url is required'
      ],
      cityRules: [
        (v) => !!v || 'City is required'
      ],
      countryRules: [
        (v) => !!v || 'Country is required'
      ],
      dateRules: [
        (v) => !!v || 'Start date is required',
        (v) => new Date(v) >= new Date().setHours(0, 0, 0) || 'Start date must be today or in the future'
      ],
      enddateRules: [
        (v) => !!v || 'End date is required',
        (v) => new Date(v) >= new Date().setHours(0, 0, 0) || 'End date must be in the future'
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
    redirect () {
      this.$router.push('/')
    },
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    fetchData () {
      this.showSpinner = true

      const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('').toLowerCase()

      axios.get(this.$store.state.baseUrl + '/api/conference/slug/' + this.$route.params.slug)
        .then((resp) => {
          this.showSpinner = false
          if (resp.data.success) {
            this.id = resp.data.conference.id

            const isAdmin = this.$session.get('role') === 'Admin'
            const isOwner = (this.$session.get('username') === resp.data.conference.owner)

            if (isAdmin === true || isOwner === true) {
              if (resp.data.conference.cfp) {
                if (resp.data.conference.cfp.start) {
                  this.cfp.start = resp.data.conference.cfp.start.substring(0, 10)
                }

                if (resp.data.conference.cfp.end) {
                  this.cfp.end = resp.data.conference.cfp.end.substring(0, 10)
                }
              }

              this.date = {
                start: resp.data.conference.date.start.substring(0, 10),
                end: resp.data.conference.date.end.substring(0, 10)
              }

              // workaround to have all cats first uppercased
              const camelCats = []
              resp.data.conference.category.forEach(function (cat) {
                camelCats.push(capitalize(cat))
              })

              this.categories = camelCats
              this.where = resp.data.conference.where
              this.city = resp.data.conference.city
              this.twitter = resp.data.conference.twitter
              this.url = resp.data.conference.homepage
              this.name = resp.data.conference.title
              this.country = resp.data.conference.country
              this.chips = resp.data.conference.speakers
            } else {
              this.redirect()
            }
          }
        }).catch((err) => {
          this.showSpinner = false
          console.log(err)
        })
    },
    updateData () {
      this.$refs.form.validate()

      if (!this.valid) {
        alert('Check all required fields before submitting')
        return
      }

      // reset feedback
      this.showSpinner = true
      this.submitSuccess = false
      this.submitFail = false

      // workaround to have all cats lowercased
      const tmp = this.categories.join('~').toLowerCase()
      const lcCats = tmp.split('~')

      const content = {
        id: this.id,
        title: this.name,
        homepage: this.url,
        twitter: this.twitter,
        where: this.where,
        city: this.city,
        country: this.country,
        date: this.date,
        cfp: this.cfp,
        category: lcCats,
        speakers: this.chips
      }

      axios.post(this.$store.state.baseUrl + '/api/conference/edit', content, { withCredentials: true })
        .then((resp) => {
          if (resp.data.success === true) {
            this.submitSuccess = true
          } else {
            this.submitFail = true
          }
          this.showSpinner = false
        }).catch((err) => {
          this.submitFail = true
          this.showSpinner = false
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
    .capitalized {
        text-transform: capitalize;
    }
</style>
