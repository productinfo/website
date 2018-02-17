<template>

</template>

<script>
import axios from 'axios'

export default {
  name: 'ConferenceEdit',
  data () {
    return {
    }
  },

  created () {
    if (this.$session.get('role') === 'Admin') {
      this.redirect()
    } else {
      // this.fetchData()
    }
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    redirect () {
      this.$router.push('/')
    },
    fetchData () {

    }
  }
}
</script>

<style scoped>

</style>
