<template>
    <v-app>
        <v-content>
            <router-link :to="{ path: '/'}"><img src="./assets/logo.png"></router-link>
            <router-link :to="{ path: '/category/backend'}">🤖 Backend</router-link> /
            <router-link :to="{ path: '/category/frontend'}">🖥 Frontend</router-link> /
            <router-link :to="{ path: '/category/marketing'}">🎰 Marketing</router-link> /
            <router-link :to="{ path: '/category/mobile'}">📱 Mobile</router-link> /
            <router-link :to="{ path: '/category/ui'}">🎨 UI</router-link> /
            <router-link :to="{ path: '/category/ux'}">🥤 UX</router-link>
            <router-view>
                <v-container fluid></v-container>
            </router-view>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <div>© Awesome Conferences {{ new Date().getFullYear() }}</div>
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
