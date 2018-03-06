<template>
    <v-toolbar light fixed app class="elevation-0">
        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/">
                <img src="../../assets/logo-small.svg" class="logo"/>
            </v-btn>
            <span>Home</span>
        </v-tooltip>

        <v-spacer></v-spacer>

        <v-menu offset-y class="moveup">
            <v-btn flat slot="activator">
                🔽 Categories
            </v-btn>
            <v-list>
                <v-list-tile v-for="item in items" :key="item.tag" :to="item.url">
                    <v-list-tile-title>{{ item.emoji }} {{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/call-for-paper/open">
                🎤
            </v-btn>
            <span>Call for Paper</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/submit">
                📤
            </v-btn>
            <span>Submit Conference</span>
        </v-tooltip>

        <login-badge></login-badge>

    </v-toolbar>
</template>

<script>
import LoginBadge from './LoginBadge.vue'

export default {
  components: {
    'login-badge': LoginBadge
  },
  props: {
    items: Array
  }
}
</script>

<style scoped>
.moveup {
    margin-top: -12px;
}
.logo {
    width: 32px;
    height: 32px;
}
::selection {
    color: #5719B8 !important;
}
</style>
