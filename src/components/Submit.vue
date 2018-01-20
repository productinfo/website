<template>
    <div class="submit">
    <v-container grid-list-xl text-xs-left>
        <v-layout row wrap>
            <v-flex xs10 offset-xs1>
                <v-card>
                    <v-card-text>
                    <form>
                        <p>Complete the form below to ask a new conference to be published:</p>

                        <v-text-field
                                label="Name"
                                v-model="name"
                                :error-messages="nameErrors"
                                :counter="80"
                                @input="$v.name.$touch()"
                                @blur="$v.name.$touch()"
                                required
                                color="deep-purple"
                        ></v-text-field>
                        <v-text-field
                                label="Url"
                                v-model="url"
                                :error-messages="urlErrors"
                                :counter="100"
                                @input="$v.url.$touch()"
                                @blur="$v.url.$touch()"
                                required
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
                                label="Twitter handler"
                                v-model="twitter"
                                :error-messages="twitterErrors"
                                :counter="50"
                                @input="$v.twitter.$touch()"
                                @blur="$v.twitter.$touch()"
                                color="deep-purple"
                        ></v-text-field>
                        <v-text-field
                                label="Where"
                                v-model="where"
                                :error-messages="whereErrors"
                                :counter="150"
                                @input="$v.where.$touch()"
                                @blur="$v.where.$touch()"
                                required
                                color="deep-purple"
                        ></v-text-field>
                        <p>Categories</p>
                        <v-checkbox
                                label="Backend"
                                v-model="backend"
                                @change="$v.backend.$touch()"
                                @blur="$v.backend.$touch()"
                                color="deep-purple"
                        ></v-checkbox>
                        <v-checkbox
                                label="Frontend"
                                v-model="frontend"
                                @change="$v.frontend.$touch()"
                                @blur="$v.frontend.$touch()"
                                color="deep-purple"
                        ></v-checkbox>
                        <v-checkbox
                                label="Marketing"
                                v-model="marketing"
                                @change="$v.marketing.$touch()"
                                @blur="$v.marketing.$touch()"
                                color="deep-purple"
                        ></v-checkbox>
                        <v-checkbox
                                label="Mobile"
                                v-model="mobile"
                                @change="$v.mobile.$touch()"
                                @blur="$v.mobile.$touch()"
                                color="deep-purple"
                        ></v-checkbox>
                        <v-checkbox
                                label="UI"
                                v-model="ui"
                                @change="$v.ui.$touch()"
                                @blur="$v.ui.$touch()"
                                color="deep-purple"
                        ></v-checkbox>
                        <v-checkbox
                                label="UX"
                                v-model="ux"
                                @change="$v.ux.$touch()"
                                @blur="$v.ux.$touch()"
                                color="deep-purple"
                        ></v-checkbox>

                    </form>
                    </v-card-text>
                </v-card>
                <br/>
                <v-btn @click="submit" color="deep-purple" dark>submit</v-btn>

                <v-alert v-if="submitsuccess" outline color="success" icon="check_circle" :value="true">
                    Conference submitted.
                </v-alert>

                <v-alert v-if="submitfail" outline color="error" icon="warning" :value="true">
                    There was an error, try again or contact using <a href="https://github.com/aweconf/awesome-conferences-database">Github</a>.
                </v-alert>

            </v-flex>

        </v-layout>
    </v-container>
    </div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(80) },
    url: { required, maxLength: maxLength(100) },
    twitter: { maxLength: maxLength(50) },
    where: { required, maxLength: maxLength(150) }
  },
  data: () => ({
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
    where: '',
    twitter: '',
    url: '',
    name: '',
    submitsuccess: false,
    submitfail: false
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
        name: this.name,
        url: this.url,
        twitter: this.twitter,
        where: this.where,
        startdate: this.startdate,
        enddate: this.enddate,
        category: categories
      }

      axios(
        {
          method: 'post',
          url: 'https://formspree.io/awc@boostco.de',
          responseType: 'json',
          data: {
            title: 'A new conference ' + this.name,
            message: JSON.stringify(content)
          }
        })
        .then(function (response) {
          console.log(response)
          this.submitsuccess = true
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  computed: {
    whereErrors () {
      const errors = []
      if (!this.$v.where.$dirty) return errors
      !this.$v.where.maxLength && errors.push('Where must be at most 10 characters long')
      !this.$v.where.required && errors.push('Where is required.')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    urlErrors () {
      const errors = []
      if (!this.$v.url.$dirty) return errors
      !this.$v.url.maxLength && errors.push('Url must be at most 10 characters long')
      !this.$v.url.required && errors.push('Url is required.')
      return errors
    },
    twitterErrors () {
      const errors = []
      if (!this.$v.twitter.$dirty) return errors
      !this.$v.twitter.maxLength && errors.push('Twitter must be at most 10 characters long')
      !this.$v.twitter.required && errors.push('Twitter is required.')
      return errors
    }
  }
}
</script>
