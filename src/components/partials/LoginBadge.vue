<template>
    <v-btn small href="https://core.aweconf.com/auth/twitter" color="light-blue" class="white--text hidden-xs-only" v-if="!isAuth">
        <v-icon left small dark>fab fa-twitter</v-icon>
        Login with Twitter
    </v-btn>
    <v-btn v-else flat fab>
        <v-avatar
                :size="avatarSize"
                class="grey lighten-4"
        >
            <img :src="`https://avatars.io/twitter/${username}`" :alt="username" :title="username">
        </v-avatar>
    </v-btn>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      isAuth: false,
      username: '',
      avatarSize: 32,
      user: null,
      success: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios.get(this.$store.state.baseUrl + '/auth/profile', { withCredentials: true })
        .then((resp) => {
          if (resp.data.success && resp.data.action !== 'logout') {
            this.isAuth = true
            this.username = resp.data.user.username

            this.$session.start()
            this.$session.set('isAuthenticated', this.isAuth)
            this.$session.set('username', this.username)
          } else {
            this.$session.destroy()
          }
        })
        .catch((err) => {
          this.$session.destroy()
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
