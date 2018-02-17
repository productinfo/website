<template>
    <v-btn small href="https://core.aweconf.com/auth/twitter" color="light-blue" class="white--text hidden-xs-only" v-if="!isAuth">
        <v-icon left small dark>fab fa-twitter</v-icon>
        Login with Twitter
    </v-btn>

    <v-menu v-else offset-y open-on-hover>
        <v-btn flat fab slot="activator">
            <v-avatar
                    :size="avatarSize"
                    class="grey lighten-4"
            >
                <img :src="`https://avatars.io/twitter/${username}`" :alt="username" :title="username">
            </v-avatar>
        </v-btn>
        <v-list>
            <v-list-tile @click="myconf">
                <v-list-tile-title>My Conferences</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="unapproved" v-if="this.role === 'Admin'">
                <v-list-tile-title>Unapproved</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="editingrights" v-if="this.role === 'Admin'">
                <v-list-tile-title>Rights Requests</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="logOut">
                <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-menu>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      isAuth: false,
      username: '',
      role: '',
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
            this.role = resp.data.user.role

            this.$session.start()
            this.$session.set('isAuthenticated', this.isAuth)
            this.$session.set('username', this.username)
            this.$session.set('role', this.role)
          } else {
            this.$session.destroy()
          }
        })
        .catch((err) => {
          this.$session.destroy()
          console.log(err)
        })
    },
    editingrights () {
      this.$router.push('/request/rights')
    },
    myconf () {
      this.$router.push('/my-conference')
    },
    unapproved () {
      this.$router.push('/unapproved')
    },
    logOut () {
      axios.get(this.$store.state.baseUrl + '/auth/logout', { withCredentials: true })
        .then((resp) => {
          if (resp.data.success && resp.data.action === 'logout') {
            this.$session.destroy()
            this.isAuth = false
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
