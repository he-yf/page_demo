import Vue from 'vue'

let isDev = process.env.NODE_ENV === 'development'
let staticPath = isDev ? '/static' : './static'
let rootPath = isDev ? '/' : './'

export default {
  install () {
    Vue.prototype.$isDev = isDev
    Vue.prototype.$staticPath = staticPath
    Vue.prototype.$rootPath = rootPath
  }
}
