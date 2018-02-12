<template>
    <v-toolbar light fixed app class="elevation-0">
        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/">
                <img src="../../assets/logo-small.svg" class="logo"/>
            </v-btn>
            <span>Home</span>
        </v-tooltip>

        <v-menu offset-y>
            <v-btn icon slot="activator">
                <v-icon>🎟</v-icon>
            </v-btn>
            <v-list>
                <v-list-tile v-for="item in items" :key="item.tag" :to="item.url">
                    <v-list-tile-title>{{ item.emoji }} {{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/call-for-paper/open">
                <v-icon>🎤</v-icon>
            </v-btn>
            <span>Call for Paper</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn icon slot="activator" to="/submit">
                <v-icon>📩</v-icon>
            </v-btn>
            <span>Submit Conference</span>
        </v-tooltip>

    </v-toolbar>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style scoped>
.logo {
    width: 32px;
    height: 32px;
}
</style>
