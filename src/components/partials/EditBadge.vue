<template>
    <v-btn outline v-if="canEdit" @click="redirectEdit">Edit</v-btn>
    <v-btn outline v-else @click="requestEditing">I want to edit this</v-btn>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    owner: String,
    slug: String
  },
  data () {
    return {
      isOwner: false,
      canEdit: false,
      isAuth: false
    }
  },
  created () {
    this.checkAuth()
  },
  watch: {
    'owner': 'checkAuth'
  },
  methods: {
    checkAuth () {
      this.isOwner = (this.$session.get('username') === this.owner)
      this.isAuth = (this.$session.get('isAuthenticated') === true)
      this.canEdit = this.isAuth && this.isOwner

      if (this.$session.get('role') === 'Admin') {
        this.canEdit = true
      }
    },
    redirectEdit () {
      this.$router.push('/c/' + this.slug + '/edit')
    },
    requestEditing () {
      if (this.$session.get('isAuthenticated') !== true) {
        alert('In order to add you as attendee, login first using Twitter.')
      } else {
        const content = {
          slug: this.slug
        }

        axios.post(this.$store.state.baseUrl + '/api/right/request', content, { withCredentials: true })
          .then((resp) => {
            if (resp.data.success === true) {
              alert('Your request has been submitted, a reviewer will get in touch sooner with you')
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
