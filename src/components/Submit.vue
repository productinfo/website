<template>
    <div class="submit">

        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>

                    <h1 class="capitalized">📩 Submit a new Conference 🎟</h1>
                    <v-card>
                        <v-card-text>
                            <v-form ref="form" lazy-validation v-model="valid">

                                <v-container grid-list-xl fluid>
                                    <v-layout wrap>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Conference Name"
                                                    v-model="name"
                                                    :counter="80"
                                                    required
                                                    :rules="nameRules"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Conference Website Url"
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
                                                    label="Select one or more categories for your conference"
                                                    multiple
                                                    required
                                                    tags
                                                    :items="$store.getters.categoriesName"
                                            ></v-select>
                                        </v-flex>
                                        <v-flex xs12 sm12>
                                            <v-text-field
                                                    label="Conference Twitter handler"
                                                    v-model="twitter"
                                                    :counter="50"
                                                    color="deep-purple"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                                <v-container grid-list-xl fluid>
                                    <h2>🗓 Dates</h2>
                                    <p>Share the dates of your conference</p>
                                    <v-layout wrap>

                                        <v-flex xs12 sm6>
                                            <v-menu
                                                    ref="dateMenuStart"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="dateMenuStart"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-right="40"
                                                    min-width="330px"
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
                                            </v-menu>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-menu
                                                    ref="dateMenuEnd"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="dateMenuEnd"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-right="40"
                                                    min-width="330px"
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
                                            </v-menu>
                                        </v-flex>
                                    </v-layout>
                                </v-container>

                                <v-container grid-list-xl fluid>
                                    <h2>🗺 How to reach</h2>
                                    <p>Can you help us sharing information about how to reach the conference venue?</p>

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
                                    <h2>🎤 Call for Paper</h2>
                                    <p>If you have information about call for paper, please provide, a lot developers,
                                        designer can be interesting in submitting their talk.</p>

                                    <v-layout wrap>
                                        <v-flex xs12 sm6>
                                            <v-menu
                                                    ref="cfpMenuStart"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="cfpMenuStart"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-right="40"
                                                    min-width="330px"
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
                                            </v-menu>
                                        </v-flex>
                                        <v-flex xs12 sm6>
                                            <v-menu
                                                    ref="cfpMenuEnd"
                                                    lazy
                                                    :close-on-content-click="false"
                                                    v-model="cfpMenuEnd"
                                                    transition="scale-transition"
                                                    offset-y
                                                    full-width
                                                    :nudge-right="40"
                                                    min-width="330px"
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
                                            </v-menu>
                                        </v-flex>
                                    </v-layout>

                                </v-container>

                            </v-form>
                        </v-card-text>
                    </v-card>
                    <br/>

                    <v-btn @click="submit" color="deep-purple" dark>submit</v-btn>

                    <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>

                    <v-alert v-if="submitSuccess" outline color="success" icon="check_circle" :value="true">
                        Conference submitted.
                    </v-alert>

                    <v-alert v-if="submitFail" outline color="error" icon="warning" :value="true">
                        There was an error, try again or contact using twitter <a href="https://twitter.com/aweconf">@aweconf</a>.
                    </v-alert>

                </v-flex>

            </v-layout>
        </v-container>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
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
  }),
  mounted: function () {
    // add cat if passed by previous view
    if (this.$route.params.category !== undefined) {
      this.categories.push(this.$route.params.category.toLowerCase())
    }
  },
  methods: {
    submit () {
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
        title: this.name,
        homepage: this.url,
        twitter: this.twitter,
        where: this.where,
        city: this.city,
        country: this.country,
        date: this.date,
        cfp: this.cfp,
        category: lcCats
      }

      console.log(content)

      axios.post('https://aweconf.herokuapp.com/api/conference/submit', content)
        .then((resp) => {
          this.submitSuccess = true
          this.showSpinner = false
          this.$refs.form.reset()
        }).catch((err) => {
          this.submitFail = true
          this.showSpinner = false
          console.log(err)
        })

      axios.post('https://formspree.io/awc@boostco.de', {title: 'A new conference ' + this.name})
        .then((resp) => {

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
    .capitalized {
        text-transform: capitalize;
    }
</style>
