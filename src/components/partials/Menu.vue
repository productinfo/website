<template>
    <v-navigation-drawer app mini-variant permanent>
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="../../assets/logo-small.svg" >
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>AweConf</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon @click.native.stop="mini = !mini">
                            <v-icon>chevron_left</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="item in items" :key="item.tag">
                <v-list-tile-action>
                    <v-tooltip right>
                        <v-btn icon slot="activator" :to="item.url">
                            <v-icon>{{ item.emoji }}</v-icon>
                        </v-btn>
                        <span>{{ item.title }}</span>
                    </v-tooltip>
                </v-list-tile-action>
                <v-list-tile-content>
                    <router-link :to="item.url">
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </router-link>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    items: Array
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

<style>
    a {
        color: #673ab7 !important;
        text-decoration: none;
    }
    .router-link-active {
        text-transform: uppercase;
    }
</style>
