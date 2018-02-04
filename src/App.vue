<template>
    <v-app>
        <menu-aweconf></menu-aweconf>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <div>&copy; {{ new Date().getFullYear() }} AweConf.com - <a href="https://twitter.com/aweconf" target="_blank">@aweconf</a> - <router-link :to="{ path: '/about' }" active-class="noneclass">About</router-link> - <router-link :to="`/submit`" active-class="noneclass">Submit</router-link> - <a href="https://www.iubenda.com/privacy-policy/7904617" target="_blank">Privacy</a> - <a href="https://www.iubenda.com/privacy-policy/7904617/cookie-policy" target="_blank">Cookie</a> Policy</div>
        </v-footer>
    </v-app>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  components: {
    'menu-aweconf': Menu
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
