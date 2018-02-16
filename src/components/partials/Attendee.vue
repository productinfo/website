<template>
    <v-card-text>
        <h2>Attendees</h2>
        <v-btn outline fab color="deep-purple" @click="triggerAttending" v-if="isAttendee">
            <v-icon dark>add</v-icon>
        </v-btn>
        <v-btn fab color="deep-purple" @click="triggerAttending" v-else>
            <v-icon dark>remove</v-icon>
        </v-btn>
        <twitter-badge v-for="attendee in attendees" :account="attendee" :key="attendee"></twitter-badge>
    </v-card-text>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    attendees: [],
    conferenceId: ''
  },
  data () {
    return {
      isAttendee: false
    }
  },
  created () {
    this.checkUserIsAttendee()
  },
  methods: {
    triggerAttending () {
      axios.post(this.$store.state.baseUrl + '/api/attending', { id: this.conferenceId, twitter: this.$store.user.username, withCredentials: true })
        .then((resp) => {
          if (resp.data.success === true) {
            this.isAttendee = resp.data.isAttending
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkUserIsAttendee () {
      this.isAttendee = this.attendees.includes(this.$store.user.username)
    }
  }
}
</script>

<style scoped>

</style>
