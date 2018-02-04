<template>
    <div>
        <v-progress-circular indeterminate color="deep-purple" v-if="showSpinner"></v-progress-circular>
        <ul>
            <li v-for="conference in conferences" :key="conference.id">
                    <span v-for="category in conference.category" :key="category">
                        <router-link :to="`/category/${category}`">
                            <v-chip color="deep-purple" text-color="white">{{ category }}</v-chip>
                        </router-link>
                    </span>
                <router-link :to="`/conference/${conference._id}`">{{ conference.title }}</router-link>
            </li>
        </ul>
    </div>
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
        })
        .catch((err) => {
          console.log(err)
        })
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
