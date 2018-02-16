import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const Store = new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
    token: '',
    baseUrl: 'https://core.aweconf.com',
    categories: [
      {
        emoji: '🧠',
        title: 'AI',
        url: '/category/ai',
        aggregate: true
      },
      {
        emoji: '📦',
        title: 'Backend',
        url: '/category/backend',
        aggregate: true
      },
      {
        emoji: '⛓',
        title: 'Blockchain',
        url: '/category/blockchain',
        aggregate: true
      },
      {
        emoji: '🔨',
        title: 'Devops',
        url: '/category/devops',
        aggregate: true

      },
      {
        emoji: '🖥',
        title: 'Frontend',
        url: '/category/frontend',
        aggregate: true

      },
      {
        emoji: '🎰',
        title: 'Marketing',
        url: '/category/marketing',
        aggregate: true
      },
      {
        emoji: '📱',
        title: 'Mobile',
        url: '/category/mobile',
        aggregate: true

      }, {
        emoji: '🚧️',
        title: 'PM',
        url: '/category/pm',
        aggregate: true

      }, {
        emoji: '👮‍♂️',
        title: 'Security',
        url: '/category/security',
        aggregate: true

      }, {
        emoji: '🐛️',
        title: 'Testing',
        url: '/category/testing',
        aggregate: true

      }, {
        emoji: '🎨',
        title: 'Ui',
        url: '/category/ui',
        aggregate: true

      }, {
        emoji: '🧤',
        title: 'Ux',
        url: '/category/ux',
        aggregate: true

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
    }
  }
})
