import Vue from 'vue'
import Vuetify, { VApp, VLayout, VMain } from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VLayout,
    VMain,
  },
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
})
