<template>
    <v-navigation-drawer app mini-variant permanent>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="item in items" :key="item.tag">
                <template v-if="!item.separator">
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
                </template>
                <template v-else>
                    <hr/>
                </template>
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
    .image {
        width: 32px;
        height: 32px;
    }
</style>
