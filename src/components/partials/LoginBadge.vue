<template>
    <v-btn small href="https://aweconf.herokuapp.com/auth/twitter" color="light-blue" class="white--text" v-if="success === false">
        <v-icon left small dark>fab fa-twitter</v-icon>
        Login with Twitter
    </v-btn>
    <v-btn v-else>
        {{ user.twitterUserId }}
    </v-btn>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      user: {},
      success: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get('https://aweconf.herokuapp.com/api/profile')
        .then((resp) => {
          this.success = resp.data.success
          if (this.success) {
            this.user = resp.data.user
          }
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
