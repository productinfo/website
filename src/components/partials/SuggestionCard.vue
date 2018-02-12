<template>
    <v-container grid-list-xl text-xs-left fluid fill-height>
    <v-layout row wrap>
        <v-flex xs12 sm12 md4 xl4 v-for="conference in conferences" :key="conference.id" >
            <v-card class="elevation-1" :to="`/conference/${conference._id}`">
                <v-card-title>
                    {{ conference.title }}
                </v-card-title>
                <template v-if="conference.date">
                    <v-card-text v-if="formatDate(conference.date.start) !== formatDate(conference.date.end)">
                        🗓 <em>{{ formatDate(conference.date.start) }}</em> - <em>{{
                        formatDate(conference.date.end) }}</em>
                        <br/>
                        {{ conference.city }}, {{ conference.emojiflag }} {{ conference.country }}
                    </v-card-text>

                    <v-card-text v-else>
                        🗓 <em>{{ formatDate(conference.date.start) }}</em>
                        <br/>
                        {{ conference.city }}, {{ conference.emojiflag }} {{ conference.country }}
                    </v-card-text>
                </template>
                <v-card-text>
                    <span v-for="category in conference.category" :key="category">
                        <router-link :to="`/category/${category}`">
                            <v-chip color="deep-purple" text-color="white">{{ category }}</v-chip>
                        </router-link>
                    </span>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    url: {
      type: String,
      required: true
    },
    exclude: String,
    limit: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      showSpinner: false,
      conferences: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData',
    'exclude': 'fetchData'
  },
  methods: {
    fetchData () {
      this.showSpinner = true

      axios.get(this.url)
        .then((resp) => {
          this.conferences = resp.data.conferences
          if (this.exclude != null) {
            const excludeId = this.exclude
            this.conferences = this.conferences.filter(function (conf) {
              return conf._id !== excludeId
            })
          }
          // limiting results
          if (this.limit !== -1 && this.conferences.length > 0) {
            this.conferences = this.conferences.slice(0, this.limit)
          }
          this.showSpinner = false
          this.$emit('totalConferenceUpdated', this.conferences.length)
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
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin: 0 10px;
    }
</style>
