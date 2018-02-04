<template>
        <ul>
            <li class="inline">
                <router-link :to="{ path: '/'}"><img class="logo" src="../assets/logo-small.svg"></router-link>
            </li>
            <li class="inline" v-for="category in categories" v-bind:key="category.tag">
                <router-link :to="`/category/${category.tag}`">
                    <v-btn outline color="deep-purple">{{ category.emoji }} {{ category.tag }}</v-btn>
                </router-link>
            </li>
        </ul>
</template>

<script>
export default {
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
.logo {
    width: 64px;
}
</style>
