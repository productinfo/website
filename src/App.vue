<template>
    <v-app>
        <menu-aweconf></menu-aweconf>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <footer-aweconf></footer-aweconf>
    </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'menu-aweconf': Menu,
    'footer-aweconf': Footer
  }
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
