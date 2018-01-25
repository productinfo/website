<template>
    <v-app>
        <v-content>
            <ul>
                <li class="inline">
                    <router-link :to="{ path: '/'}"><img src="./assets/logo-small.png"></router-link>
                </li>
                <li class="inline" v-for="category in categories" v-bind:key="category.tag">
                    <router-link :to="`/category/${category.tag}`"><v-btn outline color="deep-purple">{{ category.emoji }} {{ category.tag }}</v-btn></router-link>
                </li>
            </ul>
            <router-view>
                <v-container fluid></v-container>
            </router-view>
        </v-content>
        <v-footer app>
            <v-spacer></v-spacer>
            <div>© Awesome Conferences {{ new Date().getFullYear() }} - <a href="https://twitter.com/aweconf" target="_blank">@aweconf</a> - <router-link :to="{ path: '/about' }" active-class="noneclass">About</router-link> - <a href="https://www.iubenda.com/privacy-policy/7904617" target="_blank">Privacy</a> - <a href="https://www.iubenda.com/privacy-policy/7904617/cookie-policy" target="_blank">Cookie</a> Policy</div>
        </v-footer>
    </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      categories: [
        {
          emoji: '🤖',
          tag: 'backend'
        },
        {
          emoji: '🔨',
          tag: 'devops'
        },
        {
          emoji: '🖥',
          tag: 'frontend'
        },
        {
          emoji: '🎰',
          tag: 'marketing'
        },
        {
          emoji: '📱',
          tag: 'mobile'
        }, {
          emoji: '🎨',
          tag: 'ui'
        }, {
          emoji: '🥤',
          tag: 'ux'
        }
      ]
    }
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
.router-link-active {
    text-transform: uppercase;
    font-size: 45px;
}
img {
    vertical-align: bottom;
}
ul {
    list-style-type: none;
    padding: 0;
}
li.inline {
    margin: 0 10px;
    display: inline-flex;
}
</style>
