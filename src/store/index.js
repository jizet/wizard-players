import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import players from './modules/players'

Vue.use(Vuex)
Vue.use(Vuetify)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  modules: {
    players
  },
  strict: DEBUG
})
