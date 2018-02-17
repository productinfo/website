<template>
    <v-btn outline v-if="canEdit" @click="redirectEdit">Edit</v-btn>
</template>

<script>
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
    }
  }
}
</script>

<style scoped>

</style>
