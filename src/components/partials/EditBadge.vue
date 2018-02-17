<template>
    <v-btn outline @click="redirectEdit">Edit</v-btn>
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
      this.canEdit = (this.$store.state.isAuth === true) && (this.isOwner === true)

      if (this.$store.state.isAdmin === true) {
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
