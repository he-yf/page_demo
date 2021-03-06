// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import '@/assets/css/common.css' /* 引入公共样式 */
import global from './untils/global' /* 引入公共常量 */

Vue.use(global)

/* 视频播放引入插件 */
Vue.prototype.$video = Video

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
