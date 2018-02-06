<template>

</template>

<script>
export default {
  props: {
    'ios-url': String,
    'android-url': String,
    'app-name': String,
    'app-price': {
      type: String,
      default: 'FREE'
    }
  },
  data () {
    return {
      drawer: true,
      mini: true,
      right: null
    }
  }
}
</script>

<style scoped>
</style>
