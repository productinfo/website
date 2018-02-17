<template>
    <v-btn outline v-if="canEdit" @click="redirectEdit">Edit</v-btn>
    <v-btn outline v-else @click="requestEditing">Request Editing</v-btn>
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
      canEdit: false
    }
  },
  created () {
    this.checkAuth()
  },
  methods: {
    checkAuth () {
      this.isOwner = (this.$session.get('username') === this.owner)
      this.canEdit = (this.$session.get('isAuthenticated') === true) && (this.isOwner === true)

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

        axios.post(this.$store.state.baseUrl + '/api/request/rights', content, { withCredentials: true })
          .then((resp) => {
            if (resp.data.success === true) {
              // TODO
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
