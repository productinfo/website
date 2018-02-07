<template>
    <v-app id="inspire">
        <v-navigation-drawer
                fixed
                v-model="drawer"
                mini-variant
                app
        >
            <menu-aweconf :items="$store.getters.menu"></menu-aweconf>
        </v-navigation-drawer>
        <v-toolbar light fixed app>
            <v-btn fab dark small color="deep-purple" @click.stop="drawer = !drawer">
                <img src="./assets/logo-small-white.svg" class="icon">
            </v-btn>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <footer-aweconf></footer-aweconf>
    </v-app>
</template>

<script>
import Menu from './components/partials/Menu.vue'
import Footer from './components/partials/Footer.vue'

export default {
  components: {
    'menu-aweconf': Menu,
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
