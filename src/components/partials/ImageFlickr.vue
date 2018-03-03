<template>
    <img :src="images[0].media.m" />
</template>

<script>
import axios from 'axios'

export default {
  name: 'image-flickr',
  props: {
    keyword: String
  },
  data: function () {
    return {
      images: [],
      query: '',
      callApiTimeout: null
    }
  },
  methods: {
    fetchData () {
      const reqURL = 'https://api.flickr.com/services/feeds/photos_public.gne'

      const options = {
        params: {
          format: 'json',
          tags: this.keyword
        }
      }

      axios
        .get(reqURL, options)
        .then((resp) => {
          if (resp.data.items) {
            this.images = resp.data.items
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchData()
  }
}

</script>

<style scoped>

</style>
