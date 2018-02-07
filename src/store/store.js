import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
    categories: [
      {
        emoji: '🧠',
        title: 'AI',
        url: '/category/ai'
      },
      {
        emoji: '📦',
        title: 'Backend',
        url: '/category/backend'
      },
      {
        emoji: '⛓',
        title: 'Blockchain',
        url: '/category/blockchain'
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

      }
    ],
    countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
      'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands',
      'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
      'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
      'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
      'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
      'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia',
      'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania',
      'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia',
      'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
      'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
      'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan',
      'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', "Timor L'Este", 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia',
      'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)',
      'Yemen', 'Zambia', 'Zimbabwe']
  },
  getters: {
    categoriesName: state => {
      return state.categories.map(function (item) {
        return item.title
      })
    },
    menu: state => {
      var cats = []
      cats.push({
        separator: true
      })
      cats.push({
        emoji: '🏡',
        title: 'Home',
        url: '/'
      })
      cats.push({
        emoji: '🕶',
        title: 'All',
        url: '/all'
      })
      cats.push({
        separator: true
      })
      cats.push(...state.categories)
      cats.push({
        separator: true
      })
      cats.push({
        emoji: '🎤',
        title: 'Cfp',
        url: '/call-for-paper/open'

      })
      cats.push({
        emoji: '📩️',
        title: 'Submit',
        url: '/submit'
      })
      return cats
    }
  }
})
