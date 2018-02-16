<template>
    <v-btn small href="https://core.aweconf.com/auth/twitter" color="light-blue" class="white--text hidden-xs-only" v-if="isAuth">
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
          if (resp.data.success) {
            this.isAuth = true
            localStorage.setItem('isAuthenticated', true)
            this.username = resp.data.user.username
            localStorage.setItem('username', resp.data.user.username)
          } else {
            localStorage.removeItem('isAuthenticated')
            localStorage.removeItem('username')
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

</style>
