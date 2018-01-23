<template>
    <div class="submit">
    <v-container grid-list-xl text-xs-left>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card>
                    <v-card-text>
                    <v-form ref="form" lazy-validation v-model="valid">
                        <p>Complete the form below to ask a new conference to be published:</p>

                        <v-text-field
                                label="Name"
                                v-model="name"
                                :counter="80"
                                required
                                :rules="nameRules"
                                color="deep-purple"
                        ></v-text-field>

                        <v-text-field
                                label="Url"
                                v-model="url"
                                :counter="100"
                                required
                                :rules="urlRules"
                                color="deep-purple"
                        ></v-text-field>

                        <v-menu
                                lazy
                                :close-on-content-click="false"
                                v-model="menustart"
                                transition="scale-transition"
                                offset-y
                                full-width
                                :nudge-right="40"
                                max-width="290px"
                                min-width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    label="Start date"
                                    v-model="startdate"
                                    prepend-icon="event"
                                    required
                                    color="deep-purple"
                                    :rules="dateRules"
                                    readonly
                            ></v-text-field>
                            <v-date-picker v-model="startdate" no-title scrollable actions>
                                <template slot-scope="{ save, cancel }">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="save">OK</v-btn>
                                    </v-card-actions>
                                </template>
                            </v-date-picker>
                        </v-menu>

                        <v-menu
                                lazy
                                :close-on-content-click="false"
                                v-model="menuend"
                                transition="scale-transition"
                                offset-y
                                full-width
                                :nudge-right="40"
                                max-width="290px"
                                min-width="290px"
                        >
                            <v-text-field
                                    slot="activator"
                                    label="End date"
                                    v-model="enddate"
                                    prepend-icon="event"
                                    required
                                    color="deep-purple"
                                    :rules="enddateRules"
                                    readonly
                            ></v-text-field>
                            <v-date-picker v-model="enddate" no-title scrollable actions>
                                <template slot-scope="{ save, cancel }">
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                                        <v-btn flat color="primary" @click="save">OK</v-btn>
                                    </v-card-actions>
                                </template>
                            </v-date-picker>
                        </v-menu>

                        <v-text-field
                                label="Address"
                                v-model="where"
                                :counter="200"
                                color="deep-purple"
                        ></v-text-field>

                        <v-text-field
                                label="City"
                                v-model="city"
                                :counter="100"
                                required
                                color="deep-purple"
                                :rules="cityRules"
                        ></v-text-field>

                        <v-text-field
                                label="Country"
                                v-model="country"
                                :counter="100"
                                required
                                color="deep-purple"
                                :rules="countryRules"
                        ></v-text-field>

                        <v-checkbox
                                label="Is Call for Paper open?"
                                v-model="callforpaper"
                        ></v-checkbox>

                        <v-text-field
                                label="Twitter handler"
                                v-model="twitter"
                                :counter="50"
                                color="deep-purple"
                                :rules="twitterRules"
                        ></v-text-field>

                        <p>Categories</p>
                        <v-checkbox
                                label="Backend"
                                v-model="backend"
                                color="deep-purple"
                        ></v-checkbox>

                        <v-checkbox
                                label="Frontend"
                                v-model="frontend"
                                color="deep-purple"
                        ></v-checkbox>

                        <v-checkbox
                                label="Marketing"
                                v-model="marketing"
                                color="deep-purple"
                        ></v-checkbox>

                        <v-checkbox
                                label="Mobile"
                                v-model="mobile"
                                color="deep-purple"
                        ></v-checkbox>

                        <v-checkbox
                                label="UI"
                                v-model="ui"
                                color="deep-purple"
                        ></v-checkbox>

                        <v-checkbox
                                label="UX"
                                v-model="ux"
                                color="deep-purple"
                        ></v-checkbox>

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
    startdate: null,
    enddate: null,
    menustart: false,
    menuend: false,
    modal: false,
    ux: false,
    frontend: false,
    backend: false,
    marketing: false,
    mobile: false,
    ui: false,
    callforpaper: false,
    where: '',
    city: '',
    twitter: '',
    url: '',
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
    ],
    twitterRules: [
      (v) => v.indexOf('@') !== -1 || 'Add @ in front of the twitter handler'
    ]
  }),
  mounted: function () {
    this.backend = (this.$route.params.category === 'backend')
    this.frontend = (this.$route.params.category === 'frontend')
    this.marketing = (this.$route.params.category === 'marketing')
    this.mobile = (this.$route.params.category === 'mobile')
    this.ui = (this.$route.params.category === 'ui')
    this.ux = (this.$route.params.category === 'ux')
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
      this.submitFail = true

      const categories = []

      if (this.backend) {
        categories.push('backend')
      }
      if (this.frontend) {
        categories.push('frontend')
      }
      if (this.marketing) {
        categories.push('marketing')
      }
      if (this.mobile) {
        categories.push('mobile')
      }
      if (this.ui) {
        categories.push('ui')
      }
      if (this.ux) {
        categories.push('ux')
      }

      const content = {
        title: this.name,
        homepage: this.url,
        twitter: this.twitter,
        where: this.where,
        city: this.city,
        country: this.country,
        startdate: this.startdate,
        enddate: this.enddate,
        callforpaper: this.callforpaper,
        category: categories
      }

      axios.post('https://formspree.io/awc@boostco.de', { title: 'A new conference ' + this.name })
        .then((resp) => {
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
        })
        .catch((err) => {
          this.submitFail = true
          this.showSpinner = false
          console.log(err)
        })
    }
  }
}
</script>
