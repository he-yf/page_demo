import Vue from 'vue'

let isDev = process.env.NODE_ENV === 'development'

export default {
  install () {
    Vue.prototype.$isDev = isDev
  }
}
