<template>
    <v-app>
        <v-content>
            <router-link :to="{ path: '/'}"><img src="./assets/logo.png"></router-link>
            <br/>
            <ul>
                <li class="inline" v-for="category in categories" v-bind:key="category.tag">
                    <router-link :to="`/category/${category.tag}`"><v-btn outline color="deep-purple">{{ category.title }}</v-btn></router-link>
                </li>
            </ul>

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
  name: 'App',
  data () {
    return {
      categories: [
        {
          title: '🤖 Backend',
          tag: 'backend'
        },
        {
          title: '🔨 DevOps',
          tag: 'devops'
        },
        {
          title: '🖥 Frontend',
          tag: 'frontend'
        },
        {
          title: '🎰 Marketing',
          tag: 'marketing'
        },
        {
          title: '📱 Mobile',
          tag: 'mobile'
        }, {
          title: '🎨 UI',
          tag: 'ui'
        }, {
          title: '🥤 UX',
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
    color: #5719B8 !important;
    text-decoration: none;
}
.router-link-active {
    text-transform: uppercase;
    font-size: 45px;
}
img {
    vertical-align: middle;
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
