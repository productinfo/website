<template>
    <v-app>
        <menu-aweconf :items="categories"></menu-aweconf>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
        <footer-aweconf></footer-aweconf>
    </v-app>
</template>

<script>
import Menu from './components/partials/Menu.vue'
import Footer from './components/partials/Footer.vue'

export default {
  components: {
    'menu-aweconf': Menu,
    'footer-aweconf': Footer
  },
  data: () => ({
    categories: [
      {
        emoji: '🏡',
        title: 'Home',
        url: '/'
      },
      {
        emoji: '🤖',
        title: 'Backend',
        url: '/category/backend'
      },
      {
        emoji: '🔨',
        title: 'Devops',
        url: '/category/devops'

      },
      {
        emoji: '🖥',
        title: 'Frontend',
        url: '/category/frontend'

      },
      {
        emoji: '🎰',
        title: 'Marketing',
        url: '/category/marketing'

      },
      {
        emoji: '📱',
        title: 'Mobile',
        url: '/category/mobile'

      }, {
        emoji: '🚧️',
        title: 'PM',
        url: '/category/pm'

      }, {
        emoji: '👮‍♂️',
        title: 'Security',
        url: '/category/security'

      }, {
        emoji: '🐛️',
        title: 'Testing',
        url: '/category/testing'

      }, {
        emoji: '🎨',
        title: 'Ui',
        url: '/category/ui'

      }, {
        emoji: '🧤',
        title: 'Ux',
        url: '/category/ux'

      }, {
        emoji: '📩️',
        title: 'Submit',
        url: '/submit'

      }
    ]
  })
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
