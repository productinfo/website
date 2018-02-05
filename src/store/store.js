import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
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
        emoji: '🎤',
        title: 'CfP Open',
        url: '/call-for-paper/open'

      }, {
        emoji: '📩️',
        title: 'Submit',
        url: '/submit'

      }
    ]
  }
})
