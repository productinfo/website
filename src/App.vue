<template>
    <v-app>
        <v-content>
            <router-link :to="{ path: '/'}"><img src="./assets/logo.png"></router-link>
            <router-link :to="{ path: '/category/backend'}"><v-btn outline color="deep-purple">🤖 Backend</v-btn></router-link>
            <router-link :to="{ path: '/category/frontend'}"><v-btn outline color="deep-purple">🖥 Frontend</v-btn></router-link>
            <router-link :to="{ path: '/category/marketing'}"><v-btn outline color="deep-purple">🎰 Marketing</v-btn></router-link>

            <router-link :to="{ path: '/category/mobile'}"><v-btn outline color="deep-purple">📱 Mobile</v-btn></router-link>
            <router-link :to="{ path: '/category/ui'}"><v-btn outline color="deep-purple">🎨 UI</v-btn></router-link>
            <router-link :to="{ path: '/category/ux'}"><v-btn outline color="deep-purple">🥤 UX</v-btn></router-link>
            <router-view>
                <v-container fluid></v-container>
            </router-view>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <div>© Awesome Conferences {{ new Date().getFullYear() }} - <a href="https://www.iubenda.com/privacy-policy/7904617">Privacy</a> - <a href="https://www.iubenda.com/privacy-policy/7904617/cookie-policy">Cookie</a> Policy</div>
        </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App'
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
    color: #5719B8 !important;
    text-decoration: none;
}
.router-link-active {
    text-transform: uppercase;
    font-size: 35px;
}
img {
    vertical-align: middle;
}
</style>
