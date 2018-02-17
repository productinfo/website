<template>
    <div>
        <h3> <b v-if="attendees.length > 0">{{ attendee.length }}</b> Attendees</h3>
        <template v-if="isAuth">
            <v-btn fab color="deep-purple" @click="triggerAttending" v-if="isAttendee">
                <v-icon color="white">remove</v-icon>
            </v-btn>
            <v-btn fab color="deep-purple" @click="triggerAttending" v-else>
                <v-icon color="white">add</v-icon>
            </v-btn>
        </template>
        <template v-else>
            <v-btn fab outline color="deep-purple" @click="triggerAttending" v-if="!isAttendee">
                <v-icon>add</v-icon>
            </v-btn>
        </template>
        <template v-for="attendee in attendees">
            <twitter-badge :account="attendee" :key="attendee"></twitter-badge>
        </template>
    </div>

</template>

<script>
import axios from 'axios'
import TwitterBadge from './TwitterBadge.vue'

export default {
  components: {
    'twitter-badge': TwitterBadge
  },
  props: {
    attendees: Array,
    conferenceId: String,
    reload: Function
  },
  data () {
    return {
      isAuth: false,
      isAttendee: false,
      username: ''
    }
  },
  created () {
    this.isAuth = (this.$session.get('isAuthenticated') === true)
  },
  updated () {
    if (this.isAuth === true) {
      this.username = this.$session.get('username')
      this.checkUserIsAttendee()
    }
  },
  methods: {
    triggerAttending () {
      if (this.isAuth === false) {
        return alert('In order to add you as attendee, login first using Twitter.')
      }

      axios.post(this.$store.state.baseUrl + '/api/attending', { id: this.conferenceId, twitter: this.username }, { withCredentials: true })
        .then((resp) => {
          if (resp.data.success === true) {
            this.isAttendee = resp.data.isAttending
            this.reload()
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkUserIsAttendee () {
      this.isAttendee = (this.attendees.indexOf(this.username) !== -1)
    }
  }
}
</script>

<style scoped>

</style>
