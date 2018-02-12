<template>
    <v-app id="inspire">
        <menu-aweconf :items="$store.state.categories"></menu-aweconf>
        <v-content>
            <router-view></router-view>
        </v-content>
        <footer-aweconf></footer-aweconf>
    </v-app>
</template>

<script>
import MenuHeader from './components/partials/MenuHeader.vue'
import Footer from './components/partials/Footer.vue'

export default {
  components: {
    'menu-aweconf': MenuHeader,
    'footer-aweconf': Footer
  },
  data: () => ({
    drawer: null
  })
}
</script>

<style>
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
    color: #673ab7 !important;
    text-decoration: none;
}
</style>
