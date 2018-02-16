<template>
    <v-btn small href="`${this.$store.baseUrl}`/auth/twitter" color="light-blue" class="white--text hidden-xs-only" v-if="$store.state.isAuthenticated === false">
        <v-icon left small dark>fab fa-twitter</v-icon>
        Login with Twitter
    </v-btn>
    <v-btn v-else flat fab>
        <v-avatar
                :size="avatarSize"
                class="grey lighten-4"
        >
            <img :src="`https://avatars.io/twitter/${$store.state.user.username}`" :alt="$store.state.user.username" :title="$store.state.user.username">
        </v-avatar>
    </v-btn>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
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
      axios.get(this.$store.baseUrl + '/auth/profile', { withCredentials: true })
        .then((resp) => {
          this.$store.state.isAuthenticated = resp.data.success
          if (this.$store.state.isAuthenticated) {
            this.$store.state.user = resp.data.user
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
