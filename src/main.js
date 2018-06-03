// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueRouter from 'vue-router'
import 'normalize.css'
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
// import 'vue-ydui/dist/ydui.rem.css';//使用rem
import 'vue-ydui/dist/ydui.px.css'; //使用px
import api, { domain } from './js/api.js' //导入api  {}这种导入方法是导入非默认的
import axios from 'axios'
import "../static/css/global.css"
axios.defaults.baseURL = domain; //配置默认域名
axios.defaults.withCredentials = true; //允许携带cookie
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

// Vue.use(VueRouter);
Vue.use(YDUI);

Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // render :h => h(App)
    components: { App },
    template: '<App/>'

})